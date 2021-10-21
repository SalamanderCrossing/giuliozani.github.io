import { negaMaxWorker } from "./nega_max.js";
addEventListener("message", (event) => {
    const parsedEvent = event["data"];
    // if (event ===
    const [grid, moves, alpha, beta, depth] = parsedEvent;
    const result = negaMaxWorker(grid, moves, alpha, beta, depth);
    postMessage(result);
});
