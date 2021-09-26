import { CannonBoard } from "./src/cannon_board.js";
const cannon = new CannonBoard();
const update = () => {
  app.grid = cannon.grid
  app.player = cannon.currentPlayer;
  app.round = cannon.round;
};
const app = new Vue({
  el: "#cannon",
  data: {
    grid: cannon.grid,
    player: cannon.currentPlayer,
    round: cannon.round,
  },
  methods: {
    getSrc: function (i, j) {
      const gridVal = this.grid[i][j]
      let src = "";
      if (gridVal.includes("x")) {
        src = "white_pawn.png";
      } else if (gridVal.includes("o")) {
        src = "black_pawn.png";
      } else if (gridVal === "m") {
        src = "dotted_circle.png";
      }
      if (gridVal.includes("t")) {
        src = "town.png";
      } else if (gridVal === "@") {
        src = "dashed_circle.png";
      }
      return `./imgs/${src}`;
    },
    selected: function (i, j) {
      const gameOver = cannon.select(i, j);
      if (gameOver) {
        Swal.fire(`Player ${cannon.currentPlayer === 'o' ? 'white' : 'black'} wins!!`);
      }
      update();
    },
  },
});
