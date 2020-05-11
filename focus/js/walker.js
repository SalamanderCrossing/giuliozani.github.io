import noise from "./noise.js";

class Walker {
  constructor(canvasId) {
    noise.seed(Math.random());
    const canvas = document.getElementById(canvasId);
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.interval = null;
    this.time = 0;
  }
  drawBall() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
    this.ctx.fillStyle = "#0095DD";
    this.ctx.fill();
    this.ctx.closePath();
  }
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawBall();
    this.x = ((noise.simplex2(0, this.time) + 1) * this.canvas.width) / 2;
    this.y = ((noise.simplex2(1000, this.time) + 1) * this.canvas.height) / 2;
    // (noise.simplex2(1000, this.time)) * this.canvas.height;
  }
  start() {
    this.interval = setInterval(() => {
      this.draw();
      this.time += 0.004;
    }, 20);
  }
  stop() {
    clearInterval(interval);
  }
}
export default Walker;
