import * as THREE from "three";
//@ts-ignore
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
//@ts-ignore
import Stats from "three/addons/libs/stats.module.js";
//@ts-ignore
import { GUI } from "three/addons/libs/lil-gui.module.min.js";
//@ts-ignore
import { GPUComputationRenderer } from "three/addons/misc/GPUComputationRenderer.js";
//@ts-ignore
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
//@ts-ignore
import { AfterimagePass } from "three/addons/postprocessing/AfterimagePass.js";
//@ts-ignore
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
//@ts-ignore
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import fragmentShaderVelocity from "./birdVelocity.glsl?raw";
import fragmentShaderPosition from "./birdPosition.glsl?raw";
import vertexShader from "./birdVS.glsl?raw";
import fragmentShader from "./birdFS.glsl?raw";
/* TEXTURE WIDTH FOR SIMULATION */
const WIDTH = 32;
const BIRDS = 10000; //WIDTH * WIDTH;
const BOUNDS = window.innerHeight / 4;
const BOUNDS_HALF = BOUNDS / 2;
//let stats;
let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
let mouseX = 0;
let mouseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
let last = performance.now();
let gpuCompute: GPUComputationRenderer;
let velocityVariable;
let positionVariable: GPUComputationRenderer.Variable;
let positionUniforms: Record<string, any>;
let velocityUniforms: Record<string, any>;
let material: THREE.ShaderMaterial;
let composer: EffectComposer;

//const fragmentShaderVelocity = await (await fetch("./birdVelocity.glsl"))
//  .text();

material = new THREE.ShaderMaterial({
  uniforms: {
    positionTex: { value: null },
    resolution: { value: new THREE.Vector2() },
    width: { value: WIDTH },
  },
  vertexShader,
  fragmentShader,
});
export default function init(container: HTMLElement) {
  //container = document.createElement("div");
  //document.body.appendChild(container);
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    30000,
  );
  camera.position.z = 1000;
  scene = new THREE.Scene();
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);
  const renderScene = new RenderPass(scene, camera);
  // resolution, strength, radius, threshold
  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(
      window.innerWidth,
      window.innerHeight,
    ),
    3.0,
    0,
    0,
  );
  const afterImagePass = new AfterimagePass(
    0.9,
  );
  afterImagePass.uniforms["damp"].value = 0.975;

  composer = new EffectComposer(renderer);
  composer.addPass(renderScene);
  composer.addPass(bloomPass);
  composer.addPass(afterImagePass);

  scene.background = new THREE.Color("black");

  new OrbitControls(camera, renderer.domElement);
  initComputeRenderer();
  material.uniforms.positionTex.value = positionVariable.texture;
  //stats = new Stats();
  //container.appendChild(stats.dom);
  container.style.touchAction = "none";
  container.addEventListener("pointermove", onPointerMove);
  window.addEventListener("resize", onWindowResize);
  //const gui = new GUI();
  const effectController = {
    separation: 20.0,
    alignment: 50.0,
    cohesion: 50.0,
    freedom: 0.9,
  };

  const valuesChanger = function () {
    velocityUniforms["separationDistance"].value = effectController.separation;
    velocityUniforms["alignmentDistance"].value = effectController.alignment;
    velocityUniforms["cohesionDistance"].value = effectController.cohesion;
    velocityUniforms["freedomFactor"].value = effectController.freedom;
  };
  valuesChanger();
  // gui
  //   .add(effectController, "separation", 0.0, 100.0, 1.0)
  //   .onChange(valuesChanger);
  // gui
  //   .add(effectController, "alignment", 0, 200, 0.001)
  //   .onChange(valuesChanger);
  // gui
  //   .add(effectController, "cohesion", 0, 200, 0.001)
  //   .onChange(valuesChanger);
  // gui.close();
  initBirds();
  animate();
}
function initComputeRenderer() {
  gpuCompute = new GPUComputationRenderer(WIDTH, WIDTH, renderer);
  if (renderer.capabilities.isWebGL2 === false) {
    gpuCompute.setDataType(THREE.HalfFloatType);
  }
  const dtPosition = gpuCompute.createTexture();
  const dtVelocity = gpuCompute.createTexture();
  fillPositionTexture(dtPosition);
  fillVelocityTexture(dtVelocity);
  velocityVariable = gpuCompute.addVariable(
    "textureVelocity",
    fragmentShaderVelocity,
    dtVelocity,
  );
  positionVariable = gpuCompute.addVariable(
    "texturePosition",
    fragmentShaderPosition,
    dtPosition,
  );
  gpuCompute.setVariableDependencies(velocityVariable, [
    positionVariable,
    velocityVariable,
  ]);
  gpuCompute.setVariableDependencies(positionVariable, [
    positionVariable,
    velocityVariable,
  ]);
  positionUniforms = positionVariable.material.uniforms;
  velocityUniforms = velocityVariable.material.uniforms;
  positionUniforms["time"] = { value: 0.0 };
  positionUniforms["delta"] = { value: 0.0 };
  velocityUniforms["time"] = { value: 1.0 };
  velocityUniforms["delta"] = { value: 0.0 };
  velocityUniforms["testing"] = { value: 1.0 };
  velocityUniforms["separationDistance"] = { value: 1.0 };
  velocityUniforms["alignmentDistance"] = { value: 1.0 };
  velocityUniforms["cohesionDistance"] = { value: 1.0 };
  velocityUniforms["freedomFactor"] = { value: 1.0 };
  velocityUniforms["predator"] = { value: new THREE.Vector3() };
  velocityVariable.material.defines.BOUNDS = BOUNDS.toFixed(2);
  velocityVariable.wrapS = THREE.RepeatWrapping;
  velocityVariable.wrapT = THREE.RepeatWrapping;
  positionVariable.wrapS = THREE.RepeatWrapping;
  positionVariable.wrapT = THREE.RepeatWrapping;
  const error = gpuCompute.init();

  if (error !== null) {
    console.error(error);
  }
}
function initBirds() {
  const mult = 1;
  const positions = new Float32Array(
    BIRDS * 3 * mult,
  );
  const BOUNDS = window.innerHeight / 4;
  const BOUNDS_HALF = BOUNDS / 2;
  const geometry = new THREE.BufferGeometry();
  for (let i = 0; i < BIRDS; i++) {
    for (let j = 0; j < mult; j++) {
      positions[i * 3 * mult + j * 3] = (Math.random() * BOUNDS) - BOUNDS_HALF;
      positions[i * 3 * mult + j * 3 + 1] = (Math.random() * BOUNDS) -
        BOUNDS_HALF;
      positions[i * 3 * mult + j * 3 + 2] = (Math.random() * BOUNDS) -
        BOUNDS_HALF;
    }
  }
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const point = new THREE.Points(geometry, material);
  scene.add(point);
}

