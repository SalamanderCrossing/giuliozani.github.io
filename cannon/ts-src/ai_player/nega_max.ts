import {
	evalBoard,
	Player,
	Grid,
	Move,
	makeMove,
	getAllMoves,
} from "../cannon_engine.js";

import { getHash, orderMoves } from "./utils.js";
import utils from "../utils.js";

type TTableEntry =
	| [depth: number, flag: TTableFlag, value: number, move: Move]
	| undefined;
let tTable = new Array<TTableEntry>();
let availableThreads = 0;
/*
const argMax = (array: number[]): number =>
	array
		.map((x, i) => [x, i])
		.reduce((r: number[], a: number[]) => (a[0] > r[0] ? a : r))[1];

const argSort = (arr1: Array<any>, arr2: Array<any>, reverse = false) =>
	arr1
		.map((item, index) => [arr2[index], item]) // add the args to sort by
		.sort(([arg1], [arg2]) => (reverse ? arg1 - arg2 : arg2 - arg1)) // sort by the args
		.map(([, item]) => item); // extract the sorted items
*/
type NegaMaxResult = [move: Move, value: number, alpha: number, beta: number];
const enum TTableFlag {
	Exact,
	UpperBound,
	LowerBound,
}
const enum TTableKeys {
	depth = 0,
	flag = 1,
	value = 2,
	move = 3,
}
/*= new Array(9999999).fill([
	-1,
	-1,
	-1,
	[-1, -1, -1, -1, -1, -1, -1],
]);*/
const alphaBetaWithTT = (
	grid: Grid,
	depth: number,
	isFirstRound: boolean,
	currentPlayer: Player,
	alpha: number,
	beta: number,
	maybeChildNodes: Move[] | null = null,
	discount = 0.9
): NegaMaxResult => {
	const oldAlpha = alpha;
	const n = tTable[getHash(grid)]!;
	if (n !== undefined && n[TTableKeys.depth] >= depth) {
		const flag = n[TTableKeys.flag];
		const tValue = n[TTableKeys.value];
		const tMove = n[TTableKeys.move];
		if (flag === TTableFlag.Exact) {
			return [tMove, tValue, alpha, beta];
		} else if (flag === TTableFlag.LowerBound) {
			alpha = Math.max(alpha, tValue);
		} else if (flag === TTableFlag.UpperBound) {
			beta = Math.min(beta, n[TTableKeys.value]);
		}
	}
	const childNodes =
		maybeChildNodes === null
			? getAllMoves(grid, currentPlayer as Player, isFirstRound)
			: maybeChildNodes;

	if (depth === 0 || childNodes.length === 0) {
		return [
			[-1, -1, -1, -1, -1, -1, -1],
			currentPlayer * evalBoard(grid),
			alpha,
			beta,
		];
	}
	const orderedChildNodes = childNodes;
	let bestValue = -Infinity;
	let bestMove: Move = [-1, -1, -1, -1, -1, -1, -1];
	for (let i = 0; i < orderedChildNodes.length; i++) {
		const move = orderedChildNodes[i];
		const child = makeMove(grid, orderedChildNodes[i]);
		const protoValue =
			discount *
			-alphaBetaWithTT(
				child,
				depth - 1,
				false,
				-currentPlayer as Player,
				-beta,
				-alpha
			)[1];
		if (protoValue > bestValue) {
			bestValue = protoValue;
			bestMove = move;
		}
		alpha = Math.max(alpha, bestValue);
		if (alpha >= beta) {
			break;
		}
	}
	let flag: TTableFlag = TTableFlag.Exact;
	if (bestValue <= oldAlpha) {
		flag = TTableFlag.UpperBound;
	} else if (bestValue >= beta) {
		flag = TTableFlag.LowerBound;
	}
	tTable[getHash(grid)] = [depth, flag, bestValue, bestMove];
	return [bestMove, bestValue, alpha, beta];
};
`int AlphaBetaWithTT(s, alpha, beta, d)

	olda = alpha; /* save original alpha value */
	n =  retrieve(s) /* Transposition-table lookup */
 /* if position is not found, depth will be -1 */
	if n.depth >= d then   
		if n.flag = Exact then return n.value;
		elseif n.flag = LowerBound 
			then alpha = max(alpha, n.value);
	elseif n.flag = UpperBound 
			then beta = min(beta, n.value);
		if alpha>=beta
			then return n.value;
        	
	if (d == 0 || terminal)  then g = evaluate(s); /* leaf node */

	bestValue = -INFINITY 
	for(child =1; child <= NumSuccessors( s ); child++ ) 
		result =-AlphaBetaWithTT(Successor(child), -beta, -alpha, d-1);
	   if( result > bestValue ) 
			bestValue = result;
			bestMove = child;
			 if(bestValue >= alpha ) alpha = bestValue; 
	 		 if(bestValue >= beta ) break;
	/* Traditional transposition table storing of bounds */ 

    	/* Fail-low result implies an upper bound */ 
	if bestValue <= olda then flag = UpperBound;
	
	/* Fail-high result implies a lower bound */ 
	elseif bestValue >= beta then flag = LowerBound;
	elseif  flag = Exact;

	store(s, bestMove, bestValue, flag, depth);
	/* Note: this part stores information in the TT*/

	return bestValue ;
`;
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
	const orderedChildNodes = orderMoves(childNodes);
	if (depth === 0 || childNodes.length === 0) {
		return [
			[-1, -1, -1, -1, -1, -1, -1],
			currentPlayer * evalBoard(grid),
			alpha,
			beta,
		];
	}
	let value = -Infinity;
	let bestMove = [-1, -1, -1, -1, -1, -1, -1];
	for (let i = 0; i < orderedChildNodes.length; i++) {
		const move = orderedChildNodes[i];
		const child = makeMove(grid, move);
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
			bestMove = move;
		}
		alpha = Math.max(alpha, value);
		if (alpha >= beta) {
			break;
		}
	}
	return [bestMove as Move, value, alpha, beta];
};
const helpedArgNegaMax = (
	grid: Grid,
	depth: number,
	isFirstRound: boolean,
	currentPlayer: Player = 1,
	alpha = -Infinity,
	beta = Infinity,
	maybeChildNodes: Move[] | null = null
): Promise<NegaMaxResult> =>
	new Promise((resolve, reject) => {
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
		const orderedChildNodes = orderMoves(childNodes);
		if (depth === 0 || childNodes.length === 0) {
			return [
				[-1, -1, -1, -1, -1, -1, -1],
				currentPlayer * evalBoard(grid),
				alpha,
				beta,
			];
		}
		let value = -Infinity;
		let bestMove = [-1, -1, -1, -1, -1, -1, -1];
		let toPrune = 0;
		for (let i = 0; i < availableThreads; i++) {}
		for (let i = 0; i < orderedChildNodes.length; i++) {
			const move = orderedChildNodes[i];
			const child = makeMove(grid, move);
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
				bestMove = move;
			}
			alpha = Math.max(alpha, value);
			if (alpha >= beta) {
				break;
			}
		}
		return [bestMove as Move, value, alpha, beta];
	});

