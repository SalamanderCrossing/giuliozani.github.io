import { Grid, expandStates, Player, soldierCount } from "./cannon_engine.js";

const argMax = (array: number[]): number =>
	[].map
		.call(array, (x, i) => [x, i])
		.reduce((r, a) => (a[0] > r[0] ? a : r))[1];

const argsort = (arr1: Array<any>, arr2: Array<any>) =>
	arr1
		.map((item, index) => [arr2[index], item]) // add the args to sort by
		.sort(([arg1], [arg2]) => arg2 - arg1) // sort by the args
		.map(([, item]) => item); // extract the sorted items

const negaMax = (
	grid: Grid,
	depth: number,
	alpha = -Infinity,
	beta = Infinity,
	currentPlayer: Player = 1
): number => {
	const childGrids = expandStates(grid, currentPlayer, false);
	const values = childGrids.map((g) => soldierCount(g, currentPlayer));
	const orderedChildGrids = argsort(childGrids, values);
	if (depth === 0 || childGrids.length === 0) {
		return currentPlayer * soldierCount(grid, currentPlayer);
	}
	let value = -Infinity;
	for (const child of orderedChildGrids) {
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
	const values = states.map((s) => negaMax(s, 3));
	const best = argMax(values);
	return best;
};

export { chooseMove };
