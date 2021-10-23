import { evalBoard, makeMove, getAllMoves, } from "../cannon_engine.js";
import { getHash, orderMoves } from "./utils.js";
let tTable = new Array();
let availableThreads = 0;
/*= new Array(9999999).fill([
    -1,
    -1,
    -1,
    [-1, -1, -1, -1, -1, -1, -1],
]);*/
const alphaBetaWithTT = (grid, depth, isFirstRound, currentPlayer, alpha, beta, maybeChildNodes = null, discount = 0.99) => {
    const oldAlpha = alpha;
    const n = tTable[getHash(grid)];
    if (n !== undefined && n[0 /* depth */] >= depth) {
        const flag = n[1 /* flag */];
        const tValue = n[2 /* value */];
        const tMove = n[3 /* move */];
        if (flag === 0 /* Exact */) {
            return [tMove, tValue, alpha, beta];
        }
        else if (flag === 2 /* LowerBound */) {
            alpha = Math.max(alpha, tValue);
        }
        else if (flag === 1 /* UpperBound */) {
            beta = Math.min(beta, n[2 /* value */]);
        }
    }
    const childNodes = maybeChildNodes === null
        ? getAllMoves(grid, currentPlayer, isFirstRound)
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
    let bestMove = [-1, -1, -1, -1, -1, -1, -1];
    for (let i = 0; i < orderedChildNodes.length; i++) {
        const move = orderedChildNodes[i];
        const child = makeMove(grid, orderedChildNodes[i]);
        const protoValue = discount *
            -alphaBetaWithTT(child, depth - 1, false, -currentPlayer, -beta, -alpha)[1];
        if (protoValue > bestValue) {
            bestValue = protoValue;
            bestMove = move;
        }
        alpha = Math.max(alpha, bestValue);
        if (alpha >= beta) {
            break;
        }
    }
    let flag = 0 /* Exact */;
    if (bestValue <= oldAlpha) {
        flag = 1 /* UpperBound */;
    }
    else if (bestValue >= beta) {
        flag = 2 /* LowerBound */;
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
const argNegaMax = (grid, depth, isFirstRound, currentPlayer = 1, alpha = -Infinity, beta = Infinity, maybeChildNodes = null, discount = 0.99) => {
    const childNodes = maybeChildNodes === null
        ? getAllMoves(grid, currentPlayer, isFirstRound)
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
        const protoValue = discount * -argNegaMax(child, depth - 1, false, -currentPlayer, -beta, -alpha)[1];
        if (protoValue > value) {
            value = protoValue;
            bestMove = move;
        }
        alpha = Math.max(alpha, value);
        if (alpha >= beta) {
            break;
        }
    }
    return [bestMove, value, alpha, beta];
};
const helpedArgNegaMax = (grid, depth, isFirstRound, currentPlayer = 1, alpha = -Infinity, beta = Infinity, maybeChildNodes = null) => new Promise((resolve, reject) => {
    const childNodes = maybeChildNodes === null
        ? getAllMoves(grid, currentPlayer, isFirstRound)
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
    for (let i = 0; i < availableThreads; i++) { }
    for (let i = 0; i < orderedChildNodes.length; i++) {
        const move = orderedChildNodes[i];
        const child = makeMove(grid, move);
        const protoValue = -argNegaMax(child, depth - 1, false, -currentPlayer, -beta, -alpha)[1];
        if (protoValue > value) {
            value = protoValue;
            bestMove = move;
        }
        alpha = Math.max(alpha, value);
        if (alpha >= beta) {
            break;
        }
    }
    return [bestMove, value, alpha, beta];
});
const iterativeDeepeningAlphaBeta = (maxTime, grid, isFirstRound, currentPlayer, alpha, beta, maybeChildNodes = null) => {
    const t1 = performance.now();
    let elapsed = 0;
    let depth = 1;
    let result = [[-1, -1, -1, -1, -1, -1, -1], -1, -1, -1];
    while (elapsed < maxTime && depth < 7) {
        result = alphaBetaWithTT(grid, depth, isFirstRound, currentPlayer, alpha, beta, maybeChildNodes);
        elapsed = (performance.now() - t1) / 1000;
        console.log(`Elapsed: ${Math.round(100 * elapsed) / 100}, depth:${depth}`);
        // console.log(depth)
        // console.log(`Reached depth ${depth}`)
        depth += 1;
    }
    console.log(`Reached depth: ${depth}` // ttable ${tTable.reduce((x) => x + 1, 0)}`
    );
    return result;
};
const negaMaxWorker = (grid, moves, alpha, beta, depth) => {
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
    return result;
};
export { argNegaMax, negaMaxWorker };
