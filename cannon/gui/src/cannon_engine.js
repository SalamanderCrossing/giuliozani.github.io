import utils from "./utils.js";
const areValid = (i, j) => i >= 0 && i < 10 && j >= 0 && j < 10;
const initGrid = () => [...Array(10).keys()].map((_, i) => [...Array(10).keys()].map((_, j) => j % 2 !== 0 && i > 0 && i < 4 ? 1 : j % 2 === 0 && i < 9 && i > 5 ? -1 : 0));
const isCannon = (grid, currentPlayer, i1, j1, i2, j2, i3, j3) => areValid(i1, j1) &&
    areValid(i2, j2) &&
    areValid(i3, j3) &&
    grid[i1][j1] === currentPlayer &&
    grid[i2][j2] === currentPlayer &&
    grid[i3][j3] === currentPlayer;
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
    if (areValid(forwardI, forwardJ) && grid[forwardI][forwardJ] === 0) {
        moves.push([
            cannon[0],
            cannon[1],
            forwardI,
            forwardJ,
            4 /* CannonShift */,
            cannon[2],
            cannon[3],
        ]);
    }
    const backwardI = cannon[0] - 2 * cannon[2];
    const backwardJ = cannon[1] - 2 * cannon[3];
    if (areValid(backwardI, backwardJ) && grid[backwardI][backwardJ] === 0) {
        moves.push([
            cannon[0],
            cannon[1],
            backwardI,
            backwardJ,
            4 /* CannonShift */,
            cannon[2],
            cannon[3],
        ]);
    }
    return moves;
};
const getCannonShootingMoves = (grid, currentPlayer, cannon) => {
    const moves = [];
    const opponent = -1 * currentPlayer;
    const center = cannon.slice(0, 2);
    const pH = [
        center[0] + 3 * cannon[2],
        center[1] + 3 * cannon[3],
    ];
    const pL = [
        center[0] - 3 * cannon[2],
        center[1] - 3 * cannon[3],
    ];
    let done = false;
    let hCollidedBorder = false;
    let lCollidedBorder = false;
    let lCollidedObject = false;
    let hCollidedObject = false;
    while (!done) {
        hCollidedBorder = !areValid(...pH);
        hCollidedObject = hCollidedBorder ? false : grid[pH[0]][pH[1]] !== 0;
        if (!(hCollidedObject || hCollidedBorder)) {
            pH[0] += cannon[2];
            pH[1] += cannon[3];
        }
        lCollidedBorder = !areValid(...pL);
        lCollidedObject = lCollidedBorder ? false : grid[pL[0]][pL[1]] !== 0;
        if (!(lCollidedObject || lCollidedBorder)) {
            pL[0] -= cannon[2];
            pL[1] -= cannon[3];
        }
        done =
            (hCollidedObject || hCollidedBorder) &&
                (lCollidedObject || lCollidedBorder);
    }
    if (lCollidedObject && Math.sign(grid[pL[0]][pL[1]]) === opponent) {
        moves.push([
            cannon[0],
            cannon[1],
            pL[0],
            pL[1],
            3 /* Shoot */,
            cannon[2],
            cannon[3],
        ]);
    }
    if (hCollidedObject && Math.sign(grid[pH[0]][pH[1]]) === opponent) {
        moves.push([
            cannon[0],
            cannon[1],
            pH[0],
            pH[1],
            3 /* Shoot */,
            cannon[2],
            cannon[3],
        ]);
    }
    return moves;
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
    for (const p of adjacentPositions) {
        if (areValid(...p) && grid[p[0]][p[1]] === opponent) {
            return true;
        }
    }
    return false;
};
const getSoldierMoves = (grid, currentPlayer, i, j) => {
    const opponent = -1 * currentPlayer;
    const direction = Math.pow(-1, Number(currentPlayer < 0));
    const adjacentSodier = hasAdjacentSoldier(grid, currentPlayer, i, j);
    const soldierMoves = [
        [i, j, i + direction, j - 1, 0 /* Step */, 0, 0],
        [i, j, i + direction, j, 0 /* Step */, 0, 0],
        [i, j, i + direction, j + 1, 0 /* Step */, 0, 0],
        [i, j, i - 2 * direction, j - 2, 1 /* Retreat */, 0, 0],
        [i, j, i - 2 * direction, j, 1 /* Retreat */, 0, 0],
        [i, j, i - 2 * direction, j + 2, 1 /* Retreat */, 0, 0],
        [i, j, i, j - 1, 2 /* Capture */, 0, 0],
        [i, j, i, j + 1, 2 /* Capture */, 0, 0],
        [i, j, i + direction, j - 1, 2 /* Capture */, 0, 0],
        [i, j, i + direction, j, 2 /* Capture */, 0, 0],
        [i, j, i + direction, j + 1, 2 /* Capture */, 0, 0],
    ].filter((p) => {
        return (areValid(p[2], p[3]) &&
            ((p[4] === 0 /* Step */ && grid[p[2]][p[3]] === 0 /* Empty */) ||
                (p[4] === 1 /* Retreat */ &&
                    adjacentSodier &&
                    grid[p[2]][p[3]] === 0 /* Empty */ &&
                    grid[(p[0] + p[2]) / 2][(p[1] + p[3]) / 2] === 0 /* Empty */) ||
                (p[4] === 2 /* Capture */ && Math.sign(grid[p[2]][p[3]]) === opponent)));
    });
    return soldierMoves;
};
const getMoves = (grid, currentPlayer, selectedI, selectedJ, isFirstRound) => {
    const moves = [];
    //const cannonShiftsMap: Cannon[][] = [];
    if (isFirstRound) {
        const townI = Number(currentPlayer === -1) * 9;
        moves.push(...utils
            .range(1, 9)
            .map((resultJ) => [-1, -1, townI, resultJ, 5 /* PositionTown */, 0, 0]));
    }
    else if (grid[selectedI][selectedJ] === currentPlayer) {
        if (hasTown(grid, currentPlayer)) {
            const soldierMoves = getSoldierMoves(grid, currentPlayer, selectedI, selectedJ);
            const cannons = getCannonsWithSoldier(grid, currentPlayer, selectedI, selectedJ);
            console.log("Cannons");
            console.table(cannons);
            const cannonShootingMoves = cannons.flatMap((c) => getCannonShootingMoves(grid, currentPlayer, c));
            const cannonShiftMoves = [];
            for (const cannon of cannons) {
                const cannonShifts = getCannonShiftsMoves(grid, cannon);
                cannonShiftMoves.push(...cannonShifts);
                /*
                for (const cannonShift of cannonShifts) {
                    if (!cannonShiftsMap[cannonShift[0]]) {
                        cannonShiftsMap[cannonShift[0]] = [];
                    }
                    cannonShiftsMap[cannonShift[0]][cannonShift[1]] = cannon;
                }
                */
            }
            console.log("Shooting moves");
            console.table(cannonShootingMoves);
            moves.push(...soldierMoves.concat(cannonShootingMoves).concat(cannonShiftMoves));
        }
    }
    return moves;
};
const makeMove = (grid, currentPlayer, move, cache = null) => {
    const newGrid = grid.map((r) => r.slice());
    const [sourceI, sourceJ, destI, destJ, moveType, cannonDirectionI, cannonDirectionJ,] = move;
    switch (moveType) {
        case 2 /* Capture */:
        case 1 /* Retreat */:
        case 0 /* Step */:
            newGrid[destI][destJ] = newGrid[sourceI][sourceJ];
            newGrid[sourceI][sourceJ] = 0 /* Empty */;
            break;
        case 5 /* PositionTown */:
            newGrid[destI][destJ] = 2 * currentPlayer;
            break;
        case 3 /* Shoot */:
            newGrid[move[2]][move[3]] = 0 /* Empty */;
            break;
        case 4 /* CannonShift */: {
            const directionI = Math.pow(-1, Number(sourceI + 2 * cannonDirectionI === destI));
            const directionJ = Math.pow(-1, Number(sourceJ + 2 * cannonDirectionJ === destJ));
            const shiftSourceI = move[0] + directionI * move[5];
            const shiftSourceJ = move[1] + directionJ * move[6];
            newGrid[destI][destJ] = grid[shiftSourceI][shiftSourceJ];
            newGrid[shiftSourceI][shiftSourceJ] = 0 /* Empty */;
            break;
        }
    }
    return newGrid;
};
const hasTown = (grid, player) => {
    const townI = Number(player === -1) * 9;
    for (let j = 1; j < 10; j++) {
        if (grid[townI][j] === 2 * player) {
            return true;
        }
    }
    return false;
};
const getSoldierCount = (grid, currentPlayer) => grid
    .flatMap((row) => row.filter((el) => Math.sign(el) === currentPlayer))
    .reduce((x, y) => x + Math.abs(y), 0);
