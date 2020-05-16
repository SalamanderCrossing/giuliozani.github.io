import noise from "./noise.js";

const isSafari = () =>
  /constructor/i.test(window.HTMLElement) ||
  (function (p) {
    return p.toString() === "[object SafariRemoteNotification]";
  })(
    !window["safari"] ||
      (typeof safari !== "undefined" && safari.pushNotification)
  );

class Walker {
  constructor(canvasId) {
    noise.seed(Math.random());
    const canvas = document.getElementById(canvasId);
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    //this.ctx.fillStyle = "#000000";
    //this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    const safari = isSafari();
    if (safari) {
      console.log("safari detected");
    }
    this.stepSize = 15;
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.interval = 20;
    this.time = 0;
    this.xSign = 1;
    this.ySign = 1;
    this.videoHeight = 240;
    this.videoWidth = 320;
    this.stopped = false;
  }
  drawBall() {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
    this.ctx.fillStyle = "#990000";
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();
  }
  step() {
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
    /*
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
    */
    this.x = nextX;
    this.y = nextY;
    this.time += 0.01;
  }
  start() {
    this.canvas.style.curson = "none";

    const draw = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      //this.ctx.fillStyle = "#000000";
      //this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.step();
      this.drawBall();
      if (!this.stopped) {
        setTimeout(() => {
          window.requestAnimationFrame(draw);
        }, this.interval);
      }
    };
    window.requestAnimationFrame(draw);
    /*
    this.interval = setInterval(() => {
      this.draw();
      this.time += 0.005;
    }, 10);
    */
  }
  stop() {
    this.stopped = true;
    //clearInterval(this.interval);
  }
}
export default Walker;
