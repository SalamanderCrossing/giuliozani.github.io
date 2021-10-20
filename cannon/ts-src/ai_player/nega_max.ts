import {
	evalBoard,
	Player,
	Grid,
	Move,
	makeMove,
	getAllMoves,
} from "../cannon_engine.js";

type NegaMaxResult = [
	moveIndex: number,
	value: number,
	alpha: number,
	beta: number
];
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
	beta = Infinity,
	maybeChildNodes: Move[] | null = null
): NegaMaxResult => {
	const childNodes =
		maybeChildNodes === null
			? getAllMoves(grid, currentPlayer as Player, isFirstRound)
			: maybeChildNodes;
	//const childNodes = expandStates(grid, currentPlayer, isFirstRound);
	//const values = childGrids.map((g) => soldierCount(g, currentPlayer));
	//const values = childNodes.map((g: Move) =>
	//	currentPlayer*evalBoard(makeMove(grid, currentPlayer, g))
	//);
	//const orderedChildGrids = argSort(childNodes, values, true);
	const orderedChildNodes = childNodes;
	if (depth === 0 || childNodes.length === 0) {
		return [0, currentPlayer * evalBoard(grid), alpha, beta];
	}
	let value = -Infinity;
	let valueI = 0;
	for (let i = 0; i < orderedChildNodes.length; i++) {
		const child = makeMove(grid, orderedChildNodes[i]);
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
	return [valueI, value, alpha, beta];
};

addEventListener("message", (event) => {
	const parsedEvent = (event as unknown as Record<string, [string, unknown]>)[
		"data"
	];
	const [grid, moves, alpha, beta] = parsedEvent[1] as [
		Grid,
		Move[],
		number,
		number
	];
	const depth = 5;
	if (moves === undefined) {
		debugger;
	}
	console.log(`Started thread with ${moves.length} moves and depth ${depth}`);
	const result = argNegaMax(grid, depth, false, 1, alpha, beta, moves);
	postMessage(result);
});

export { argNegaMax, NegaMaxResult};
