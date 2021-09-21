import utils from "./utils.js";
const getMoves = (grid, currentPlayerI, currentPlayer, i, j, round = 0) => {
    grid = grid.map((x) => x.slice());
    let moves = [];
    const cannonShiftsMap = [];
    if (round === 0) {
        const resultI = currentPlayerI * 9;
        moves = utils.range(1, 9).map((resultJ) => [resultI, resultJ]);
        displayTownMoves(grid, moves);
    }
    else {
        let selectedI = i;
        let selectedJ = j;
        grid[i][j] *= 1.1;
        const soldierMoves = getSoldierMoves(grid, currentPlayer, i, j);
        const cannons = getCannonsWithSoldier(grid, currentPlayer, i, j);
        const cannonShootingMoves = cannons.flatMap((c) => getCannonShootingMoves(grid, currentPlayer, c));
        const cannonShiftMoves = [];
        for (const cannon of cannons) {
            const cannonShifts = getCannonShiftsMoves(grid, cannon);
            cannonShiftMoves.push(...cannonShifts);
            for (const cannonShift of cannonShifts) {
                if (!cannonShiftsMap[cannonShift[0]]) {
                    cannonShiftsMap[cannonShift[0]] = [];
                }
                cannonShiftsMap[cannonShift[0]][cannonShift[1]] = cannon;
            }
        }
        moves = soldierMoves.concat(cannonShootingMoves).concat(cannonShiftMoves);
    }
    return [moves, cannonShiftsMap];
};
const isCannon = (grid, currentPlayer, i1, j1, i2, j2, i3, j3) => i1 >= 0 &&
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
    grid[i1][j1][0] === currentPlayer &&
    grid[i2][j2][0] === currentPlayer &&
    grid[i3][j3][0] === currentPlayer;
