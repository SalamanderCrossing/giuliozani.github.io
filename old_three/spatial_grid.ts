import * as THREE from "three";

const clip = (x: number, min: number, max: number) =>
  Math.min(Math.max(x, min), max);

type Vec4 = [number, number, number, number];
// spatial grid. Assumes that particles can be any object
// but they have a negligible size. The grid is a 3D array
interface WithGridPosition {
  gridPosition: Vec4;
}

class Grid {
  #data: Map<string, WithGridPosition[]> = new Map();
  #nonEmptyCells: Set<string> = new Set();
  cellSize: THREE.Vector3;
  constructor(
    public position: THREE.Vector3,
    public size: THREE.Vector3,
    public numCells: THREE.Vector3,
  ) {
    this.cellSize = new THREE.Vector3(
      size.x / numCells.x,
      size.y / numCells.y,
      size.z / numCells.z,
    );
  }

  getAt(x: number, y: number, z: number) {
    // if (!this.#data[x]) {
    //   this.#data[x] = [];
    // }
    // if (!this.#data[x][y]) {
    //   this.#data[x][y] = [];
    // }
    // if (!this.#data[x][y][z]) {
    //   this.#data[x][y][z] = [];
    // }
    // return this.#data[x][y][z];
    const key = `${x},${y},${z}`;
    if (!this.#data.has(key)) {
      this.#data.set(key, []);
    }
    return this.#data.get(key)!;
  }
  update(obj: WithGridPosition, p: THREE.Vector3) {
    const [x, y, z] = this.#discretePosition(p);
    const [oldX, oldY, oldZ, oldI] = obj.gridPosition;
    if (x === oldX && y === oldY && z === oldZ) {
      return;
    }
    const oldCell = this.getAt(oldX, oldY, oldZ);
    const newCell = this.getAt(x, y, z);
    oldCell.splice(oldI, 1);
    newCell.push(obj);
    obj.gridPosition = [x, y, z, newCell.length - 1] as Vec4;
  }

  add(obj: WithGridPosition, p: THREE.Vector3) {
    const [x, y, z] = this.#discretePosition(p);
    const el = this.getAt(x, y, z);
    el.push(obj);
    const gridPosition = [x, y, z, el.length - 1] as Vec4;
    obj.gridPosition = gridPosition;
    this.#nonEmptyCells.add(`${x},${y},${z}`);
  }
  remove(p: Vec4) {
    const [x, y, z, i] = p;
    const gridVals = this.getAt(x, y, z);
    if (!(gridVals.length === 1)) {
      const tmp = gridVals.at(-1)!;
      const old = gridVals.at(i)!;
      tmp.gridPosition = old.gridPosition;
      gridVals[i] = tmp;
    } else {
      this.#nonEmptyCells.delete(`${x},${y},${z}`);
    }
    gridVals.pop();
  }
  get nonEmptyCells() {
    return Array.from(this.#nonEmptyCells.values()).map((s) =>
      s.split(",").map((x) => parseInt(x))
    );
  }
  #discretePosition(position: THREE.Vector3): [number, number, number] {
    return [
      clip(
        Math.floor((position.x - this.position.x) / this.cellSize.x),
        0,
        this.numCells.x - 1,
      ),
      clip(
        Math.floor((position.y - this.position.y) / this.cellSize.y),
        0,
        this.numCells.y - 1,
      ),
      clip(
        Math.floor((position.z - this.position.z) / this.cellSize.z),
        0,
        this.numCells.z - 1,
      ),
    ];
  }
  findNearby(p: [number, number, number], r: number) {
    const [x, y, z] = p;
    const [x0, y0, z0] = this.#discretePosition(
      new THREE.Vector3(x - r, y - r, z - r),
    );
    const [x1, y1, z1] = this.#discretePosition(
      new THREE.Vector3(x + r, y + r, z + r),
    );
    const nearby: WithGridPosition[] = [];
    for (let x = x0; x <= x1; x++) {
      for (let y = y0; y <= y1; y++) {
        for (let z = z0; z <= z1; z++) {
          nearby.push(...this.getAt(x, y, z));
        }
      }
    }
    return nearby;
  }
}
export default Grid;
/*
export default class SpatialGrid {
  //grid: WithGridPosition[][][][] = [];
  grid: Grid = new Grid();
  cellSize: THREE.Vector3;
  constructor(
    public position: THREE.Vector3,
    public size: THREE.Vector3,
    public numCells: THREE.Vector3,
  ) {
    this.cellSize = new THREE.Vector3(
      size.x / numCells.x,
      size.y / numCells.y,
      size.z / numCells.z,
    );

    // for (let x = 0; x < numCells.x; x++) {
    //   this.grid[x] = [];
    //   for (let y = 0; y < numCells.y; y++) {
    //     this.grid[x][y] = [];
    //     for (let z = 0; z < numCells.z; z++) {
    //       this.grid[x][y][z] = [];
    //     }
    //   }
    // }
  }
  #discretePosition(position: THREE.Vector3): [number, number, number] {
    return [
      clip(
        Math.floor((position.x - this.position.x) / this.cellSize.x),
        0,
        this.numCells.x - 1,
      ),
      clip(
        Math.floor((position.y - this.position.y) / this.cellSize.y),
        0,
        this.numCells.y - 1,
      ),
      clip(
        Math.floor((position.z - this.position.z) / this.cellSize.z),
        0,
        this.numCells.z - 1,
      ),
    ];
  }

  add(object: WithGridPosition, position: THREE.Vector3) {
    // const [x, y, z] = this.#discretePosition(position);
    // // console.log({ x, y, z });
    // const uba = this.grid.getAt(x, y, z); //this.grid[x][y][z];
    // uba.push(object);
    // const gridPosition = [x, y, z, uba.length - 1] as Vec4;
    // object.gridPosition = gridPosition;
    // this.grid.nonEmptyCells.add([x, y, z]);
    const discretePosition = this.#discretePosition(position);
    this.grid.add(object, discretePosition);
  }
  findNearby(
    position: Vec4,
  ): WithGridPosition[] {
    return this.grid.getAt(position[0], position[1], position[2]);
  }
  remove(p: Vec4): void {
    this.grid.remove(p);
  }
  update(
    object: WithGridPosition,
    newPosition: THREE.Vector3,
  ) {
    if (!object.gridPosition) {
      debugger;
    }
    this.remove(object.gridPosition);
    this.add(object, newPosition);
  }
}
*/
