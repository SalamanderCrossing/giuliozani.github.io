import utils from "./utils.js";

class Cannon {
  constructor() {
    this.players = ["X", "O"];
    this.grid = [...Array(10).keys()].map((_, i) =>
      [...Array(10).keys()].map((_, j) =>
        j % 2 !== 0 && i > 0 && i < 4
          ? this.players[0]
          : j % 2 === 0 && i < 9 && i > 5
          ? this.players[1]
          : ""
      )
    );
    this.selectedI = -1;
    this.selectedJ = -1;
    this._currentPlayerI = true;
    this.availableMoves = [];
    this.round = 0;
    this._selectedCannon = null;
    this._cannonShiftsMap = null;
  }
  _isCannon(i1, j1, i2, j2, i3, j3) {
    return (
      i1 >= 0 &&
      i1 < 10 &&
      j1 >= 0 &&
      j1 < 10 &&
      i2 >= 0 &&
      i2 < 10 &&
      j2 >= 0 &&
      j2 < 10 &&
      i3 >= 0 &&
      i3 < 10 &&
      j3 >= 0 &&
      j3 < 10 &&
      this.grid[i1][j1][0] === this.currentPlayer &&
      this.grid[i2][j2][0] === this.currentPlayer &&
      this.grid[i3][j3][0] === this.currentPlayer
    );
  }
  _getCannonsWithSoldier(i, j) {
    const cannons = [];

    if (this._isCannon(i - 1, j, i, j, i + 1, j)) {
      cannons.push([i, j, 1, 0]);
    }
    if (this._isCannon(i, j - 1, i, j, i, j + 1)) {
      cannons.push([i, j, 0, 1]);
    }
    if (this._isCannon(i - 1, j - 1, i, j, i + 1, j + 1)) {
      cannons.push([i, j, 1, 1]);
    }
    if (this._isCannon(i + 1, j - 1, i, j, i - 1, j + 1)) {
      cannons.push([i, j, 1, -1]);
    }
    return cannons;
  }
  _getCannonShootingMoves(cannon) {
    let moves = [];
    const opponent = this._getOpponent();
    const center = cannon.slice(0, 2);
    let pH = [center[0] + 3 * cannon[2], center[1] + 3 * cannon[3]];
    let pL = [center[0] - 3 * cannon[2], center[1] - 3 * cannon[3]];
    let done = false;
    let hCollidedBorder = false;
    let lCollidedBorder = false;
    let lCollidedObject = false;
    let hCollidedObject = false;
    while (!done) {
      hCollidedBorder = pH[0] < 0 || pH[0] >= 10 || pH[1] <= 0 || pH[1] >= 10;
      hCollidedObject = hCollidedBorder
        ? false
        : this.grid[pH[0]][pH[1]] !== "";
      if (!(hCollidedObject || hCollidedBorder)) {
        pH[0] += cannon[2];
        pH[1] += cannon[3];
      }
      lCollidedBorder = pL[0] < 0 || pL[0] >= 10 || pL[1] <= 0 || pL[1] >= 10;
      lCollidedObject = lCollidedBorder
        ? false
        : this.grid[pL[0]][pL[1]] !== "";
      if (!(lCollidedObject || lCollidedBorder)) {
        pL[0] -= cannon[2];
        pL[1] -= cannon[3];
      }
      done =
        (hCollidedObject || hCollidedBorder) &&
        (lCollidedObject || lCollidedBorder);
    }
    if (lCollidedObject && this.grid[pL[0]][pL[1]][0] === opponent) {
      moves.push(pL);
    }
    if (hCollidedObject && this.grid[pH[0]][pH[1]][0] === opponent) {
      moves.push(pH);
    }
    for (const m of moves) {
      this.grid[m[0]][m[1]] = `>${this.grid[m[0]][m[1]]}<`;
    }
    return moves;
  }
  _getCannonShiftsMoves(cannon) {
    const moves = [];
    const forwardI = cannon[0] + 2 * cannon[2];
    const forwardJ = cannon[1] + 2 * cannon[3];
    const forwardGridVal = this.grid[forwardI][forwardJ];
    if (
      forwardI >= 0 &&
      forwardJ >= 0 &&
      forwardI < 10 &&
      forwardJ < 10 &&
      forwardGridVal === ""
    ) {
      this.grid[forwardI][forwardJ] = "@";
      moves.push([forwardI, forwardJ]);
    }
    const backwardI = cannon[0] - 2 * cannon[2];
    const backwardJ = cannon[1] - 2 * cannon[3];
    const backwardGridVal = this.grid[backwardI][backwardJ];
    if (
      backwardI >= 0 &&
      backwardJ >= 0 &&
      backwardI < 10 &&
      backwardJ < 10 &&
      backwardGridVal === ""
    ) {
      this.grid[backwardI][backwardJ] = "@";
      moves.push([backwardI, backwardJ]);
    }
    return moves;
  }
  _getSoldierMoves(i, j) {
    const opponent = this._getOpponent();
    const direction = Math.pow(-1, this._currentPlayerI);
    const hasAdjacentSodier = this._hasAdjacentSoldier(i, j);
    const soldierMoves = [
      [i + direction, j - 1],
      [i + direction, j],
      [i + direction, j + 1],
      [i - 2 * direction, j - 2],
      [i - 2 * direction, j],
      [i - 2 * direction, j + 2],
      [i, j - 1],
      [i, j + 1],
      [i + direction, j - 1],
      [i + direction, j],
      [i + direction, j + 1],
    ].filter(
      (p, k) =>
        p[0] >= 0 &&
        p[0] <= 9 &&
        p[1] >= 0 &&
        p[1] <= 9 &&
        ((k < 3 && this.grid[p[0]][p[1]] === "") ||
          (k > 2 &&
            k < 6 &&
            hasAdjacentSodier &&
            this.grid[p[0]][p[1]] === "") ||
          (k > 5 && this.grid[p[0]][p[1]] === opponent))
    );
    for (const m of soldierMoves) {
      const curVal = this.grid[m[0]][m[1]];
      this.grid[m[0]][m[1]] = curVal === "" ? "M" : `*${curVal}*`;
    }
    return soldierMoves;
  }
  get currentPlayer() {
    return this.players[Number(this._currentPlayerI)];
  }
  _switchPlayer() {
    this._currentPlayerI = !this._currentPlayerI;
  }
  select(i, j) {
    const gridValue = this.grid[i][j];
    let result = [null, false];
    if (
      !(
        gridValue === "M" ||
        gridValue[0] === "*" ||
        gridValue[0] === ">" ||
        gridValue === "@"
      )
    ) {
      this._unselect();
      if (gridValue === this.currentPlayer || this.round === 0) {
        result[0] = this._getMoves(i, j);
      }
    }
    if (
      gridValue === "M" ||
      gridValue[0] === "*" ||
      gridValue[0] === ">" ||
      gridValue === "@"
    ) {
      result[1] = this._move(i, j);
      this._unselect();
    }
    return result;
  }
  _unselect() {
    if (this.selectedI !== -1 && this.selectedJ !== -1) {
      this.grid[this.selectedI][this.selectedJ] = this.grid[this.selectedI][
        this.selectedJ
      ].replace("S", "");
    }
    for (const m of this.availableMoves) {
      const gridVal = this.grid[m[0]][m[1]];
      this.grid[m[0]][m[1]] = gridVal
        .replace("@", "")
        .replace("M", "")
        .replace("<", "")
        .replace(">", "");
    }
    this.selectedI = -1;
    this.selectedJ = -1;
  }
  _move(destI, destJ) {
    let gameOver = false;
    if (this.round === 0) {
      this.grid[destI][destJ] = this.currentPlayer + "T";
    } else {
      const gridVal = this.grid[destI][destJ];
      if (gridVal[0] === ">") {
        if (gridVal.includes("T")) {
          gameOver = true;
        }
        this.grid[destI][destJ] = "";
      } else if (gridVal === "@") {
        const cannon = this._cannonShiftsMap[destI][destJ];
        const directionI = cannon[0] + 2 * cannon[2] === destI ? -1 : 1;
        const directionJ = cannon[1] + 2 * cannon[3] === destJ ? -1 : 1;
        const sourceI = cannon[0] + directionI * cannon[2];
        const sourceJ = cannon[1] + directionJ * cannon[3];
        console.log({
          dest: this.grid[destI][destJ],
          source: this.grid[sourceI][sourceJ],
        });
        this.grid[destI][destJ] = this.grid[sourceI][sourceJ];
        this.grid[sourceI][sourceJ] = "";
      } else {
        this.grid[destI][destJ] = this.grid[this.selectedI][this.selectedJ];
        this.grid[this.selectedI][this.selectedJ] = "";
        this.selectedI = destI;
        this.selectedJ = destJ;
      }
    }
    this._unselect();
    if (!gameOver) {
      this._switchPlayer();
      if (this._currentPlayerI) {
        this.round += 1;
      }
    }
    return gameOver;
  }
  _getOpponent() {
    return this.players[Number(!this._currentPlayerI)];
  }
  _hasAdjacentSoldier(i, j) {
    const opponent = this._getOpponent();
    const adjacentPositions = [
      [i - 1, j - 1],
      [i - 1, j],
      [i - 1, j + 1],
      [i, j - 1],
      [i, j + 1],
      [i + 1, j - 1],
      [i + 1, j],
      [i + 1, j + 1],
    ];
    const hasAdjacentSodier =
      adjacentPositions.filter((p) => this.grid[p[0]][p[1]] === opponent)
        .length > 0;
    return hasAdjacentSodier;
  }
  _getMoves(i, j) {
    let moves = [];
    if (this.round === 0) {
      const resultI = this._currentPlayerI * 9;
      moves = utils.range(1, 9).map((resultJ) => [resultI, resultJ]);
      for (const m of moves) {
        const curVal = this.grid[m[0]][m[1]];
        this.grid[m[0]][m[1]] = curVal === "" ? "M" : `*${curVal}*`;
      }
    } else {
      this.selectedI = i;
      this.selectedJ = j;
      this.grid[i][j] = this.grid[i][j] + "S";
      const soldierMoves = this._getSoldierMoves(i, j);
      const cannons = this._getCannonsWithSoldier(i, j);
      const cannonShootingMoves = cannons.flatMap((c) =>
        this._getCannonShootingMoves(c)
      );
      const cannonShiftMoves = [];
      const cannonShiftsMap = [[]];
      for (const cannon of cannons) {
        const cannonShifts = this._getCannonShiftsMoves(cannon);
        cannonShiftMoves.push(...cannonShifts);
        for (const cannonShift of cannonShifts) {
          if (!cannonShiftsMap[cannonShift[0]]) {
            cannonShiftsMap[cannonShift[0]] = [];
          }
          cannonShiftsMap[cannonShift[0]][cannonShift[1]] = cannon;
        }
      }
      this._cannonShiftsMap = cannonShiftsMap;
      moves = soldierMoves.concat(cannonShootingMoves).concat(cannonShiftMoves);
      console.log({
        soldierMoves,
        cannonShootingMoves,
        cannonShiftMoves,
        moves,
      });
    }
    this.availableMoves = moves;
    return moves;
  }
}

export { Cannon };