const iterativeDeepeningAlphaBeta = (
	maxTime: number,
	grid: Grid,
	isFirstRound: boolean,
	currentPlayer: Player,
	alpha: number,
	beta: number,
	maybeChildNodes: Move[] | null = null
): NegaMaxResult => {
	const t1 = performance.now();
	let elapsed = 0;
	let depth = 1;
	let result: NegaMaxResult = [[-1, -1, -1, -1, -1, -1, -1], -1, -1, -1];
	while (elapsed < maxTime && depth < 7) {
		result = alphaBetaWithTT(
			grid,
			depth,
			isFirstRound,
			currentPlayer,
			alpha,
			beta,
			maybeChildNodes
		);
		elapsed = (performance.now() - t1) / 1000;
		console.log(`Elapsed: ${Math.round(100 * elapsed) / 100}, depth:${depth}`);
		// console.log(depth)
		// console.log(`Reached depth ${depth}`)
		depth += 1;
	}
	console.log(
		`Reached depth: ${depth}` // ttable ${tTable.reduce((x) => x + 1, 0)}`
	);
	return result;
};

const negaMaxWorker = (
	grid: Grid,
	moves: Move[],
	alpha: number,
	beta: number,
	depth: number
) => {
	if (moves === undefined) {
		debugger;
	}
	console.log(`Started thread with ${moves.length} moves and depth ${depth}`);
	const result = argNegaMax(grid, depth, false, 1, alpha, beta, moves);
	// tTable = new Array<TTableEntry>()
	/*
	const result = iterativeDeepeningAlphaBeta(
		15,
		grid,
		false,
		1,
		alpha,
		beta,
		moves
	);
	*/
	// const result = alphaBetaWithTT(grid, depth, false, 1, alpha, beta, moves);
	/*
	const result = iterativeDeepeningAlphaBeta(
		5,
		grid,
		false,
		1,
		alpha,
		beta,
		moves
	);
	*/
 return result
};
export type { NegaMaxResult };
export { argNegaMax, negaMaxWorker };
