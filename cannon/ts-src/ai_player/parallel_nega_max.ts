import { NegaMaxResult } from "./nega_max.js";
import { getAllMoves, Player, Grid } from "../cannon_engine.js";

const getChunks = <T>(a: Array<T>, nSplits: number): Array<Array<T>> => {
	const result = new Array<Array<T>>();
	let current = new Array<T>();
	result.push(current);
	const size = Math.floor(a.length / nSplits);
	for (let i = 0; i < a.length; i++) {
		current.push(a[i]);
		if (current.length === size && result.length < nSplits) {
			current = new Array<T>();
			result.push(current);
		}
	}
	return result;
};

class ParArgNegaMax {
	_workers: Worker[];
	constructor(threads: number) {
		this._workers = [];
		for (let i = 0; i < threads; i++) {
			const worker = new Worker("./nega_max.js", { type: "module" });
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
		console.log(`Number of future states according to me ${childNodes.length}`);
		const threads = Math.min(this._workers.length, childNodes.length);
		console.log(
			`Total umber of threads ${this._workers.length}, using ${threads}`
		);
		const chunks = getChunks(childNodes, threads);
		// const chunks = [childNodes];
		const results = new Array<NegaMaxResult>();
		let completed = 0;
		for (let i = 0; i < chunks.length; i++) {
			const worker = this._workers[i];
			worker.onmessage = (e) => {
				console.log(`Thread ${i} has finished!`);
				// const [relativeIndex, val, alpha, beta] = e.data as unknown as [number, number, number, number];
				const threadResult = e.data as unknown as NegaMaxResult;
				threadResult[0] += i * chunks[0].length;
				results[i] = threadResult;
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
addEventListener("message", (event) => {
	const parsedEvent = (event as unknown as Record<string, [string, unknown]>)[
		"data"
	];
	let parArgNegaMax: ParArgNegaMax | null = null;
	if (parArgNegaMax === null) {
		console.log("creting everything anew");
		parArgNegaMax = new ParArgNegaMax(10);
	}
	const [round, grid] = parsedEvent[1] as [number, Grid];
	parArgNegaMax.argNegaMax(grid, round === 0);
});
