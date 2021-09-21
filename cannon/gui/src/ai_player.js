import { expandStates } from "./cannon_engine.js";
const evaluateMoves = (moves) => {
    return tf.randomUniform([moves.length]);
};
const negaMax = (grid, depth, alpha = -Infinity, beta = Infinity, currentPlayer = 1) => {
    const childGrids = expandStates(grid, currentPlayer, false); //FIXME
    const values = evaluateMoves(childGrids);
    const indices = tf.topk(values, values.size, true).indices;
    const orderedChildGrids = childGrids.gather(indices);
    if (depth === 0 || childGrids.length === 0) {
        return currentPlayer;
    }
    let value = -Infinity;
    for (const child of childGrids) {
        value = Math.max(value, -negaMax(child, depth - 1, -beta, -alpha, -currentPlayer));
        alpha = Math.max(alpha, value);
        if (alpha >= beta) {
            break;
        }
    }
    return value;
};
const chooseMove = (states) => {
    return Math.round(Math.random() * (states.length - 1));
};
export { chooseMove };