const evalBoard = (grid, currentPlayer) => {
    const valPro = getSoldierCount(grid, currentPlayer);
    const valAgainst = getSoldierCount(grid, -currentPlayer);
    return !hasTown(grid, currentPlayer)
        ? -Infinity
        : !hasTown(grid, -currentPlayer)
            ? Infinity
            : valAgainst === 0
                ? Infinity
                : valPro / valAgainst;
};
const expandStates = (grid, currentPlayer, isFirstRound) => {
    const states = [];
    if (!isFirstRound) {
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid.length; j++) {
                if (grid[i][j] === currentPlayer) {
                    states.push(...getMoves(grid, currentPlayer, i, j, false).map((m) => makeMove(grid, currentPlayer, m)));
                }
            }
        }
    }
    else {
        states.push(...getMoves(grid, currentPlayer, 1, 1, true).map((m) => makeMove(grid, currentPlayer, m)));
    }
    return states;
};
const getCache = (grid) => { };
export { getMoves, expandStates, makeMove, initGrid, evalBoard as relativeSoldiersCount, };
const test = () => {
    const grid = [
        [0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [-1, 0, -1, 0, -1, 0, -1, 0, -1, 0],
        [-1, 0, -1, 0, -1, 0, -1, 0, -1, 0],
        [-1, 0, -1, 0, -1, 0, -1, 0, -1, 0],
        [0, 0, 0, 0, 0, -2, 0, 0, 0, 0],
    ];
    console.table(grid);
    const moves = getMoves(grid, -1, 7, 6, false);
    console.log("Moves:");
    console.table(moves);
    const nextState = makeMove(grid, -1, moves[2]);
    console.table(nextState);
    const value = evalBoard(nextState, -1);
    const antiValue = evalBoard(nextState, 1);
    console.log(value);
    console.log(antiValue);
    // const nextStates = moves.map(
};
test();
