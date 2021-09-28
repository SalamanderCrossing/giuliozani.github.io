import { evalBoard, Player, Grid, expandStates } from "./cannon_engine.js";

const argMax = (array: number[]): number =>
	array
		.map((x, i) => [x, i])
		.reduce((r: number[], a: number[]) => (a[0] > r[0] ? a : r))[1];

const argsort = (arr1: Array<any>, arr2: Array<any>) =>
	arr1
		.map((item, index) => [arr2[index], item]) // add the args to sort by
		.sort(([arg1], [arg2]) => arg2 - arg1) // sort by the args
		.map(([, item]) => item); // extract the sorted items

const negaMax = (
	grid: Grid,
	depth: number,
	currentPlayer: Player = 1,
	alpha = -Infinity,
	beta = Infinity
): number => {
	const childGrids = expandStates(grid, currentPlayer as Player, false);
	// const values = childGrids.map((g) => soldierCount(g, currentPlayer));

	const orderedChildGrids = childGrids; //argsort(childGrids, values);
	if (depth === 0 || childGrids.length === 0) {
		return evalBoard(grid, currentPlayer as Player);
	}
	let value = -Infinity;
	for (const child of orderedChildGrids) {
		console.table(child);
		value = Math.max(
			value,
			-negaMax(child, depth - 1, -currentPlayer as Player, -beta, -alpha)
		);
		alpha = Math.max(alpha, value);
		if (alpha >= beta) {
			break;
		}
	}
	return value;
};
const chooseMove = (states: Grid[]): number => {
	const values = states.map((s) => -negaMax(s, 3, -1));
	const best = argMax(values);
	return best;
};

addEventListener("message", (event: Record<string, Grid[]>) => {
	console.log()
	postMessage(chooseMove(event["data"]));
});
