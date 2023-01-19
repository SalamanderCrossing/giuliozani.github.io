import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import Particle from "./Particle";
import SpatialGrid from "./spatial_grid";

const distanceMatrix = (particles: Particle[]) => {
  const matrix: number[][] = [];
  for (let i = 0; i < particles.length; i++) {
    matrix[i] = [];
    for (let j = i; j < particles.length; j++) {
      matrix[i][j] = particles[i].sphere.position.distanceTo(
        particles[j].sphere.position,
      );
    }
  }
  return matrix;
};

export default class ParticlesManager {
  loopId: number;
  particles: Particle[];
  particleColor: string = "rgb(173,216,230)";
  lineColor: string = "rgba(0,181,255)";
  particleAmount: number = 1000;
  defaultRadius: number = 3;
  variantRadius: number = 3;
  defaultSpeed: number = 1;
  variantSpeed: number = 2;
  maxLinkRadius: number = 75;
  linkRadius: number;
  minLinkRadius: number;
  backgroundColor: string;
  maxLineWidth: number = 0.8;
  minLineWidth: number = 0.09;
  lineWidth: number;
  rgb: string[];
  stop: boolean = false;
  t: number;
  update = () => {};
  scene: THREE.Scene;
  camera: THREE.Camera;
  renderer = new THREE.WebGLRenderer();
  spatialGrid: SpatialGrid;
  //renderer = new SVGRenderer();
  lines: (THREE.Line | null)[][];
  constructor({
    container: container,
    backgroundColor,
  }: {
    backgroundColor?: string;
    container: HTMLDivElement;
  }) {
    const sizes = new THREE.Vector3(
      window.innerWidth / 5,
      window.innerHeight / 5,
      window.innerWidth / 5,
    );
    const minPos = sizes.clone().multiplyScalar(-0.5);
    this.spatialGrid = new SpatialGrid(
      minPos,
      sizes,
      new THREE.Vector3(10, 10, 10),
    );
    this.lines = Array(this.particleAmount).fill(null).map(() =>
      Array(this.particleAmount).fill(null)
    );
    this.linkRadius = 10;
    this.minLinkRadius = 115;
    this.rgb = this.lineColor.match(/\d+/g)!;
    this.loopId = -1;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color("black");
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / (window.innerHeight),
      0.1,
      4000,
    );

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(this.renderer.domElement);
    new OrbitControls(this.camera, this.renderer.domElement);
    this.camera.position.z = 600;
    this.particles = [];
    this.backgroundColor = backgroundColor || "black";
    this.lineWidth = this.minLineWidth;
    this.t = 0;
    for (let i = 0; i < this.particleAmount; i++) {
      this.particles.push(
        new Particle({
          scene: this.scene,
          spatialWidth: sizes.x,
          spatialHeight: sizes.y,
          spatialDepth: sizes.z,
          variantSpeed: this.variantSpeed,
          variantRadius: this.variantRadius,
          defaultSpeed: this.defaultSpeed,
          defaultRadius: this.defaultRadius,
          particleColor: this.particleColor,
        }),
      );
    }
    for (const particle of this.particles) {
      this.spatialGrid.add(
        particle,
        particle.sphere.position,
      );
    }
    this.update = () => {
      for (const particle of this.particles) {
        particle.update();

        this.spatialGrid.update(
          particle,
          particle.sphere.position,
        );
      }
      this.renderer.render(this.scene, this.camera);
      this.makeParticlesFlocking();
      this.t += 1;
    };
  }
  makeParticlesFlocking() {
    // adds flocking behavior to particles
    const nonEmptyCells = this.spatialGrid.nonEmptyCells;
    for (const cell of nonEmptyCells) {
      const group = this.spatialGrid.getAt(
        cell[0],
        cell[1],
        cell[2],
      ) as Particle[];
      if (group.length > 1) {
        const distanceMatrix: (number)[][] = group.map((_) =>
          Array(group.length)
        );
        const groupVelocitySum = new THREE.Vector3();
        const groupPositionSum = new THREE.Vector3();
        for (let i = 0; i < group.length; i++) {
          const particle = group[i];
          groupVelocitySum.add(particle.velocity);
          groupPositionSum.add(particle.sphere.position);
          for (let j = i + 1; j < group.length; j++) {
            const otherParticle = group[j];
            const distance = particle.sphere.position.distanceTo(
              otherParticle.sphere.position,
            );
            distanceMatrix[i][j] = distance;
            distanceMatrix[j][i] = distance;
          }
        }
        let i = 0;
        for (const particle of group) {
          // add the separation force to each particle in the group
          const toAdd = this.getSeparationForce(
            particle,
            group,
            distanceMatrix,
            i,
          )
            .multiplyScalar(3);
          const alignmentForce = this.getAlignmentForce(
            particle,
            groupVelocitySum,
          )
            .multiplyScalar(1);
          toAdd.add(alignmentForce);
          // add the cohesion force to each particle in the group
          const cohesionForce = this.getCohesionForce(
            particle,
            groupPositionSum,
          ).normalize()
            .multiplyScalar(1);
          toAdd.add(cohesionForce);
          // normalize the force
          toAdd.normalize(); //.multiplyScalar(10);
          particle.velocity.add(toAdd);
          i += 1;
        }
      }
    }
  }
  getSeparationForce(
    particle: Particle,
    group: Particle[],
    distanceMatrix: (number)[][],
    i: number,
  ) {
    const steer = new THREE.Vector3(0, 0, 0);
    let count = 0;
    let j = 0;
    for (const otherParticle of group) {
      if (i !== j) {
        const d = distanceMatrix[i][j]!;
        const diff = particle.sphere.position.clone().sub(
          otherParticle.sphere.position,
        );
        diff.normalize();
        diff.divideScalar(d);
        steer.add(diff);
        count += 1;
      }
      j += 1;
    }
    if (count > 0) {
      steer.divideScalar(count);
    }
    if (steer.length() > 0) {
      steer.normalize();
      steer.multiplyScalar(1);
      steer.sub(particle.velocity);
      steer.clampLength(0, 1);
    }
    return steer;
  }
  getAlignmentForce(
    particle: Particle,
    groupVelocitySum: THREE.Vector3,
  ) {
    const sum = groupVelocitySum.clone().sub(particle.velocity);
    sum.normalize();
    const steer = sum.clone().sub(particle.velocity);
    sum.normalize();
    return steer;
  }
  getCohesionForce(
    particle: Particle,
    groupPositionSum: THREE.Vector3,
  ) {
    const sum = groupPositionSum.clone().sub(particle.sphere.position);
    sum.normalize();
    return this.seek(particle, sum);
  }
  seek(particle: Particle, target: THREE.Vector3) {
    const desired = target.clone().sub(particle.sphere.position);
    desired.normalize();
    const steer = desired.clone().sub(particle.velocity);
    steer.clampLength(0, 1);
    return steer;
  }

  updateLinePositions() {
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i; j < this.particles.length; j++) {
        const line = this.lines[i][j];
        if (line) {
          const geometry = line.geometry as THREE.BufferGeometry;
          const position = geometry.attributes
            .position as THREE.BufferAttribute;
          const distance = this.particles[i].sphere.position.distanceTo(
            this.particles[j].sphere.position,
          );
          position.setXYZ(
            0,
            this.particles[i].sphere.position.x,
            this.particles[i].sphere.position.y,
            this.particles[i].sphere.position.z,
          );
          position.setXYZ(
            1,
            this.particles[j].sphere.position.x,
            this.particles[j].sphere.position.y,
            this.particles[j].sphere.position.z,
          );
          // sets the line opacity as proportional to the distance
          const opacity = Math.max(
            0,
            //1 - (distance - this.minLinkRadius) / (this.maxLinkRadius - this.minLinkRadius),
            1 - distance,
          );
          line.material.opacity = opacity;
          position.needsUpdate = true;
        }
      }
    }
  }

  drawMatrix(
    particles: Particle[],
    matrix: number[][],
    t: number,
    linkRadius: number,
  ) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = i + 1; j < matrix[i].length; j++) {
        const distance = matrix[i][j];
        if (distance < linkRadius) {
          const opacity = 1 - distance / linkRadius;
          const particle1 = particles[i];
          const particle2 = particles[j];
          //ctx.lineWidth = ;
          // ctx.moveTo(particles[i].x, particles[i].y);
          // ctx.lineTo(particles[j].x, particles[j].y);
          // create a line and add it to the scene
          const material = new THREE.LineBasicMaterial({
            color: "rgba(0,181,255)",
            linewidth: 1, //this.maxLineWidth * (1 - Math.exp(-t / 200)),
            transparent: true,
          });
          const geometry = new THREE.BufferGeometry().setFromPoints([
            particle1.sphere.position,
            particle2.sphere.position,
          ]);
          const line = new THREE.Line(geometry, material);
          this.scene.add(line);
          this.lines[i][j] = line;
          this.lines[j][i] = line;
        }
      }
    }
  }
  drawLines() {
    const matrix = distanceMatrix(this.particles);
    this.drawMatrix(
      this.particles,
      matrix,
      this.t,
      this.linkRadius,
    );
  }
}
