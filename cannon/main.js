import { CannonBoard } from "./src/cannon_board.js";
const getSettings = () => {
	Swal.fire({
		title: "Welcome!",
		html: `
	<div>AI player color:
		<input
			type="checkbox" 
			onchange="document.getElementById('ai_color_text').innerText = this.checked ? 'black' : 'white';"
			id="ai_color"
			name="ai_color"
		checked>
		<label
			for="ai_color"
			id='ai_color_text'>
			black
		</label>
	</div>
	<br>
	<div>Number of threads:
		<input
			type="number" 
			name="n_threads"
			id="n_threads"
			style='width:50px'
		>
		<label for="n_threads" style='font-size:20px'> Default = # native CPU threads</label>
		
	</div>
	<script>
	</script>
	<br>
	<div>Don't know how to play? Check out <a target="_blank" href="https://www.iggamecenter.com/info/en/cannon.html">cannon rules</a></div>
	`,
		confirmButtonText: "Play!",
		didOpen: () => {
			document.getElementById("n_threads").value = navigator.hardwareConcurrency !== undefined ? navigator.hardwareConcurrency : 2
		},
	}).then((result) => {
		/* Read more about isConfirmed, isDenied below */
		if (result.isConfirmed) {
			document.getElementById("cannon_table").requestFullscreen();
			const nThreads = document.getElementById("n_threads").value;
			const aiPlayerIsBlack = document.getElementById("ai_color").checked;
			document.getElementById("cannon").style.display = "";
			initCannon(aiPlayerIsBlack, nThreads);
			// Swal.fire("Ready to play!", "", "success");
		} else {
			getSettings();
		}
	});
};
getSettings();
const initCannon = (aiPlayerIsBlack, nThreads) => {
	console.log(`AI black: ${aiPlayerIsBlack}`);

	const cannonBoard = new CannonBoard();
	const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
	const rotateMatrix = (grid) => {
		const newGrid = grid.map((_) => []);
		for (let i = 0; i < grid.length; i++) {
			for (let j = 0; j < grid.length; j++) {
				newGrid[j][i] = grid[i][j];
			}
		}
		return newGrid;
	};
	const getGrid = () => {
		const grid = cannonBoard.grid.map((r, i) =>
			aiPlayerIsBlack ? [...r, String(i + 1)] : [String(i + i), ...r]
		);
		return !aiPlayerIsBlack
			? [...grid, new Array(11).fill("c")]
			: [new Array(11).fill("c"), ...grid];
	};
	//.concat(new Array(10).fill("").map((_, i) => alphabet[i]));
	console.table(getGrid());
	const update = () => {
		app.grid = getGrid();
		app.player = cannonBoard.currentPlayer;
		app.round = cannonBoard.round;
	};
	cannonBoard.update = update;
	const app = new Vue({
		el: "#cannon",
		data: {
			aiPlayerIsBlack: aiPlayerIsBlack,
			grid: getGrid(),
			player: cannonBoard.currentPlayer,
			round: cannonBoard.round,
			alphabet: "abcdefghijklmnopqrstuvwxyz".toUpperCase(),
		},
		methods: {
			start: function () {
				cannonBoard._playAI();
				update();
			},
			getSrc: function (i, j) {
				const gridVal = this.grid[i][j];
				if (i === 6 && j === 0) {
					// debugger;
				}
				let src = "";
				if (gridVal.includes("x")) {
					//src = !this.aiPlayerIsBlack ? "white_pawn.png" : "black_pawn.png";
				} else if (gridVal.includes("o")) {
					//src = !this.aiPlayerIsBlack ? "black_pawn.png" : "white_pawn.png";
				} else if (gridVal === "m") {
					//src = "dotted_circle.png";
				}
				if (gridVal.includes("t")) {
					//src = "town.png";
				} else if (gridVal === "@") {
					//src = "dashed_circle.png";
				}
				return `./imgs/${src}`;
			},
			selected: function (i, j) {
				const gameOver = cannonBoard.select(i, j);
				if (gameOver) {
					Swal.fire(
						`Player ${cannonBoard.currentPlayer === "o" ? "white" : "black"} wins!!`
					);
				}
				update();
			},
		},
	});
	if (aiPlayerIsBlack) {
		cannonBoard._playAI();
		update();
	}
};
