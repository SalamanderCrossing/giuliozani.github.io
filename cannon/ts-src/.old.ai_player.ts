import {
	evalBoard,
	Player,
	Grid,
	Move,
	makeMove,
	getAllMoves,
} from "./cannon_engine.js";

type NegaMaxResult = [moveIndex: number, value: number, alpha: number, beta: number]
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

const getChunks = <T>(a: Array<T>, nSplits: number): Array<Array<T>> => {
	const result = new Array<Array<T>>();
	let current = new Array<T>();
	result.push(current)
	const size = Math.floor(a.length / nSplits);
	for (let i = 0; i < a.length; i++) {
		current.push(a[i]);
		if (current.length === size && result.length < nSplits) {
			current = new Array<T>();
			result.push(current);
		}
	}
	return result
};

class ParArgNegaMax {
	_workers: Worker[];
	constructor(threads: number) {
		this._workers = [];
		for (let i = 0; i < threads; i++) {
			const worker = new Worker("./ai_player.js", { type: "module" });
			this._workers.push(worker);
			worker.onerror = (e) => {
				debugger;
			};
			worker.onmessageerror = console.log;
		}
	}
	argNegaMax(grid: Grid, isFirstRound: boolean) {
		const t0 = performance.now();
		const childNodes = getAllMoves(grid, 1 as Player, isFirstRound);
		console.log(`Number of future states according to me ${childNodes.length}`)
		const threads = Math.min(this._workers.length, childNodes.length);
		console.log(
			`Total umber of threads ${this._workers.length}, using ${threads}`
		);
		const chunks = getChunks(childNodes, threads);
		// const chunks = [childNodes];
		const results = new Array<NegaMaxResult>()
		let completed = 0;
		for (let i = 0; i < chunks.length; i++) {
			const worker = this._workers[i];
			worker.onmessage = (e) => {
				console.log(`Thread ${i} has finished!`);
				// const [relativeIndex, val, alpha, beta] = e.data as unknown as [number, number, number, number];
				const threadResult = e.data as unknown as NegaMaxResult
				threadResult[0] += i * chunks[0].length;
				results[i] = threadResult
				completed += 1;
				if (completed === chunks.length) {
					const result = results.reduce((acc, r) => (r[1] > acc[1] ? r : acc));
					//console.log(`Last thread finished, result:${result}`);
					postMessage(result[0]);
					const t1 = performance.now();
					console.log(`Took in total: ${(t1 - t0) / 1000}`);
				}
			};
			if (chunks[i] === undefined) {
				debugger;
			}
			console.log(`Starting thread ${i}`);
			const chunk = chunks[i];
			worker.postMessage(["argNegaMax", [grid, chunk, -Infinity, Infinity]]);
		}
		return [0, 0];
	}
}
/*
const parArgNegaMax = (
	grid: Grid,
	depth: number,
	isFirstRound: boolean,
	threads: number = 8,
	cb: (arg0: number) => {}
) => {
	const t0 = performance.now();
	const childNodes = getAllMoves(grid, -1 as Player, isFirstRound);
	const chunks = getChunks(childNodes, threads);
	const workers = new Array<Worker>();
	const results = [];
	let completed = 0;
	for (let i = 0; i < threads; i++) {
		const worker = new Worker("./ai_player.js", { type: "module" });
		workers.push(worker);
		worker.onmessage = (e) => {
			console.log(`Thread ${i} has finished!`);
			const [relativeIndex, val] = e.data as unknown as [number, number];
			const index = relativeIndex + i;
			results[i] = e.data;
			completed += 1;
			if (completed === threads) {
				const result = results.reduce(
					(acc, r) => (acc[1] < r[1] ? acc : r),
					[0, Infinity]
				);
				console.log(`Last thread finished, result:${result}`);
				postMessage(result[0]);
				const t1 = performance.now();
				console.log(`Took in total: ${(t1 - t0) / 1000}`);
			}
		};
		if (chunks[i] === undefined) {
			debugger;
		}
		worker.postMessage(["argNegaMax", [grid, chunks[i]]]);
	}
	return [0, 0];
};
*/
/*
const chooseMove = (states: Grid[]): number => {
	const values = states.map((s) => -negaMax(s, 5, -1));
	const best = argMax(values);
	return best;
};
*/
addEventListener("message", (event) => {
	const parsedEvent = (event as unknown as Record<string, [string, unknown]>)[
		"data"
	];
	let parArgNegaMax: ParArgNegaMax | null = null;
	if (parsedEvent[0] === "chooseMove") {
		if (parArgNegaMax === null) {
			console.log("creting everything anew");
			parArgNegaMax = new ParArgNegaMax(10);
		}
		const [round, grid] = parsedEvent[1] as [number, Grid];
		parArgNegaMax.argNegaMax(grid, round === 0);
	} else if (parsedEvent[0] === "argNegaMax") {
		const [grid, moves, alpha, beta] = parsedEvent[1] as [Grid, Move[], number, number];
		const depth = 5
		if (moves === undefined) {
			debugger;
		}
		console.log(`Started thread with ${moves.length} moves and depth ${depth}`);
		const result = argNegaMax(grid, depth, false, 1, alpha, beta, moves);
		postMessage(result);
	}
});
export { argNegaMax };