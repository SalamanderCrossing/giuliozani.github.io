import { getMoves, expandStates, makeMove, initGrid, } from "./cannon_engine.js";
import utils from "./utils.js";
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};
class CannonBoard {
    constructor() {
        this._grid = initGrid();
        this._currentPlayer = -1;
        this.round = 0;
        this.keysMap = new Map(Object.entries({
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
        }).map((x) => [x[1], x[0]]));
        this.update = () => { };
        this._lastMoves = [];
        this._selected = false;
        this._selectedI = -1;
        this._selectedJ = -1;
        this._isComputing = false;
    }
    get grid() {
        return this._grid.map((x) => x.map((y) => this.keysMap.get(y)));
    }
    get currentPlayer() {
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
        this._selected = false;
    }
    _switchPlayer() {
        this.round += Number(this._currentPlayer === 1);
        this._currentPlayer *= -1;
        const states = expandStates(this._grid, this._currentPlayer, this.round === 0);
        shuffleArray(states);
        console.log(`Number of future states: ${states.length}`);
        if (this._currentPlayer === 1) {
            const ai = new Worker("./src/ai_player.js", { type: "module" });
            ai.postMessage(states);
            ai.onmessageerror = console.log;
            ai.onerror = console.log;
            this._isComputing = true;
            ai.onmessage = (e) => {
                console.log(e.data);
                const moveIndex = e.data;
                this._grid = states[moveIndex];
                this._switchPlayer();
                this._isComputing = false;
                this.update();
            };
        }
        return states.length === 0;
    }
    _generateMoves(i, j) {
        this._unselect();
        this._selectedI = this.round === 0 ? -1 : i;
        this._selectedJ = this.round === 0 ? -1 : j;
        this._selected = true;
        this._lastMoves = getMoves(this._grid, this._currentPlayer, this._selectedI, this._selectedJ, this.round === 0);
        console.log("Moves: ");
        console.table(this._lastMoves);
        if (this._lastMoves.length > 0 && this._lastMoves[0][0] !== -1) {
            this._grid[this._lastMoves[0][0]][this._lastMoves[0][1]] *= 1.3;
        }
        for (const [_sourceI, _sourceJ, destI, destJ, moveType, _cannonDirectionI, _cannonDirectionJ,] of this._lastMoves) {
            switch (moveType) {
                case 0 /* Step */:
                case 1 /* Retreat */:
                    this._grid[destI][destJ] = 0.1;
                    break;
                case 5 /* PositionTown */:
                    this._grid[destI][destJ] = 0.1;
                    break;
                case 3 /* Shoot */:
                    this._grid[destI][destJ] *= 1.1;
                    break;
                case 2 /* Capture */:
                    this._grid[destI][destJ] *= 1.2;
                    break;
                case 4 /* CannonShift */:
                    this._grid[destI][destJ] = 0.2;
                    break;
            }
        }
        console.table(this._grid);
    }
    select(i, j) {
        let gameOver = false;
        if (!this._isComputing) {
            console.log(`Selecting ${JSON.stringify({ i, j })}`);
            if (this._selected) {
                const selectedMoves = this._lastMoves.filter((x) => x[2] === i && x[3] === j);
                if (selectedMoves.length > 0) {
                    const selectedMove = selectedMoves[0];
                    this._grid = makeMove(this._grid, this._currentPlayer, selectedMove);
                    this._unselect();
                    console.table(this._grid);
                    gameOver = this._switchPlayer();
                }
                else {
                    this._generateMoves(i, j);
                }
            }
            else {
                this._generateMoves(i, j);
            }
        }
        return gameOver;
    }
}
export { CannonBoard };
