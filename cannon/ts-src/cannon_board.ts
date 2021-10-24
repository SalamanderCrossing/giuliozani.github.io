import {
	Player,
	Moves,
	Grid,
	Move,
	getMoves,
	getAllMoves,
	makeMove,
	initGrid,
	checkWhoLost,
} from "./cannon_engine.js";

import utils from "./utils.js";

const shuffleArray = (array: Array<any>) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
};
class CannonBoard {
	_grid: Grid;
	_currentPlayer: Player;
	_selectedI: number;
	_selectedJ: number;
	_lastMoves: Move[];
	_selected: boolean;
	_isComputing: boolean;
	_ai: Worker;
	update: (n: number) => void;
	_round: number;
  _nThreads:number;
	keysMap: Map<number, string>;
	initialPlayer: Player;
	constructor(nThreads:number, initialPlayer: Player = 1) {
    this._nThreads = nThreads;
		this._grid = initGrid();
		this._currentPlayer = -initialPlayer as Player;
		this._round = 0;
		this.initialPlayer = initialPlayer;
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
		this.update = (_loser: number) => {};
		this._lastMoves = [];
		this._selected = false;
		this._selectedI = -1;
		this._selectedJ = -1;
		this._isComputing = false;
		this._ai = new Worker("./src/ai_player/parallel_nega_max.js", {
			type: "module",
		});
		this._ai.onmessageerror = console.log;
		this._ai.onerror = console.log;
	}
	get grid(): string[][] {
		return this._grid.map((x: number[]) => x.map((y) => this.keysMap.get(y)!));
	}
	get currentPlayer(): string {
		return this.keysMap.get(this._currentPlayer) as string;
	}
	_unselect() {
		for (const i of utils.range(this._grid.length)) {
			for (const j of utils.range(this._grid.length)) {
				this._grid[i][j] = Math.round(this._grid[i][j]);
			}
		}
		this._selectedI = -1;
		this._selectedJ = -1;
		this._selected = false;
	}
	get round() {
		return Math.floor(this._round / 2);
	}
	_playAI(moves: Move[] | null = null) {
		this._currentPlayer = 1;
		moves =
			moves !== null
				? moves
				: getAllMoves(
						this._grid,
						this._currentPlayer as Player,
						this.round === 0
				  );
		console.table(this._grid);
		this._ai.postMessage([this.round, this._grid, this._nThreads]);
		this._isComputing = true;
		this._ai.onmessage = (e) => {
			const move = e.data;
			console.assert(
				moves!.filter(
					(m: Move) =>
						m.filter((v: number, i: number) => v !== move[i]).length === 0
				).length === 1,
				"Move doesn't exist"
			);
			this._grid = makeMove(this._grid, move);
			this.switchPlayer();
			this._isComputing = false;
			this.update(this.round > 1 ? checkWhoLost(this._grid) : 0);
		};
	}
	switchPlayer(): boolean {
		this._round += 1;
		this._currentPlayer *= -1;
		const moves = getAllMoves(
			this._grid,
			this._currentPlayer as Player,
			this.round === 0
		);
		//shuffleArray(states);
		this.update(this.round > 1 ? checkWhoLost(this._grid) : 0);
		console.log(`Number of future states: ${moves.length}`);
		if (this._currentPlayer === 1) {
			this._playAI(moves);
		}
		return moves.length === 0;
	}
	_generateMoves(i: number, j: number) {
		this._unselect();
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
		if (this._lastMoves.length > 0 && this._lastMoves[0][0] !== -1) {
			this._grid[this._lastMoves[0][0]][this._lastMoves[0][1]] *= 1.3;
		}
		for (const [
			_sourceI,
			_sourceJ,
			destI,
			destJ,
			moveType,
			_cannonDirectionI,
			_cannonDirectionJ,
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
		this.update(this.round > 1 ? checkWhoLost(this._grid) : 0);
		// console.table(this._grid);
	}
	select(i: number, j: number) {
		if (!this._isComputing) {
			//console.log(`Selecting ${JSON.stringify({ i, j })}`);
			if (this._selected) {
				const selectedMoves = this._lastMoves.filter(
					(x) => x[2] === i && x[3] === j
				);
				if (selectedMoves.length > 0) {
					const selectedMove = selectedMoves[0];
					this._grid = makeMove(this._grid, selectedMove);
					this._unselect();
					//console.table(this._grid);
					this.switchPlayer();
				} else {
					this._generateMoves(i, j);
				}
			} else {
				this._generateMoves(i, j);
			}
		}
	}
}

export { CannonBoard };
