import noise from "./noise.js";

class Walker {
  constructor(canvasId) {
    noise.seed(Math.random());
    const canvas = document.getElementById(canvasId);
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.ctx.fillStyle = "#000000";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.stepSize = 10;
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.interval = null;
    this.time = 0;
    this.xSign = 1;
    this.ySign = 1;
    this.videoHeight = 240;
    this.videoWidth = 320;
  }
  drawBall() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
    this.ctx.fillStyle = "#990000";
    this.ctx.fill();
    this.ctx.closePath();
  }
  draw() {
    const nextStepX = noise.simplex2(0, this.time) * this.xSign * this.stepSize;
    const nextStepY =
      noise.simplex2(1000, this.time) * this.ySign * this.stepSize;
    let nextX = nextStepX + this.x;
    let nextY = nextStepY + this.y;
    if (nextX < 0 || nextX > this.canvas.width) {
      nextX = this.x - nextStepX;
      this.xSign = -this.xSign;
    }
    if (nextY < 0 || nextY > this.canvas.height) {
      nextY = this.y - nextStepY;
      this.ySign = -this.ySign;
    }
    if (nextX < this.videoWidth && nextY < this.videoHeight) {
      if (this.x >= this.videoWidth) {
        nextX = this.x - nextStepX;
        this.xSign = -this.xSign;
      } else {
        nextY = this.y - nextStepY;
        this.ySign = -this.ySign;
      }
      //this.x += 2 * (videoHeight - this.x);
      //this.y += 2 * (videoWidth - this.y);
    }
    this.x = nextX;
    this.y = nextY;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "#000000";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawBall();
  }
  start() {
    this.canvas.style.curson = "none";
    this.interval = setInterval(() => {
      this.draw();
      this.time += 0.005;
    }, 10);
  }
  stop() {
    clearInterval(this.interval);
  }
}
export default Walker;
