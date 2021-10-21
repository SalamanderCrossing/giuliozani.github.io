import { getTownPositions, getAllMoves, makeMove, evalBoard, expandStates, initGrid, } from "../cannon_engine.js";
import { argNegaMax } from "../ai_player/nega_max.js";
import { getArgMax } from "./evolve.js";
const getGreedyPlayer = (genome) => (grid) => {
    const states = expandStates(grid, -1, false);
    const values = states.map((s) => evalBoard(s, genome[0], genome[1], genome[2], genome[3]));
    const argMax = getArgMax(values);
    return states[argMax];
};
const getNegaMaxPlayer = (depth) => (grid) => makeMove(grid, argNegaMax(grid, depth, false, 1)[0]);
const getAGrid = () => {
    const grid = initGrid();
    const townI1 = 0;
    const townI2 = 9;
    const townJ1 = Math.round(Math.random() * 8) + 1;
    const townJ2 = Math.round(Math.random() * 8) + 1;
    grid[townI1][townJ1] = 2;
    grid[townI2][townJ2] = -2;
    return grid;
};
const getFitness = (genome) => {
    const greedyPlayer = getGreedyPlayer(genome);
    const negaMaxPlayer = getNegaMaxPlayer(4);
    let round = 0;
    let negaMaxPlayerLost = false;
    let greedyPlayerLost = false;
    let grid = getAGrid();
    while (!(negaMaxPlayerLost || greedyPlayerLost) && round < 111) {
        const newGrid = round % 2 === 0 ? negaMaxPlayer(grid) : greedyPlayer(grid);
        if (newGrid === undefined) {
            debugger;
        }
        grid = newGrid;
        const townPositions = getTownPositions(grid);
        negaMaxPlayerLost =
            townPositions[0][0] === -1 || getAllMoves(grid, 1, false).length === 0;
        greedyPlayerLost =
            townPositions[1][0] === -1 || getAllMoves(grid, -1, false).length === 0;
        // console.table(grid);
        round += 1;
    }
    return round;
};
addEventListener("message", (event) => {
    const parsedEvent = event["data"];
    // if (event ===
    const [genome, index] = parsedEvent;
    const fitness = getFitness(genome);
    postMessage([fitness, index]);
});
