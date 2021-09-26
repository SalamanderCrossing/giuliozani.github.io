import { expandStates, relativeSoldiersCount, } from "./cannon_engine.js";
const argMax = (array) => [].map
    .call(array, (x, i) => [x, i])
    .reduce((r, a) => (a[0] > r[0] ? a : r))[1];
const argsort = (arr1, arr2) => arr1
    .map((item, index) => [arr2[index], item]) // add the args to sort by
    .sort(([arg1], [arg2]) => arg2 - arg1) // sort by the args
    .map(([, item]) => item); // extract the sorted items
const negaMax = (grid, depth, currentPlayer = 1, alpha = -Infinity, beta = Infinity) => {
    const childGrids = expandStates(grid, currentPlayer, false);
    // const values = childGrids.map((g) => soldierCount(g, currentPlayer));
    const orderedChildGrids = childGrids; //argsort(childGrids, values);
    if (depth === 0 || childGrids.length === 0) {
        return relativeSoldiersCount(grid, currentPlayer);
    }
    let value = -Infinity;
    for (const child of orderedChildGrids) {
        console.table(child);
        value = Math.max(value, -negaMax(child, depth - 1, -currentPlayer, -beta, -alpha));
        alpha = Math.max(alpha, value);
        if (alpha >= beta) {
            break;
        }
    }
    return value;
};
const chooseMove = (states) => {
    const values = states.map((s) => -negaMax(s, 3, -1));
    const best = argMax(values);
    return best;
};
export { chooseMove };
