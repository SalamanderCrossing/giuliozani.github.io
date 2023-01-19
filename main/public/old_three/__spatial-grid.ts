import * as THREE from "three";
// import math from "./math.js";

interface Link {
  next: null | Link;
  prev: null | Link;
  client: Client;
}

interface Client {
  position: THREE.Vector3;
  dimensions: THREE.Vector3;
  _cells: {
    min: THREE.Vector3 | null;
    max: THREE.Vector3 | null;
    nodes: null;
  };
  _queryId: number;
}

export default class SpatialHash_Fast {
  #cells: (null | Link)[][][];
  #dimensions: THREE.Vector3;
  #bounds: [THREE.Vector3, THREE.Vector3]; //unclear
  #queryIds: number;
  constructor(
    bounds: [THREE.Vector3, THREE.Vector3],
    dimensions: THREE.Vector3,
  ) {
    this.#cells = [...Array(dimensions.x)].map((_) =>
      [...Array(dimensions.y)].map((_) =>
        [...Array(dimensions.z)].map((_) => null)
      )
    );
    this.#dimensions = dimensions;
    this.#bounds = bounds;
    this.#queryIds = 0;
  }
  #getCellIndex(position: THREE.Vector3) {
    const first = position.clone().sub(this.#bounds[0]);
    const second = this.#bounds[1].clone().sub(this.#bounds[0]);
    const third = first.divide(second).clampScalar(0, 1);
    return third.clone().multiply(this.#dimensions.clone().subScalar(1))
      .floor();
  }

  newClient(position: THREE.Vector3) {
    // const client = {
    //   position: position,
    //   dimensions: dimensions,
    //   _cells: {
    //     min: null,
    //     max: null,
    //     nodes: null,
    //   },
    //   _queryId: -1,
    // };
    const client = {position, {
      min: null,
      max: null,
      nodes: null,
    }, -1
    }

    this.#insert(client);

    return client;
  }

  updateClient(client: Client) {
    // const p = client.position;
    // const d = client.dimensions;
    //
    // const i1 = this.#getCellIndex([p.x - d.x / 2, p.y - d.y / 2]);
    // const i2 = this.#getCellIndex([p.x + d.x / 2, p.y + d.y / 2]);
    const i1 = this.#getCellIndex(
      client.position.clone().sub(client.dimensions.clone().divideScalar(2)),
    );
    const i2 = this.#getCellIndex(
      client.position.clone().add(client.dimensions.clone().divideScalar(2)),
    );

    if (
      client._cells!.min!.x == i1.x &&
      client._cells!.min!.y == i1.y &&
      client._cells!.min!.z == i1.z &&
      client._cells!.max!.x == i2.x &&
      client._cells!.max!.y == i2.y &&
      client._cells!.max!.z == i2.z
    ) {
      return;
    }

    this.remove(client);
    this.#insert(client);
  }

  findNear(position: THREE.Vector3, bounds: THREE.Vector3) {
    // const i1 = this.#getCellIndex([x - w / 2, y - h / 2]);
    // const i2 = this.#getCellIndex([x + w / 2, y + h / 2]);
    const i1 = this.#getCellIndex(
      position.clone().sub(bounds.clone().divideScalar(2)),
    );
    const i2 = this.#getCellIndex(
      position.clone().add(bounds.clone().divideScalar(2)),
    );

    const clients = [];
    const queryId = this.#queryIds++;

    for (let x = i1.x, xn = i2.x; x <= xn; ++x) {
      for (let y = i1.y, yn = i2.y; y <= yn; ++y) {
        for (let z = i1.z, zn = i2.z; z <= zn; ++z) {
          let head = this.#cells[x][y][z];
          while (head) {
            const v = head.client;
            head = head.next;

            if (v._queryId != queryId) {
              v._queryId = queryId;
              clients.push(v);
            }
          }
        }
      }
    }
    return clients;
  }

  #insert(client: Client) {
    const i1 = this.#getCellIndex(
      client.position.clone().sub(client.dimensions.clone().divideScalar(2)),
    );
    const i2 = this.#getCellIndex(
      client.position.clone().add(client.dimensions.clone().divideScalar(2)),
    );
    const nodes: [][][] = [];

    for (let x = i1.x, xn = i2.x; x <= xn; ++x) {
      nodes.push([]);

      for (let y = i1.y, yn = i2.y; y <= yn; ++y) {
        const xi = x - i1.x;
        nodes[xi].push([]);
        const yi = y - i1.y;

        const head = {
          next: null,
          prev: null,
          client: client,
        };

        nodes[xi].push(head);

        head.next = this.#cells[x][y];
        if (this.#cells[x][y]) {
          this.#cells[x][y].prev = head;
        }

        this.#cells[x][y] = head;
      }
    }

    client._cells.min = i1;
    client._cells.max = i2;
    client._cells.nodes = nodes;
  }

  remove(client: Client) {
    const i1 = client._cells.min;
    const i2 = client._cells.max;

    for (let x = i1[0], xn = i2[0]; x <= xn; ++x) {
      for (let y = i1[1], yn = i2[1]; y <= yn; ++y) {
        const xi = x - i1[0];
        const yi = y - i1[1];
        const node = client._cells.nodes[xi][yi];

        if (node.next) {
          node.next.prev = node.prev;
        }
        if (node.prev) {
          node.prev.next = node.next;
        }

        if (!node.prev) {
          this.#cells[x][y] = node.next;
        }
      }
    }

    client._cells.min = null;
    client._cells.max = null;
    client._cells.nodes = null;
  }
}
