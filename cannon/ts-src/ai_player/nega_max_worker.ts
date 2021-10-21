import { negaMaxWorker } from "./nega_max.js";
import { Grid, Move } from "../cannon_engine.js";

addEventListener("message", (event) => {
	const parsedEvent = (event as unknown as Record<string, unknown>)["data"];
	// if (event ===
	const [grid, moves, alpha, beta, depth] = parsedEvent as [
		grid: Grid,
		move: Move[],
		alpha: number,
		beta: number,
		depth: number
	];
	const result = negaMaxWorker(grid, moves, alpha, beta, depth);
	postMessage(result);
});
