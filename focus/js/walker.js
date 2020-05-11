import noise from 'noise.js'

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;
}


const start = () => {
    interval = setInterval(draw, 20);
}

const stop = () => {
    clearInterval(interval);
}

class Walker{
    constructor() {
noise.seed(Math.random());

const canvas = document.getElementById("plottin_canvas");
const ctx = canvas.getContext("2d");
let x = canvas.width/2;
let y = canvas.height/2;
let dx = 2;
let dy = -2;
let interval = null;



    }
}
export default walker;
