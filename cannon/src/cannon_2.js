import utils from "./utils.js";
var MoveType;
(function (MoveType) {
    MoveType[MoveType["SoldierMove"] = 0] = "SoldierMove";
    MoveType[MoveType["Eat"] = 1] = "Eat";
    MoveType[MoveType["Shoot"] = 2] = "Shoot";
    MoveType[MoveType["CannonShift"] = 3] = "CannonShift";
    MoveType[MoveType["PositionTown"] = 4] = "PositionTown";
})(MoveType || (MoveType = {}));
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
const getMoves = (grid, currentPlayer, selectedI, selectedJ, isFirstRound) => {
    const moves = [];
    const cannonShiftsMap = [];
    if (isFirstRound) {
        const resultI = Number(currentPlayer === -1) * 9;
        moves.push(...utils
            .range(1, 9)
            .map((resultJ) => [-1, -1, resultI, resultJ, MoveType.PositionTown, 0, 0]));
    }
    else {
        const soldierMoves = getSoldierMoves(grid, currentPlayer, selectedI, selectedJ);
        const cannons = getCannonsWithSoldier(grid, currentPlayer, selectedI, selectedJ);
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
        moves.push(...soldierMoves.concat(cannonShootingMoves).concat(cannonShiftMoves));
        return moves;
    }
};
const makeMove = (grid, currentPlayer, move) => { };
const expandStates = (grid, currentPlayer) => { };
export { getMoves, expandStates, makeMove };
