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
    const center0 = cannon[0];
    const center1 = cannon[1];
    const cannon2 = cannon[2];
    const cannon3 = cannon[3];
    let pH0 = center0 + 3 * cannon2;
    let pH1 = center1 + 3 * cannon3;
    let pL0 = center0 - 3 * cannon2;
    let pL1 = center1 - 3 * cannon3;
    let done = false;
    let hCollidedBorder = false;
    let lCollidedBorder = false;
    let lCollidedObject = false;
    let hCollidedObject = false;
    let i = 0;
    while (!done) {
        hCollidedBorder = !areValid(pH0, pH1);
        hCollidedObject = hCollidedBorder ? false : grid[pH0][pH1] !== 0;
        if (!(hCollidedObject || hCollidedBorder)) {
            pH0 += cannon2;
            pH1 += cannon3;
        }
        lCollidedBorder = !areValid(pL0, pL1);
        lCollidedObject = lCollidedBorder ? false : grid[pL0][pL1] !== 0;
        if (!(lCollidedObject || lCollidedBorder)) {
            pL0 -= cannon2;
            pL1 -= cannon3;
        }
        i += 1;
        done =
            ((hCollidedObject || hCollidedBorder) &&
                (lCollidedObject || lCollidedBorder)) ||
                i === 2;
    }
    if (lCollidedObject && Math.sign(grid[pL0][pL1]) === opponent) {
        moves.push([
            center0,
            center1,
            pL0,
            pL1,
            3 /* Shoot */,
            cannon2,
            cannon3,
        ]);
    }
    if (hCollidedObject && Math.sign(grid[pH0][pH1]) === opponent) {
        moves.push([
            center0,
            center1,
            pH0,
            pH1,
            3 /* Shoot */,
            cannon2,
            cannon3,
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
        if (areValid(p[0], p[1]) && grid[p[0]][p[1]] === opponent) {
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
    else if (townPosition(grid, currentPlayer)[0] === -1 ||
        townPosition(grid, -currentPlayer)[0] === -1) {
        return moves;
    }
    else if (grid[selectedI][selectedJ] === currentPlayer) {
        if (townPosition(grid, currentPlayer)) {
            const soldierMoves = getSoldierMoves(grid, currentPlayer, selectedI, selectedJ);
            const cannons = getCannonsWithSoldier(grid, currentPlayer, selectedI, selectedJ);
            //console.log("Cannons");
            //console.table(cannons);
            const cannonShootingMoves = cannons.flatMap((c) => getCannonShootingMoves(grid, currentPlayer, c));
            const cannonShiftMoves = [];
            for (const cannon of cannons) {
                const cannonShifts = getCannonShiftsMoves(grid, cannon);
                for (const shift of cannonShifts) {
                    cannonShiftMoves.push(shift);
                }
            }
            for (const m of cannonShootingMoves) {
                moves.push(m);
            }
            for (const m of soldierMoves) {
                moves.push(m);
            }
            for (const m of cannonShiftMoves) {
                moves.push(m);
            }
        }
    }
    return moves;
};
const makeMove = (grid, currentPlayer, move) => {
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
const townPosition = (grid, player) => {
    const townI = Number(player === -1) * 9;
    for (let j = 1; j < 10; j++) {
        if (grid[townI][j] === 2 * player) {
            return [townI, j];
        }
    }
    return [-1, -1];
};
const getSoldierCount = (grid, currentPlayer) => {
    let count = 0;
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const a = grid[i];
            const el = a[j];
            if (Math.sign(el) === currentPlayer) {
                count += Math.abs(el);
            }
        }
    }
    return count;
};
const getDistance = (i1, j1, i2, j2) => Math.abs(i1 - i2) + Math.abs(j1 - j2);
const evalBoard = (grid, soldierValue = 10, cannonValue = 30) => {
    const townPosition1 = townPosition(grid, 1);
    const townPosition2 = townPosition(grid, -1);
    if (townPosition1[0] === -1) {
        return -Infinity;
    }
    if (townPosition2[0] === -1) {
        return Infinity;
    }
    let sum = 0;
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const gridVal = grid[i][j];
            if (Math.abs(gridVal) === 1) {
                const cannonCount = getCannonsWithSoldier(grid, gridVal, i, j).length;
                if (gridVal === 1) {
                    const distance = getDistance(i, j, townPosition2[0], townPosition2[1]);
                    sum +=
                        soldierValue / distance + (cannonValue * cannonCount) / distance;
                }
                else {
                    const distance = getDistance(i, j, townPosition1[0], townPosition1[1]);
                    sum +=
                        -soldierValue / distance - (cannonValue * cannonCount) / distance;
                }
            }
        }
    }
    return sum;
};
const expandStates = (grid, currentPlayer, isFirstRound) => {
    const states = [];
    if (grid === undefined) {
        debugger;
    }
    if (!isFirstRound) {
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid.length; j++) {
                if (grid[i][j] === currentPlayer) {
                    for (const m of getMoves(grid, currentPlayer, i, j, false)) {
                        states.push(makeMove(grid, currentPlayer, m));
                    }
                }
            }
        }
    }
    else {
        states.push(...getMoves(grid, currentPlayer, 1, 1, true).map((m) => makeMove(grid, currentPlayer, m)));
    }
    return states;
};
const getCache = (grid) => {
    const cache = [
        [[], [], [-1, -1]],
        [[], [], [-1, -1]],
    ];
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const gridVal = grid[i][j];
            const position = Math.max(Math.sign(gridVal), 0);
            if (Math.abs(gridVal) === 1) {
                const cannons = getCannonsWithSoldier(grid, gridVal, i, j);
                cache[position][0].push([i, j]);
                cache[position][1].push(...cannons);
            }
            else if (Math.abs(gridVal) === 2) {
                cache[position][2] = [i, j];
            }
        }
    }
    return cache;
};
const getAllMoves = (grid, currentPlayer, isFirstRound) => {
    if (isFirstRound) {
        return getMoves(grid, currentPlayer, 0, 0, true);
    }
    else {
        const moves = [];
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid.length; j++) {
                if (grid[i][j] === currentPlayer) {
                    for (const m of getMoves(grid, currentPlayer, i, j, false)) {
                        moves.push(m);
                    }
                }
            }
        }
        return moves;
    }
};
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
    console.log("Cache:");
    console.log(getCache(grid));
    const moves = getMoves(grid, -1, 7, 6, false);
    console.log("Moves:");
    console.table(moves);
    const nextState = makeMove(grid, -1, moves[2]);
    console.table(nextState);
    //const value = evalBoard(nextState, -1);
    //const antiValue = evalBoard(nextState, 1);
    //console.log(value);
    //console.log(antiValue);
    // const nextStates = moves.map(
};
export { getMoves, getAllMoves, expandStates, makeMove, initGrid, evalBoard, };
