import {
  Player,
  Moves,
  Grid,
  Move,
  getMoves,
  expandStates,
  makeMove,
  initGrid,
} from "./cannon_engine.js";
import {chooseMove} from "./ai_player.js"

import utils from "./utils.js";

class CannonBoard {
  _grid: Grid;
  _currentPlayer: Player;
  round: number;
  keysMap: Map<number, string>;
  _selectedI: number;
  _selectedJ: number;
  _lastMoves: Move[];
  _selected: boolean;
  constructor() {
    this._grid = initGrid();
    this._currentPlayer = -1;
    this.round = 0;
    this.keysMap = new Map(
      Object.entries({
        "": 0,
        x: 1,
        o: -1,
        sx: 1.3,
        so: -1.3,
        "*x*": 1.1,
        "*o*": -1.1,
        "<x>": 1.2,
        "<o>": -1.2,
        tx: 2,
        to: -2,
        "*tx*": 2.1,
        "*to*": -2.1,
        "<tx>": 2.4,
        "<to>": -2.4,
        m: 0.1,
        "@": 0.2,
      }).map((x) => [x[1], x[0]])
    );
    this._lastMoves = [];
    this._selected = false;
  }
  get grid(): string[][] {
    return this._grid.map((x) => x.map((y) => this.keysMap.get(y)));
  }
  get currentPlayer(): string {
    return this.keysMap.get(this._currentPlayer);
  }
  _unselect() {
    for (const i of utils.range(this._grid.length)) {
      for (const j of utils.range(this._grid.length)) {
        this._grid[i][j] = Math.round(this._grid[i][j]);
      }
    }
    this._selectedI = -1;
    this._selectedJ = -1;
    this._selected = false
  }
  _switchPlayer():boolean {
    this.round += Number(this._currentPlayer === 1);
    this._currentPlayer *= -1;
    const states = expandStates(this._grid, this._currentPlayer as Player, this.round === 0)
    console.log(`Number of future states: ${states.length}`)
    if (this._currentPlayer === 1){
      const moveIndex = chooseMove(states)
      this._grid = states[moveIndex]
      this._switchPlayer()
    }
    return states.length === 0
  }
  _generateMoves(i: number, j: number){
    this._unselect()
    this._selectedI = this.round === 0 ? -1 : i;
    this._selectedJ = this.round === 0 ? -1 : j;
    this._selected = true;
    this._lastMoves = getMoves(
      this._grid,
      this._currentPlayer,
      this._selectedI,
      this._selectedJ,
      this.round === 0
    );
    console.log("Moves: ")
    console.table(this._lastMoves)
    if (this._lastMoves.length > 0 && this._lastMoves[0][0] !== -1){
      this._grid[this._lastMoves[0][0]][this._lastMoves[0][1]] *= 1.3
    }
    for (const [
      sourceI,
      sourceJ,
      destI,
      destJ,
      moveType,
      cannonDirectionI,
      cannonDirectionJ,
    ] of this._lastMoves) {
      switch (moveType) {
        case Moves.Step:
        case Moves.Retreat:
          this._grid[destI][destJ] = 0.1;
          break;
        case Moves.PositionTown:
          this._grid[destI][destJ] = 0.1;
          break;
        case Moves.Shoot:
          this._grid[destI][destJ] *= 1.1;
          break;
        case Moves.Capture:
          this._grid[destI][destJ] *= 1.2;
          break;
        case Moves.CannonShift:
          this._grid[destI][destJ] = 0.2;
          break;
      }
    }
    console.table(this._grid)
  }
  select(i: number, j: number): boolean {
    console.log(`Selecting ${JSON.stringify({i, j})}`)
    let gameOver = false;
    if (this._selected) {
      const selectedMoves = this._lastMoves.filter(
        (x) => x[2] === i && x[3] === j
      );
      if (selectedMoves.length > 0) {
        const selectedMove = selectedMoves[0];
        this._grid = makeMove(this._grid, this._currentPlayer, selectedMove);
        this._unselect()
        console.table(this._grid)
        gameOver = this._switchPlayer();
      }
      else{
        this._generateMoves(i, j);
      }
    }
    else{
      this._generateMoves(i, j)
    }
    return gameOver;
  }
}

export { CannonBoard };
