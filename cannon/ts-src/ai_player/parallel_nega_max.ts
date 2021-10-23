import { NegaMaxResult } from "./nega_max.js";
import { getAllMoves, Player, Grid } from "../cannon_engine.js";
import { orderMoves } from "./utils.js";

const getChunks = <T>(a: Array<T>, nSplits: number): Array<Array<T>> => {
	const result: T[][] = Array(nSplits)
		.fill(0)
		.map((_) => []);
	let i = 0;
	while (i < a.length) {
		for (const bucket of result) {
			bucket.push(a[i]);
			i += 1;
			if (i >= a.length) {
				return result;
			}
		}
	}
	return result;
};

class ParArgNegaMax {
	_workers: Worker[];
	_lastTime: number;
	_depth: number;
	constructor(threads: number, depth: number) {
		this._depth = depth;
		this._workers = [];
		this._lastTime = 0;
		for (let i = 0; i < threads; i++) {
			const worker = new Worker("./nega_max_worker.js", { type: "module" });
			this._workers.push(worker);
			worker.onerror = (e) => {
				debugger;
			};
			worker.onmessageerror = console.log;
		}
	}
	_lowLevelArgNegaMax = (
		grid: Grid,
		isFirstRound: boolean,
		depth: number,
		alpha = -Infinity,
		beta = Infinity
	): Promise<NegaMaxResult> =>
		new Promise<NegaMaxResult>((resolve, _reject) => {
			const t0 = performance.now();
			const childNodes = orderMoves(
				getAllMoves(grid, 1 as Player, isFirstRound)
			);
			console.log(
				`Number of future states according to me ${childNodes.length}`
			);
			const threads = Math.min(this._workers.length, childNodes.length);
			console.log(
				`Total umber of threads ${this._workers.length}, using ${threads}`
			);
			const chunks = getChunks(childNodes, threads);
			console.log(chunks.map((c) => c.length));
			// const chunks = [childNodes];
			const results = new Array<NegaMaxResult>();
			let completed = 0;
			for (let i = 0; i < chunks.length; i++) {
				const worker = this._workers[i];
				worker.onmessage = (e) => {
					console.log(`Thread ${i} has finished!`);
					// const [relativeIndex, val, alpha, beta] = e.data as unknown as [number, number, number, number];
					const threadResult = e.data as unknown as NegaMaxResult;
					results[i] = threadResult;
					completed += 1;
					if (completed === chunks.length) {
						console.log(results);
						const result = results.reduce((acc, r) =>
							r[1] > acc[1] ? r : acc
						);
						console.log(result);
						const bestAlpha = results.reduce(
							(acc, x) => (x[2] > acc ? x[2] : acc),
							-Infinity
						) as number;
						const bestBeta = results.reduce(
							(acc, x) => (x[3] < acc ? x[3] : acc),
							+Infinity
						) as number;
						//console.log(`Last thread finished, result:${result}`);

						const t1 = performance.now();
						resolve([result[0], result[1], bestAlpha, bestBeta]);
						// console.log(`Took in total: ${(t1 - t0) / 1000}`);
					}
				};
				if (chunks[i] === undefined) {
					debugger;
				}
				console.log(`Starting thread ${i}`);
				const chunk = chunks[i];
				worker.postMessage([grid, chunk, alpha, beta, depth]);
			}
		});

	async argNegaMax(grid: Grid, round: number) {
		const pawnCount = getPawnCount(grid);
		if (round > 1 && this._lastTime > 15) {
			this._depth -= 1;
		} else if (round > 20 && this._lastTime < 5 && this._depth < 8) {
			this._depth += 1;
		}
		const t1 = performance.now();
		const protoResult = await this._lowLevelArgNegaMax(
			grid,
			round === 0,
			this._depth
		);
		const t2 = performance.now();
		postMessage(protoResult[0]);
		this._lastTime = (t2 - t1) / 1000;
		console.log(`Took ${this._lastTime}`);
	}
}
const getPawnCount = (grid: Grid) => {
	let count = 0;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid.length; j++) {
			count += Number(Math.abs(grid[i][j]) === 1);
		}
	}
	return count;
};
const parArgNegaMax = new ParArgNegaMax(12, 6);
addEventListener("message", (event) => {
	const parsedEvent = (event as unknown as Record<string, unknown>)["data"];
	const [round, grid] = parsedEvent as [number, Grid];
	parArgNegaMax.argNegaMax(grid, round);
});
