import {
	evalBoard,
	Player,
	Grid,
	Move,
	expandStates,
	makeMove,
	getAllMoves,
} from "./cannon_engine.js";

const argMax = (array: number[]): number =>
	array
		.map((x, i) => [x, i])
		.reduce((r: number[], a: number[]) => (a[0] > r[0] ? a : r))[1];

const argSort = (arr1: Array<any>, arr2: Array<any>, reverse = false) =>
	arr1
		.map((item, index) => [arr2[index], item]) // add the args to sort by
		.sort(([arg1], [arg2]) => (reverse ? arg1 - arg2 : arg2 - arg1)) // sort by the args
		.map(([, item]) => item); // extract the sorted items

const argNegaMax = (
	grid: Grid,
	depth: number,
	isFirstRound: boolean,
	currentPlayer: Player = 1,
	alpha = -Infinity,
	beta = Infinity
): [number, number] => {
	const childNodes = getAllMoves(grid, currentPlayer as Player, isFirstRound);
	//const childNodes = expandStates(grid, currentPlayer, isFirstRound);
	//const values = childGrids.map((g) => soldierCount(g, currentPlayer));
	//const values = childNodes.map((g: Move) =>
	//	currentPlayer*evalBoard(makeMove(grid, currentPlayer, g))
	//);
	//const orderedChildGrids = argSort(childNodes, values, true);
	const orderedChildGrids = childNodes
	if (depth === 0 || childNodes.length === 0) {
		return [0, currentPlayer * evalBoard(grid)];
	}
	let value = -Infinity;
	let valueI = -1;
	for (let i = 0; i < orderedChildGrids.length; i++) {
		const child = makeMove(grid, currentPlayer, orderedChildGrids[i]);
		//const child = orderedChildGrids[i]
		const protoValue = -argNegaMax(
			child,
			depth - 1,
			false,
			-currentPlayer as Player,
			-beta,
			-alpha
		)[1];
		if (protoValue > value) {
			value = protoValue;
			valueI = i;
		}
		alpha = Math.max(alpha, value);
		if (alpha >= beta) {
			break;
		}
	}
	return [valueI, value];
};
const chooseMove = (state: Grid, isFirstRound: boolean): number => {
	const t0 = performance.now();
	const result = argNegaMax(state, 5, isFirstRound)[0];
	const t1 = performance.now();
	console.log(`Took ${(t1 - t0) / 1000}`);
	return result;
};
/*
const chooseMove = (states: Grid[]): number => {
	const values = states.map((s) => -negaMax(s, 5, -1));
	const best = argMax(values);
	return best;
};
*/
addEventListener("message", (event) => {
	const parsedEvent = (event as unknown as Record<string, [number, Grid]>)[
		"data"
	];
	const parsedGrid = parsedEvent[1]
	//const parsedGrid = new Int8Array(100)
	//for (let i = 0; i < 10; i++) {
	//	for (let j = 0; j < 10; j++) {
	//		parsedGrid[i * 10 + j] = protoGrid[i][j];
	//	}
	//}
	postMessage(chooseMove(parsedGrid, parsedEvent[0] === 0));
});
export { chooseMove };
