import utils from "./utils.js";
//TODO:memorize soldier and cannon positions
//TODO:make negamax player with ab pruning
const enum Moves {
  Step,
  Retreat,
  Capture,
  Shoot,
  CannonShift,
  PositionTown,
}
const enum GridValues {
  Empty = 0,
  Player1 = 1,
  Player2 = -1,
  Town1 = 2,
  Town2 = -2,
}
type Move = [
  sourceI: number,
  sourceJ: number,
  destI: number,
  destJ: number,
  moveType: Moves,
  optionalCannonDirectionI: number,
  optionalCannonDirectionJ: number
];
type Grid = number[][];
type Cannon = [
  centerI: number,
  centerJ: number,
  directionI: number,
  directionJ: number
];
type Player = -1 | 1;
const areValid = (i: number, j: number): boolean =>
  i >= 0 && i < 10 && j >= 0 && j < 10;
const initGrid = () =>
  [...Array(10).keys()].map((_, i) =>
    [...Array(10).keys()].map((_, j) =>
      j % 2 !== 0 && i > 0 && i < 4 ? 1 : j % 2 === 0 && i < 9 && i > 5 ? -1 : 0
    )
  );

const isCannon = (
  grid: Grid,
  currentPlayer: Player,
  i1: number,
  j1: number,
  i2: number,
  j2: number,
  i3: number,
  j3: number
): boolean =>
  areValid(i1, j1) &&
  areValid(i2, j2) &&
  areValid(i3, j3) &&
  grid[i1][j1] === currentPlayer &&
  grid[i2][j2] === currentPlayer &&
  grid[i3][j3] === currentPlayer;