function fillPositionTexture(texture: THREE.DataTexture) {
  const theArray = texture.image.data;

  for (let k = 0, kl = theArray.length; k < kl; k += 4) {
    const x = Math.random() * BOUNDS - BOUNDS_HALF;
    const y = Math.random() * BOUNDS - BOUNDS_HALF;
    const z = Math.random() * BOUNDS - BOUNDS_HALF;

    theArray[k + 0] = x;
    theArray[k + 1] = y;
    theArray[k + 2] = z;
    theArray[k + 3] = 1;
  }
}

function fillVelocityTexture(texture: THREE.DataTexture) {
  const theArray = texture.image.data;

  for (let k = 0, kl = theArray.length; k < kl; k += 4) {
    const x = Math.random() - 0.5;
    const y = Math.random() - 0.5;
    const z = Math.random() - 0.5;

    theArray[k + 0] = x * 10;
    theArray[k + 1] = y * 10;
    theArray[k + 2] = z * 10;
    theArray[k + 3] = 1;
  }
}

function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onPointerMove(event: any) {
  if (event.isPrimary === false) return;

  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;
}
function animate() {
  requestAnimationFrame(animate);
  render();
}
function render() {
  const now = performance.now();
  let delta = (now - last) / 1000;

  if (delta > 1) delta = 1; // safety cap on large deltas
  last = now;

  positionUniforms["time"].value = now;
  positionUniforms["delta"].value = delta;
  velocityUniforms["time"].value = now;
  velocityUniforms["delta"].value = delta;
  positionUniforms["time"].value = now;
  positionUniforms["delta"].value = delta;

  //
  velocityUniforms["predator"].value.set(
    (0.5 * mouseX) / windowHalfX,
    (-0.5 * mouseY) / windowHalfY,
    0,
  );

  mouseX = 10000;
  mouseY = 10000;

  gpuCompute.compute();

  material.uniforms.positionTex.value =
    gpuCompute.getCurrentRenderTarget(positionVariable).texture;
  material.uniforms.resolution.value.set(WIDTH, WIDTH);
  // renderer.render(scene, camera);
  composer.render();
}
