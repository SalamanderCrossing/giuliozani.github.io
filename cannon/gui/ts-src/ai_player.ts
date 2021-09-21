import { Grid, expandStates, Player } from "./cannon_engine.js";

const evaluateMoves = (moves: Grid[]) => {
  return tf.randomUniform([moves.length]);
};
const negaMax = (
  grid: Grid,
  depth: number,
  alpha = -Infinity,
  beta = Infinity,
  currentPlayer: Player = 1
): number => {
  const childGrids = expandStates(grid, currentPlayer, false); //FIXME
  const values = evaluateMoves(childGrids);
  const indices = tf.topk(values, values.size, true).indices;
  const orderedChildGrids = childGrids.gather(indices);
  if (depth === 0 || childGrids.length === 0) {
    return currentPlayer;
  }
  let value = -Infinity;
  for (const child of childGrids) {
    value = Math.max(
      value,
      -negaMax(child, depth - 1, -beta, -alpha, -currentPlayer as Player)
    );
    alpha = Math.max(alpha, value);
    if (alpha >= beta) {
      break;
    }
  }
  return value;
};
const chooseMove = (states: Grid[]): number => {
  return Math.round(Math.random() * (states.length - 1));
};

export { chooseMove };
