import { chooseMove } from "./ai_player.js";
import { expandStates } from "./cannon_engine.js";

const test = () => {
	const grid = [
		[0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
		[0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
		[0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
		[0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[-1, 0, -1, 0, -1, 0, -1, 0, -1, 0],
		[-1, 0, -1, 0, -1, 0, -1, 0, -1, 0],
		[-1, 0, -1, 0, -1, 0, -1, 0, -1, 0],
		[0, 0, 0, 0, 0, -2, 0, 0, 0, 0],
	];
	//const moves = getMoves(grid, -1, 7, 6, false);
	//console.log("Moves:");
	//console.table(moves);
	//const nextState = makeMove(grid, -1, moves[2]);
	//console.table(nextState);
	//const value = evalBoard(nextState, -1);
	//const antiValue = evalBoard(nextState, 1);
	//console.log(value);
	//console.log(antiValue);
	/*
	const t0 = performance.now();
	const bestMove = chooseMove(grid);
	const t1 = performance.now();
	console.log(`Best move: ${bestMove}, exec time: ${(t1 - t0) / 1000}`);
	*/
};
test();