const getCannonsWithSoldier = (
  grid: Grid,
  currentPlayer: Player,
  i: number,
  j: number
): Cannon[] => {
  const cannons: Cannon[] = [];

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

const getCannonShiftsMoves = (grid: Grid, cannon: Cannon): Move[] => {
  const moves: Move[] = [];
  const forwardI = cannon[0] + 2 * cannon[2];
  const forwardJ = cannon[1] + 2 * cannon[3];
  if (areValid(forwardI, forwardJ) && grid[forwardI][forwardJ] === 0) {
    moves.push([
      cannon[0],
      cannon[1],
      forwardI,
      forwardJ,
      Moves.CannonShift,
      cannon[2],
      cannon[3],
    ] as Move);
  }
  const backwardI = cannon[0] - 2 * cannon[2];
  const backwardJ = cannon[1] - 2 * cannon[3];
  if (areValid(backwardI, backwardJ) && grid[backwardI][backwardJ] === 0) {
    moves.push([
      cannon[0],
      cannon[1],
      backwardI,
      backwardJ,
      Moves.CannonShift,
      cannon[2],
      cannon[3],
    ] as Move);
  }
  return moves;
};
const getCannonShootingMoves = (
  grid: Grid,
  currentPlayer: Player,
  cannon: Cannon
): Move[] => {
  let moves: Move[] = [];
  const opponent = -1 * currentPlayer;
  const center = cannon.slice(0, 2);
  let pH: [number, number] = [
    center[0] + 3 * cannon[2],
    center[1] + 3 * cannon[3],
  ];
  let pL: [number, number] = [
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
      Moves.Shoot,
      cannon[2],
      cannon[3],
    ] as Move);
  }
  if (hCollidedObject && Math.sign(grid[pH[0]][pH[1]]) === opponent) {
    moves.push([
      cannon[0],
      cannon[1],
      pH[0],
      pH[1],
      Moves.Shoot,
      cannon[2],
      cannon[3],
    ] as Move);
  }

  return moves;
};
const hasAdjacentSoldier = (
  grid: Grid,
  currentPlayer: Player,
  i: number,
  j: number
) => {
  const opponent = -1 * currentPlayer;
  const adjacentPositions: [number, number][] = [
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
const getSoldierMoves = (
  grid: Grid,
  currentPlayer: Player,
  i: number,
  j: number
): Move[] => {
  const opponent = -1 * currentPlayer;
  const direction = Math.pow(-1, Number(currentPlayer < 0));
  const adjacentSodier = hasAdjacentSoldier(grid, currentPlayer, i, j);
  const soldierMoves = [
    [i, j, i + direction, j - 1, Moves.Step, 0, 0],
    [i, j, i + direction, j, Moves.Step, 0, 0],
    [i, j, i + direction, j + 1, Moves.Step, 0, 0],
    [i, j, i - 2 * direction, j - 2, Moves.Retreat, 0, 0],
    [i, j, i - 2 * direction, j, Moves.Retreat, 0, 0],
    [i, j, i - 2 * direction, j + 2, Moves.Retreat, 0, 0],
    [i, j, i, j - 1, Moves.Capture, 0, 0],
    [i, j, i, j + 1, Moves.Capture, 0, 0],
    [i, j, i + direction, j - 1, Moves.Capture, 0, 0],
    [i, j, i + direction, j, Moves.Capture, 0, 0],
    [i, j, i + direction, j + 1, Moves.Capture, 0, 0],
  ].filter((p) => {
    return (
      areValid(p[2], p[3]) &&
      ((p[4] === Moves.Step && grid[p[2]][p[3]] === GridValues.Empty) ||
        (p[4] === Moves.Retreat &&
          adjacentSodier &&
          grid[p[2]][p[3]] === GridValues.Empty &&
          grid[(p[0] + p[2]) / 2][(p[1] + p[3]) / 2] === GridValues.Empty) ||
        (p[4] === Moves.Capture && Math.sign(grid[p[2]][p[3]]) === opponent))
    );
  }) as Move[];
  return soldierMoves;
};
const getMoves = (
  grid: Grid,
  currentPlayer: Player,
  selectedI: number,
  selectedJ: number,
  isFirstRound: boolean
): Move[] => {
  const moves: Move[] = [];
  //const cannonShiftsMap: Cannon[][] = [];
  if (isFirstRound) {
    const resultI = Number(currentPlayer === -1) * 9;
    moves.push(
      ...utils
        .range(1, 9)
        .map(
          (resultJ) =>
            [-1, -1, resultI, resultJ, Moves.PositionTown, 0, 0] as Move
        )
    );
  } else if (grid[selectedI][selectedJ] === currentPlayer) {
    const soldierMoves = getSoldierMoves(
      grid,
      currentPlayer,
      selectedI,
      selectedJ
    );
    const cannons = getCannonsWithSoldier(
      grid,
      currentPlayer,
      selectedI,
      selectedJ
    );
    const cannonShootingMoves = cannons.flatMap((c) =>
      getCannonShootingMoves(grid, currentPlayer, c)
    );
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
    moves.push(
      ...soldierMoves.concat(cannonShootingMoves).concat(cannonShiftMoves)
    );
  }
  return moves;
};
const makeMove = (grid: Grid, currentPlayer: Player, move: Move): Grid => {
  const newGrid = grid.map((r) => r.slice());
  const [
    sourceI,
    sourceJ,
    destI,
    destJ,
    moveType,
    cannonDirectionI,
    cannonDirectionJ,
  ] = move;
  switch (moveType) {
    case Moves.Capture:
    case Moves.Retreat:
    case Moves.Step:
      newGrid[destI][destJ] = newGrid[sourceI][sourceJ];
      newGrid[sourceI][sourceJ] = GridValues.Empty;
      break;
    case Moves.PositionTown:
      newGrid[destI][destJ] = 2 * currentPlayer;
      break;
    case Moves.Shoot:
      newGrid[move[2]][move[3]] = GridValues.Empty;
      break;
    case Moves.CannonShift:
      const directionI = Math.pow(
        -1,
        Number(sourceI + 2 * cannonDirectionI === destI)
      );
      const directionJ = Math.pow(
        -1,
        Number(sourceJ + 2 * cannonDirectionJ === destJ)
      );
      const shiftSourceI = move[0] + directionI * move[5];
      const shiftSourceJ = move[1] + directionJ * move[6];
      newGrid[destI][destJ] = grid[shiftSourceI][shiftSourceJ];
      newGrid[shiftSourceI][shiftSourceJ] = GridValues.Empty;
      break;
  }
  return newGrid;
};
const expandStates = (
  grid: Grid,
  currentPlayer: Player,
  isFirstRound: boolean
): Grid[] => {
  const states: Grid[] = [];
  if (!isFirstRound) {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid.length; j++) {
        if (grid[i][j] === currentPlayer) {
          states.push(
            ...getMoves(grid, currentPlayer, i, j, false).map((m) =>
              makeMove(grid, currentPlayer, m)
            )
          );
        }
      }
    }
  } else {
    states.push(
      ...getMoves(grid, currentPlayer, 1, 1, true).map((m) =>
        makeMove(grid, currentPlayer, m)
      )
    );
  }
  return states;
};

export {
  Player,
  Moves,
  Grid,
  Move,
  Cannon,
  getMoves,
  expandStates,
  makeMove,
  initGrid,
};
