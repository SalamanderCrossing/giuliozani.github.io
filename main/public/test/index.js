import * as THREE from "three"; //"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GPUComputationRenderer } from "three/addons/misc/GPUComputationRenderer.js";

const textureWidth = 2;
const sphereCount = textureWidth * textureWidth;
const bounds = 80;
const boundsHalf = bounds / 2;

class MultipleSpheresGeometry extends THREE.BufferGeometry {
  constructor(numSpheres, radius) {
    super();
    const refIndices = [];
    const positions = [];

    const sphereGeometry = new THREE.SphereGeometry(radius, 32, 32);
    for (let i = 0; i < numSpheres; i++) {
      for (let j = 0; j < sphereGeometry.index.array.length; j++) {
        refIndices.push(i, 1);
      }
      // pushes a copy of the sphere geometry's points
      positions.push(...sphereGeometry.attributes.position.array);
    }

    this.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(positions), 3),
    );
    this.setAttribute(
      "refIndex",
      new THREE.BufferAttribute(new Float32Array(refIndices), 2), // flat because the array is 2D
    );
  }
}

const vertexShader = glsl`
varying vec3 pos;
uniform float time;
uniform sampler2D sphereVertex;
attribute vec2 refIndex;
varying vec2 vRefIndex;

void main() {
  vRefIndex = refIndex;
  vec4 tmpPos = texture2D( sphereVertex, vec2( gl_PointCoord )); // the + 0.5 is to get the center of the pixel
  vec3 pos =  position + 10.*tmpPos.xyz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;
const fragmentShader = `
//varying vec3 pos;
//uniform float time;
varying vec2 vRefIndex;

void main() {
  gl_FragColor = vec4(vRefIndex.x/3.0, vRefIndex.x/3.0, 0.0, 1.);
}
`;

const fragmentShaderPosition = glsl`
uniform float time;

void main() {
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec4 position = texture2D(texturePosition, uv);
  vec4 velocity = texture2D(textureVelocity, uv);
  gl_FragColor = vec4(100., 100., 100., 1.);
}
`;

const fragmentShaderVelocity = glsl`
uniform float time;

void main() {
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec4 position = texture2D(texturePosition, uv);
  vec4 velocity = texture2D(textureVelocity, uv);
  gl_FragColor = vec4(0.01, 0.01, 0.0, 1.0);
}
`;

const fillPositionTexture = (texture) => {
  const theArray = texture.image.data;

  for (let k = 0, kl = theArray.length; k < kl; k += 4) {
    const x = Math.random() * bounds - boundsHalf;
    const y = Math.random() * bounds - boundsHalf;
    const z = Math.random() * bounds - boundsHalf;

    theArray[k + 0] = x;
    theArray[k + 1] = y;
    theArray[k + 2] = z;
    theArray[k + 3] = 1;
  }
};

const fillVelocityTexture = (texture) => {
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
};

const init = () => {
  const container = document.createElement("div");
  document.body.appendChild(container);
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    30000,
  );
  camera.position.z = 350;
  const scene = new THREE.Scene();
  const geo = new THREE.PlaneGeometry(2000, 2000, 8, 8);
  const mat = new THREE.MeshBasicMaterial({
    color: "green",
    side: THREE.DoubleSide,
  });
  const plane = new THREE.Mesh(geo, mat);
  plane.rotateX(-Math.PI / 2);
  plane.position.y = 0;
  scene.add(plane);

  scene.background = new THREE.Color("black");
  const renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);
  new OrbitControls(camera, renderer.domElement);
  renderer.render(scene, camera);
  // const geometry = new THREE.SphereGeometry(20, 32, 32);
  // const material = new THREE.ShaderMaterial({
  //   uniforms: {
  //     time: { value: 0 },
  //     texture: { value: null },
  //   },
  //   vertexShader: vertexShader,
  //   fragmentShader: fragmentShader,
  // });

  const spheresUniforms = {
    texturePosition: { value: null },
    textureVelocity: { value: null },
    time: { value: 1.0 },
  };
  const geometry = new MultipleSpheresGeometry(sphereCount, 10);
  geometry.computeVertexNormals();
  const material = new THREE.ShaderMaterial({
    uniforms: spheresUniforms,
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
  });
  const mesh = new THREE.Points(geometry, material);
  mesh.matrixAutoUpdate = false;
  mesh.updateMatrix();
  scene.add(mesh);
  const gpuCompute = new GPUComputationRenderer(
    textureWidth,
    textureWidth,
    renderer,
  );
  const dtPosition = gpuCompute.createTexture();
  const dtVelocity = gpuCompute.createTexture();
  fillPositionTexture(dtPosition);
  fillVelocityTexture(dtVelocity);
  const dtPositionVariable = gpuCompute.addVariable(
    "texturePosition",
    fragmentShaderPosition,
    dtPosition,
  );
  const dtVelocityVariable = gpuCompute.addVariable(
    "textureVelocity",
    fragmentShaderVelocity,
    dtVelocity,
  );
  gpuCompute.setVariableDependencies(dtPositionVariable, [
    dtPositionVariable,
    dtVelocityVariable,
  ]);
  gpuCompute.setVariableDependencies(dtVelocityVariable, [
    dtPositionVariable,
    dtVelocityVariable,
  ]);
  dtPositionVariable.material.uniforms.time = { value: 0 };
  dtPositionVariable.material.uniforms.texturePosition = {
    value: null,
  };
  dtPositionVariable.material.uniforms.textureVelocity = {
    value: null,
  };
  dtVelocityVariable.material.uniforms.time = { value: 0 };
  dtVelocityVariable.material.uniforms.texturePosition = {
    value: null,
  };
  dtVelocityVariable.material.uniforms.textureVelocity = {
    value: null,
  };
  const dtPositionUniforms = dtPositionVariable.material.uniforms;
  const dtVelocityUniforms = dtVelocityVariable.material.uniforms;

  const error = gpuCompute.init();
  if (error !== null) {
    console.error(error);
  }

  const t0 = performance.now();
  const render = () => {
    const t = performance.now() - t0;
    mesh.material.uniforms.time.value = t * 0.01;
    dtPositionUniforms.time.value = t * 0.01;
    dtVelocityUniforms.time.value = t * 0.01;
    spheresUniforms.texturePosition.value = gpuCompute.getCurrentRenderTarget(
      dtPositionVariable,
    ).texture;
    spheresUniforms.textureVelocity.value = gpuCompute.getCurrentRenderTarget(
      dtVelocityVariable,
    ).texture;
    spheresUniforms.time.value = t * 0.01;
    gpuCompute.compute();
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  };
  render();
};
init();
