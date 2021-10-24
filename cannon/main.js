import { CannonBoard } from "./src/cannon_board.js";
const getSettings = () => {
	Swal.fire({
		title: "Welcome!",
		html: `
		<br>
	<div>Check out <a target="_blank" href="https://www.iggamecenter.com/info/en/cannon.html">cannon rules</a></div>
	<br>
	<div>Select the <i>center</i> of a cannon in order to show its moves.</div>
	<br>
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
		<label for="n_threads" style='font-size:15px'> Default = number of native CPU threads</label>
	</div>
	<br>
	<div>Dark mode enabled:
		<input
			type="checkbox" 
			id="dark_mode"
		checked>
	</div>
	<br>
	`,
		confirmButtonText: "Play!",
		didOpen: () => {
			document.getElementById("n_threads").value =
				navigator.hardwareConcurrency !== undefined
					? navigator.hardwareConcurrency
					: 2;
		},
	}).then((result) => {
		/* Read more about isConfirmed, isDenied below */
		if (result.isConfirmed) {
			if (document.getElementById("dark_mode").checked) {
				document.head.innerHTML +=
					'<link rel="stylesheet" type="text/css" href="dark_mode.css">';
			}
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

	const cannonBoard = new CannonBoard(nThreads);
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
	const update = (loser) => {
		if (loser !== 0) {
			debugger;
			Swal.fire(
				`Player ${
					loser === 1
						? app.aiPlayerIsBlack
							? "black"
							: "white"
						: !app.aiPlayerIsBlack
						? "black"
						: "white"
				} wins!!`
			);
		}
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
				if (i >= 0 && i < 10 && j >= 0 && j < 10) {
					cannonBoard.select(i, j);
				}
			},
		},
	});
	if (aiPlayerIsBlack) {
		cannonBoard._playAI();
	}
};