const getCannonsWithSoldier = (grid, currentPlayer, i, j) => {
    const cannons = [];
    if (isCannon(grid, currentPlayer, i - 1, j, i, j, i + 1, j)) {
        cannons.push([i, j, 1, 0]);
    }
    if (isCannon(grid, currentPlayer, i, j - 1, i, j, i, j + 1)) {
        cannons.push([i, j, 0, 1]);
    }
    if (isCannon(grid, currentPlayer, i - 1, j - 1, i, j, i + 1, j + 1)) {
        cannons.push([i, j, 1, 1]);
    }
    if (isCannon(grid, currentPlayer, i + 1, j - 1, i, j, i - 1, j + 1)) {
        cannons.push([i, j, 1, -1]);
    }
    return cannons;
};
const getCannonShootingMoves = (grid, currentPlayer, cannon) => {
    let moves = [];
    const opponent = -1 * currentPlayer;
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
        hCollidedObject = hCollidedBorder ? false : grid[pH[0]][pH[1]] !== 0;
        if (!(hCollidedObject || hCollidedBorder)) {
            pH[0] += cannon[2];
            pH[1] += cannon[3];
        }
        lCollidedBorder = pL[0] < 0 || pL[0] >= 10 || pL[1] <= 0 || pL[1] >= 10;
        lCollidedObject = lCollidedBorder ? false : grid[pL[0]][pL[1]] !== 0;
        if (!(lCollidedObject || lCollidedBorder)) {
            pL[0] -= cannon[2];
            pL[1] -= cannon[3];
        }
        done =
            (hCollidedObject || hCollidedBorder) &&
                (lCollidedObject || lCollidedBorder);
    }
    if (lCollidedObject && grid[pL[0]][pL[1]][0] === opponent) {
        moves.push(pL);
    }
    if (hCollidedObject && grid[pH[0]][pH[1]][0] === opponent) {
        moves.push(pH);
    }
    return moves;
};
const move = (grid, currentPlayer, cannonShiftsMap, selectedI, selectedJ, destI, destJ, isFirstRound) => {
    let gameOver = false;
    if (isFirstRound) {
        grid[destI][destJ] = 2 * currentPlayer;
    }
    else {
        const gridVal = grid[destI][destJ];
        if (gridVal[0] === ">") {
            if (Math.abs(Math.round(gridVal))) {
                gameOver = true;
            }
            grid[destI][destJ] = 0;
        }
        else if (gridVal === 0.2) {
            const cannon = cannonShiftsMap[destI][destJ];
            const directionI = cannon[0] + 2 * cannon[2] === destI ? -1 : 1;
            const directionJ = cannon[1] + 2 * cannon[3] === destJ ? -1 : 1;
            const sourceI = cannon[0] + directionI * cannon[2];
            const sourceJ = cannon[1] + directionJ * cannon[3];
            grid[destI][destJ] = grid[sourceI][sourceJ];
            grid[sourceI][sourceJ] = 0;
        }
        else {
            grid[destI][destJ] = grid[selectedI][selectedJ];
            grid[selectedI][selectedJ] = 0;
            selectedI = destI;
            selectedJ = destJ;
        }
    }
    return [grid, gameOver];
};
const select = (grid, currentPlayer, i, j, isFirstRound) => {
    const gridValue = grid[i][j];
    let result = [null, false];
    if (Math.round(gridValue) === gridValue) {
        unselect(grid, currentPlayer, i, j);
        if (gridValue === currentPlayer || isFirstRound) {
            for (const m of soldierMoves) {
                const curVal = this.grid[m[0]][m[1]];
                this.grid[m[0]][m[1]] = curVal === 0 ? "m" : `*${curVal}*`;
            }
            result[0] = getMoves(grid, currentPlayer, i, j);
        }
    }
    if (gridValue === "m" ||
        gridValue[0] === "*" ||
        gridValue[0] === ">" ||
        gridValue === "@") {
        result[1] = move(i, j);
        unselect();
    }
    return result;
};
const unselect = (grid, currentPlayer, availableMoves, [number, number], [], selectedI, selectedJ) => {
};
const getCannonShiftsMoves = (grid, cannon) => {
    const moves = [];
    const forwardI = cannon[0] + 2 * cannon[2];
    const forwardJ = cannon[1] + 2 * cannon[3];
    const forwardGridVal = grid[forwardI][forwardJ];
    if (forwardI >= 0 &&
        forwardJ >= 0 &&
        forwardI < 10 &&
        forwardJ < 10 &&
        forwardGridVal === 0) {
        moves.push([forwardI, forwardJ]);
    }
    const backwardI = cannon[0] - 2 * cannon[2];
    const backwardJ = cannon[1] - 2 * cannon[3];
    const backwardGridVal = grid[backwardI][backwardJ];
    if (backwardI >= 0 &&
        backwardJ >= 0 &&
        backwardI < 10 &&
        backwardJ < 10 &&
        backwardGridVal === 0) {
        moves.push([backwardI, backwardJ]);
    }
    return moves;
};
const displayCannonShiftsMoves = (grid, moves) => {
    for (const m of moves) {
        grid[m[0]][m[1]] += 0.2;
    }
};
const getSoldierMoves = (grid, currentPlayer, i, j) => {
    const opponent = -1 * currentPlayer;
    const direction = Math.pow(-1, currentPlayer);
    const hasAdjacentSodier = hasAdjacentSoldier(i, j);
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
    ].filter((p, k) => p[0] >= 0 &&
        p[0] <= 9 &&
        p[1] >= 0 &&
        p[1] <= 9 &&
        ((k < 3 && grid[p[0]][p[1]] === 0) ||
            (k > 2 && k < 6 && hasAdjacentSodier && grid[p[0]][p[1]] === 0) ||
            (k > 5 && grid[p[0]][p[1]] === opponent)));
    return soldierMoves;
};
const hasAdjacentSoldier = (grid, currentPlayer, i, j) => {
    const opponent = -1 * currentPlayer;
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
    return (adjacentPositions.filter((p) => grid[p[0]][p[1]] === opponent).length > 0);
};
const displayTownMoves = (grid, moves) => {
    for (const m of moves) {
        grid[m[0]][m[1]] += 0.1;
    }
};
const takeAction = (selectedI, selectedJ, actionI, actionJ) => {
    select(selectedI, selectedJ);
    select(actionI, actionJ);
};
const getAllMoves = () => {
    const positions = grid.map((row, i) => row.map((el, i) => [el, i, j]).filter((el) => el[0] === currentPlayer));
    return positions.flatMap((p) => [p.slice(1, -1), this]);
};
const initGrid = () => [...Array(10).keys()].map((_, i) => [...Array(10).keys()].map((_, j) => j % 2 !== 0 && i > 0 && i < 4 ? 1 : j % 2 === 0 && i < 9 && i > 5 ? -1 : 0));
const displaySoldierMoves = (grid, currentPlayer, moves) => {
    for (const m of moves) {
        const curVal = grid[m[0]][m[1]];
        const apply = Number(curVal === 0);
        const dontApply = Number(curVal !== 0);
        grid[m[0]][m[1]] = apply * 6 + !apply * currentPlayer * 1.2;
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
            sx: 1.1,
            so: -1.1,
            "*x*": 1.2,
            "*o*": -1.2,
            "<x>": 1.3,
            "<o>": -1.3,
            tx: 2,
            to: -2,
            "*tx*": 2.1,
            "*to*": -2.1,
            "<tx>": 2.2,
            "<to>": -2.2,
            m: 0.1,
            "@": 0.2,
        }).map((x) => [x[1], x[0]]));
    }
    get grid() {
        return this._grid.map((x) => x.map((y) => this.keysMap.get(y)));
    }
    get currentPlayer() {
        return this.keysMap.get(this._currentPlayer);
    }
    select(i, j) {
        const result = select(this._grid, this._currentPlayer, i, j, this.round === 0);
        this._grid = result[0];
        return result;
    }
}
export { CannonBoard };
export { CannonBoard };
