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
            2 /* CannonShift */,
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
            2 /* CannonShift */,
            cannon[2],
            cannon[3],
        ]);
    }
    return moves;
};
const checkWhoLost = (grid) => {
    const townPositions = getTownPositions(grid);
    const negaMaxPlayerLost = townPositions[0][0] === -1 || getAllMoves(grid, 1, false).length === 0;
    const greedyPlayerLost = townPositions[1][0] === -1 || getAllMoves(grid, -1, false).length === 0;
    return negaMaxPlayerLost ? 1 : greedyPlayerLost ? 1 : 0;
};
const getCannonShootingMoves = (grid, currentPlayer, cannon) => {
    const moves = [];
    const opponent = -1 * currentPlayer;
    const center0 = cannon[0];
    const center1 = cannon[1];
    const cannon2 = cannon[2];
    const cannon3 = cannon[3];
    let pH0 = center0 + 2 * cannon2;
    let pH1 = center1 + 2 * cannon3;
    let pL0 = center0 - 2 * cannon2;
    let pL1 = center1 - 2 * cannon3;
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
            0 /* Shoot */,
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
            0 /* Shoot */,
            cannon2,
            cannon3,
        ]);
    }
    return moves;
};
const hasAdjacentSoldier = (grid, currentPlayer, i, j) => {
    const opponent = -currentPlayer;
    const i0 = i - 1;
    const j0 = j - 1;
    const i1 = i - 1;
    const j1 = j;
    const i2 = i - 1;
    const j2 = j + 1;
    const i3 = i;
    const j3 = j - 1;
    const i4 = i;
    const j4 = j + 1;
    const i5 = i + 1;
    const j5 = j - 1;
    const i6 = i + 1;
    const j6 = j;
    const i7 = i + 1;
    const j7 = j + 1;
    return ((areValid(i0, j0) && grid[i0][j0] === opponent) ||
        (areValid(i1, j1) && grid[i1][j1] === opponent) ||
        (areValid(i2, j2) && grid[i2][j2] === opponent) ||
        (areValid(i3, j3) && grid[i3][j3] === opponent) ||
        (areValid(i4, j4) && grid[i4][j4] === opponent) ||
        (areValid(i5, j5) && grid[i5][j5] === opponent) ||
        (areValid(i6, j6) && grid[i6][j6] === opponent) ||
        (areValid(i7, j7) && grid[i7][j7] === opponent));
};
const getSoldierMoves = (grid, currentPlayer, i, j) => {
    const opponent = -currentPlayer;
    const direction = currentPlayer;
    const adjacentSodier = hasAdjacentSoldier(grid, currentPlayer, i, j);
    const soldierMoves = [];
    const step0i = i + direction;
    const step0j = j - 1;
    const step1i = i + direction;
    const step1j = j;
    const step2i = i + direction;
    const step2j = j + 1;
    if (areValid(step0i, step0j) && grid[step0i][step0j] === 0 /* Empty */) {
        soldierMoves.push([i, j, step0i, step0j, 4 /* Step */, 0, 0]);
    }
    if (areValid(step1i, step1j) && grid[step1i][step1j] === 0 /* Empty */) {
        soldierMoves.push([i, j, step1i, step1j, 4 /* Step */, 0, 0]);
    }
    if (areValid(step2i, step2j) && grid[step2i][step2j] === 0 /* Empty */) {
        soldierMoves.push([i, j, step2i, step2j, 4 /* Step */, 0, 0]);
    }
    const retreat0i = i - 2 * direction;
    const retreat0j = j - 2;
    const retreat1i = i - 2 * direction;
    const retreat1j = j;
    const retreat2i = i - 2 * direction;
    const retreat2j = j + 2;
    if (areValid(retreat0i, retreat0j) && grid[retreat0i] === undefined) {
        debugger;
    }
    if (adjacentSodier &&
        areValid(retreat0i, retreat0j) &&
        grid[retreat0i][retreat0j] === 0 /* Empty */ &&
        grid[(i + retreat0i) / 2][(j + retreat0j) / 2] === 0 /* Empty */) {
        soldierMoves.push([i, j, retreat0i, retreat0j, 3 /* Retreat */, 0, 0]);
    }
    if (adjacentSodier &&
        areValid(retreat1i, retreat1j) &&
        grid[retreat1i][retreat1j] === 0 /* Empty */ &&
        grid[(i + retreat1i) / 2][(j + retreat1j) / 2] === 0 /* Empty */) {
        soldierMoves.push([i, j, retreat1i, retreat1j, 3 /* Retreat */, 0, 0]);
    }
    if (adjacentSodier &&
        areValid(retreat2i, retreat2j) &&
        grid[retreat2i][retreat2j] === 0 /* Empty */ &&
        grid[(i + retreat2i) / 2][(j + retreat2j) / 2] === 0 /* Empty */) {
        soldierMoves.push([i, j, retreat2i, retreat2j, 3 /* Retreat */, 0, 0]);
    }
    const capture0i = i;
    const capture0j = j - 1;
    const capture1i = i;
    const capture1j = j + 1;
    const capture2i = i + direction;
    const capture2j = j - 1;
    const capture3i = i + direction;
    const capture3j = j;
    const capture4i = i + direction;
    const capture4j = j + 1;
    if (areValid(capture0i, capture0j) &&
        Math.sign(grid[capture0i][capture0j]) === opponent) {
        soldierMoves.push([i, j, capture0i, capture0j, 1 /* Capture */, 0, 0]);
    }
    if (areValid(capture1i, capture1j) &&
        Math.sign(grid[capture1i][capture1j]) === opponent) {
        soldierMoves.push([i, j, capture1i, capture1j, 1 /* Capture */, 0, 0]);
    }
    if (areValid(capture2i, capture2j) &&
        Math.sign(grid[capture2i][capture2j]) === opponent) {
        soldierMoves.push([i, j, capture2i, capture2j, 1 /* Capture */, 0, 0]);
    }
    if (areValid(capture3i, capture3j) &&
        Math.sign(grid[capture3i][capture3j]) === opponent) {
        soldierMoves.push([i, j, capture3i, capture3j, 1 /* Capture */, 0, 0]);
    }
    if (areValid(capture4i, capture4j) &&
        Math.sign(grid[capture4i][capture4j]) === opponent) {
        soldierMoves.push([i, j, capture4i, capture4j, 1 /* Capture */, 0, 0]);
    }
    return soldierMoves;
};
const getMoves = (grid, currentPlayer, selectedI, selectedJ, isFirstRound) => {
    const moves = [];
    const currentPlayerI = Number(currentPlayer === -1);
    if (isFirstRound) {
        const townI = currentPlayerI * 9;
        moves.push(...utils
            .range(1, 9)
            .map((resultJ) => [-1, -1, townI, resultJ, 5 /* PositionTown */, 0, 0]));
    }
    else {
        const townPositions = getTownPositions(grid);
        if (townPositions[0][0] === -1 || townPositions[1][1] === -1) {
            return moves;
        }
        else if (grid[selectedI][selectedJ] === currentPlayer) {
            if (townPositions[currentPlayerI][0] !== -1) {
                const soldierMoves = getSoldierMoves(grid, currentPlayer, selectedI, selectedJ);
                const cannons = getCannonsWithSoldier(grid, currentPlayer, selectedI, selectedJ);
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
    }
    return moves;
};
const makeMove = (grid, move) => {
    if (grid.map === undefined) {
        debugger;
    }
    const newGrid = grid.map((r) => r.slice());
    const [sourceI, sourceJ, destI, destJ, moveType, cannonDirectionI, cannonDirectionJ,] = move;
    const currentPlayer = moveType === 5 /* PositionTown */
        ? destI === 0
            ? 1
            : -1
        : Math.sign(grid[sourceI][sourceJ]);
    switch (moveType) {
        case 1 /* Capture */:
        case 3 /* Retreat */:
        case 4 /* Step */:
            newGrid[destI][destJ] = newGrid[sourceI][sourceJ];
            newGrid[sourceI][sourceJ] = 0 /* Empty */;
            break;
        case 5 /* PositionTown */:
            newGrid[destI][destJ] = 2 * currentPlayer;
            break;
        case 0 /* Shoot */:
            newGrid[move[2]][move[3]] = 0 /* Empty */;
            break;
        case 2 /* CannonShift */: {
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
const getTownPositions = (grid) => {
    const positions = [
        [-1, -1],
        [-1, -1],
    ];
    const townI1 = 0;
    const townI2 = 9;
    for (let j = 1; j < 10; j++) {
        if (Math.abs(grid[townI1][j]) === 2) {
            positions[0][0] = townI1;
            positions[0][1] = j;
        }
        if (Math.abs(grid[townI2][j]) === 2) {
            positions[1][0] = townI2;
            positions[1][1] = j;
        }
        if (positions[0][0] !== -1 && positions[1][0] !== -1) {
            break;
        }
    }
    return positions;
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
const getDistance = (i1, j1, i2, j2) => Math.pow(i1 - i2, 2) + Math.pow(j1 - j2, 4);
//ideas:
//least distance from dude to town
//least distance from cannon to town
//town value
//pawn value
//cannon value
const evalBoard = (grid, soldierValue = 50, cannonValue = 40, victoryValue = 10000, leastDistanceValue = 10) => {
    const townPositions = getTownPositions(grid);
    const townPosition1 = townPositions[0];
    const townPosition2 = townPositions[1];
    if (townPosition1[0] === -1) {
        return -victoryValue;
    }
    if (townPosition2[0] === -1) {
        return victoryValue;
    }
    let leastDistance1 = 200;
    let leastDistance2 = 200;
    let sum = 0;
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const gridVal = grid[i][j];
            if (Math.abs(gridVal) === 1) {
                const cannonCount = getCannonsWithSoldier(grid, gridVal, i, j).length;
                if (gridVal === 1) {
                    const distance = getDistance(i, j, townPosition2[0], townPosition2[1]);
                    if (distance < leastDistance1) {
                        leastDistance1 = distance;
                    }
                    sum +=
                        /*(1 / Math.pow(distance, 1 / 5)) * */
                        soldierValue + cannonValue * cannonCount;
                }
                else {
                    const distance = getDistance(i, j, townPosition1[0], townPosition1[1]);
                    if (distance < leastDistance2) {
                        leastDistance2 = distance;
                    }
                    sum +=
                        /*(1 / Math.pow(distance, 1 / 5)) * */
                        -soldierValue - cannonValue * cannonCount;
                }
            }
        }
    }
    return sum - leastDistanceValue * (leastDistance1 - leastDistance2);
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
                        states.push(makeMove(grid, m));
                    }
                }
            }
        }
    }
    else {
        states.push(...getMoves(grid, currentPlayer, 1, 1, true).map((m) => makeMove(grid, m)));
    }
    return states;
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
export { getMoves, getAllMoves, expandStates, makeMove, initGrid, evalBoard, getTownPositions, checkWhoLost };
