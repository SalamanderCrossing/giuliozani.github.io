const sigmoid = (z: number, k = 200) => 1 / (1 + Math.exp(-z / k));

class Vector {
	x: number;
	y: number;
	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}
}
export default class Particle {
	x: number;
	y: number;
	radius: number;
	speed: number;
	directionAngle: number;
	color: string;
	velocity: Vector;
	canvasWidth: number;
	canvasHeight: number;
	ctx: CanvasRenderingContext2D;
	t: number;
	variantRadius: number;
	constructor({
		ctx,
		canvasWidth,
		canvasHeight,
		variantSpeed,
		variantRadius,
		defaultSpeed,
		defaultRadius,
		particleColor,
	}: {
		canvasWidth: number;
		canvasHeight: number;
		variantRadius: number;
		variantSpeed: number;
		defaultRadius: number;
		defaultSpeed: number;
		particleColor: string;
		ctx: CanvasRenderingContext2D;
	}) {
		this.ctx = ctx;
		this.canvasWidth = canvasWidth;
		this.canvasHeight = canvasHeight;
		// this.x = Math.random() * this.canvasWidth;
		// this.y = Math.random() * this.canvasHeight;
		this.t = 0;
		this.x = this.canvasWidth / 2;
		this.y = this.canvasHeight / 2;
		// this.radius = defaultRadius + Math.random() * variantRadius;
		this.radius = 0.5;
		this.variantRadius = Math.random() * variantRadius;
		this.speed = defaultSpeed + Math.random() * variantSpeed;
		this.directionAngle = Math.floor(Math.random() * 360);
		this.color = particleColor;
		this.velocity = new Vector(
			Math.cos(this.directionAngle) * this.speed,
			Math.sin(this.directionAngle) * this.speed
		);
	}
	update() {
		this.radius = this.variantRadius * sigmoid(this.t); // (1 - Math.exp(-this.t / 100));
		this.border();
		this.x += this.velocity.x;
		this.y += this.velocity.y;
		this.velocity.x =
			Math.sign(this.velocity.x) *
			(1 - sigmoid(this.t)) *
			Math.abs(Math.cos(this.directionAngle)) *
			this.speed;
		this.velocity.y =
			Math.sign(this.velocity.y) *
			(1 - sigmoid(this.t)) *
			Math.abs(Math.sin(this.directionAngle)) *
			this.speed;

		this.t += 1;
	}

	border() {
		if (this.x >= this.canvasWidth || this.x <= 0) {
			this.velocity.x *= -1;
		}
		if (this.y >= this.canvasHeight || this.y <= 0) {
			this.velocity.y *= -1;
		}
		this.x = Math.max(Math.min(this.x, this.canvasWidth), 0);
		this.y = Math.max(Math.min(this.y, this.canvasHeight), 0);
	}

	draw() {
		this.ctx.beginPath();
		this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
		this.ctx.closePath();
		this.ctx.fillStyle = this.color;
		this.ctx.fill();
	}
}
