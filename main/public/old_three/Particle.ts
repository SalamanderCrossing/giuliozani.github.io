import * as THREE from "three";
const sigmoid = (z: number, k = 200) => 1 / (1 + Math.exp(-z / k));
const rnd = (min: number, max: number) => Math.random() * (max - min) + min;
const clip = (x: number, min: number, max: number) =>
  Math.min(Math.max(x, min), max);
export default class Particle {
  color: string;
  velocity: THREE.Vector3;
  spaceWidth: number;
  spaceHeight: number;
  scene: THREE.Scene;
  t: number;
  variantRadius: number;
  sphere: THREE.Mesh;
  #gridPosition: [number, number, number, number] = [
    0,
    0,
    0,
    0,
  ];
  spaceDepth: number;
  constructor({
    scene,
    spatialWidth: spatialWidth,
    spatialHeight: spatialHeight,
    spatialDepth: spatialDepth,
    variantSpeed,
    variantRadius,
    defaultSpeed,
    defaultRadius,
    particleColor,
  }: {
    scene: THREE.Scene;
    spatialWidth: number;
    spatialHeight: number;
    spatialDepth: number;
    variantRadius: number;
    variantSpeed: number;
    defaultRadius: number;
    defaultSpeed: number;
    particleColor: string;
  }) {
    this.scene = scene;
    const geometry = new THREE.SphereGeometry(
      variantRadius / 2,
      32,
      32,
    );
    const material = new THREE.MeshBasicMaterial({ color: "white" });
    const sphere = new THREE.Mesh(geometry, material);
    this.sphere = sphere;
    this.scene.add(sphere);

    this.spaceWidth = spatialWidth;
    this.spaceHeight = spatialHeight;
    this.spaceDepth = spatialDepth;
    this.t = 0;
    // this.sphere.position.x = rnd(-canvasWidth/2, canvasWidth/2);
    // this.sphere.position.y = rnd(-canvasHeight/2, canvasHeight/2);
    this.sphere.position.x = 0;
    this.sphere.position.y = 0;
    //this.sphere.position.z = rnd(-canvasHeight/2, canvasHeight/2);
    this.sphere.position.z = 0;
    // this.radius = defaultRadius + Math.random() * variantRadius;
    this.variantRadius = Math.random() * variantRadius;
    // this.directionAngle = Math.floor(Math.random() * 360);
    this.color = particleColor;
    this.velocity = new THREE.Vector3(
      rnd(-1, 1) * window.innerWidth / 100,
      rnd(-1, 1) * window.innerHeight / 100,
      rnd(-1, 1) * window.innerHeight / 100.,
    ).multiplyScalar(0.2);
    /*
    Math.cos(this.directionAngle) * this.speed,
    Math.sin(this.directionAngle) * this.speed,
  -Math.sin(this.directionAngle) * this.speed,
  */
  }
  get gridPosition() {
    return this.#gridPosition;
  }
  set gridPosition(a: [number, number, number, number]) {
    if (!a) {
      debugger;
    }
    this.#gridPosition = a;
  }

  update() {
    // sets the position of the sphere
    this.sphere.position.add(this.velocity);
    // with a small probability, change slightly the direction of the particle
    this.border();
    this.t += 1;
  }

  border() {
    // if (
    //   this.sphere.position.x >= (this.spaceWidth / 2) ||
    //   this.sphere.position.x <= (-this.spaceWidth / 2)
    // ) {
    //   this.velocity.x *= -1;
    // }
    // if (
    //   this.sphere.position.y >= (this.spaceHeight / 2) ||
    //   this.sphere.position.y <= (-this.spaceHeight / 2)
    // ) {
    //   this.velocity.y *= -1;
    // }
    // if (
    //   this.sphere.position.z >= (this.spaceDepth / 2) ||
    //   this.sphere.position.z <= (-this.spaceDepth / 2)
    // ) {
    //   this.velocity.z *= -1;
    // }
    // make the particle steer off the border. Considering the boundary are
    // -this.spaceWidth/2 and this.spaceWidth/2, same for the height and depth
    this.sphere.position.x = clip(
      this.sphere.position.x,
      -this.spaceWidth / 2,
      this.spaceWidth / 2,
    );
    this.sphere.position.y = clip(
      this.sphere.position.y,
      -this.spaceHeight / 2,
      this.spaceHeight / 2,
    );
    this.sphere.position.z = clip(
      this.sphere.position.z,
      -this.spaceDepth / 2,
      this.spaceDepth / 2,
    );
    const x = this.sphere.position.x;
    const y = this.sphere.position.y;
    const z = this.sphere.position.z;
    const threshold = 5;
    let dx = 0;
    let dy = 0;
    let dz = 0;
    if ((this.spaceWidth / 2 - x) < threshold) {
      dx = -1;
    }
    if ((this.spaceWidth / 2 + x) < threshold) {
      dx = 1;
    }
    if ((this.spaceHeight / 2 - y) < threshold) {
      dy = -1;
    }
    if ((this.spaceHeight / 2 + y) < threshold) {
      dy = 1;
    }
    if ((this.spaceDepth / 2 - z) < threshold) {
      dz = -1;
    }
    if ((this.spaceDepth / 2 + z) < threshold) {
      dz = 1;
    }
    
    this.velocity.x += dx; //dx > 0 ? Math.exp(dx/100) : 0;
    this.velocity.y += dy; //> 0 ? Math.exp(dy/100) : 0;
    this.velocity.z += dz; //> 0 ? Math.exp(dz/100) : 0;
    this.velocity.normalize();
  }
}
