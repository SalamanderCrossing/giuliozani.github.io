import Particle from './Particle';
const euclidianDistance = (x1: number, y1: number, x2: number, y2: number) => {
	return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

const distanceMatrix = (vectors: Particle[]) => {
	const matrix: number[][] = [];
	for (let i = 0; i < vectors.length; i++) {
		matrix[i] = [];
		for (let j = i; j < vectors.length; j++) {
			matrix[i][j] = euclidianDistance(
				vectors[i].x,
				vectors[i].y,
				vectors[j].x,
				vectors[j].y
			);
			// matrix[j][i] = matrix[i][j];
		}
	}
	return matrix;
};

const drawMatrix = (
	particles: Particle[],
	matrix: number[][],
	t: number,
	ctx: CanvasRenderingContext2D,
	linkRadius: number,
	maxLineWidth: number,
	rgb: string[]
) => {
	for (let i = 0; i < matrix.length; i++) {
		for (let j = i; j < matrix[i].length; j++) {
			const distance = matrix[i][j];
			const opacity = 1 - distance / linkRadius;
			if (opacity > 0) {
				ctx.lineWidth = maxLineWidth * (1 - Math.exp(-t / 200));
				ctx.strokeStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
				ctx.beginPath();
				ctx.moveTo(particles[i].x, particles[i].y);
				ctx.lineTo(particles[j].x, particles[j].y);
				ctx.stroke();
			}
		}
	}
	// if (opacity > 0) {
	// 	ctx.lineWidth = maxLineWidth * (1 - Math.exp(-this.t / 200));
	// 	ctx.strokeStyle =
	// 		"rgba(" +
	// 		rgb[0] +
	// 		"," +
	// 		rgb[1] +
	// 		"," +
	// 		rgb[2] +
	// 		"," +
	// 		opacity +
	// 		")";
	// 	ctx.beginPath();
	// 	ctx.moveTo(point.x, point.y);
	// 	ctx.lineTo(hub.x, hub.y);
	// 	ctx.closePath();
	// 	ctx.stroke();
	// }
};
export default class ParticlesManager {
	canvasWidth: number;
	canvasHeight: number;
	loopId: number;
	ctx: CanvasRenderingContext2D;
	particles: Particle[];
	particleColor: string = 'rgb(173,216,230)';
	lineColor: string = 'rgba(0,181,255)';
	particleAmount: number = 110;
	defaultRadius: number = 3;
	variantRadius: number = 3;
	defaultSpeed: number = 1;
	variantSpeed: number = 5;
	maxLinkRadius: number = 400;
	linkRadius: number;
	minLinkRadius: number;
	backgroundColor: string;
	maxLineWidth: number = 0.8;
	minLineWidth: number = 0.09;
	lineWidth: number;
	rgb: string[];
	stop: boolean = false;
	t: number;
	update = () => {};
	constructor({
		canvas,
		backgroundColor,
	}: {
		backgroundColor?: string;
		canvas: HTMLCanvasElement;
	}) {
		this.linkRadius = this.maxLinkRadius;
		this.minLinkRadius = 115;
		this.rgb = this.lineColor.match(/\d+/g)!;
		this.loopId = -1;
		this.ctx = canvas.getContext('2d')!;
		this.canvasWidth = canvas.width //, 10) //|| canvas.style.width;
		this.canvasHeight = canvas.height//, 10) //|| canvas.style.height;
		this.particles = [];
		this.backgroundColor = backgroundColor || 'black';
		this.lineWidth = this.minLineWidth;
		this.t = 0;
		for (let i = 0; i < this.particleAmount; i++) {
			this.particles.push(
				new Particle({
					ctx: this.ctx,
					canvasWidth: this.canvasWidth,
					canvasHeight: this.canvasHeight,
					variantSpeed: this.variantSpeed,
					variantRadius: this.variantRadius,
					defaultSpeed: this.defaultSpeed,
					defaultRadius: this.defaultRadius,
					particleColor: this.particleColor,
				})
			);
		}
		this.update = () => {
			this.ctx.fillStyle = this.backgroundColor;
			this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
			// this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
			this.drawScene();
			// reduces link radius exponentially
			this.linkRadius =
				this.linkRadius > this.minLinkRadius
					? this.maxLinkRadius * Math.exp(-this.t / 100)
					: this.minLinkRadius;
			this.t += 1;
			// if (!this.stop) {
			//   this.loopId = requestAnimationFrame(animationLoop);
			// }
		};
	}
	stopAnimation() {
		this.stop = true;
		cancelAnimationFrame(this.loopId);
	}
	drawScene() {
		this.drawLine();
		this.drawParticle();
	}
	drawParticle() {
		for (const particle of this.particles) {
			particle.update();
			particle.draw();
		}
	}
	drawLine() {
		const matrix = distanceMatrix(this.particles);
		drawMatrix(
			this.particles,
			matrix,
			this.t,
			this.ctx,
			this.linkRadius,
			this.maxLineWidth,
			this.rgb
		);
		// for (const particle of this.particles) {
		//   this.linkPoints(particle);
		// }
	}
	// linkPoints(point: Particle) {
	//   for (const hub of this.particles) {
	//     const distance = this.checkDistance(point.x, point.y, hub.x, hub.y);
	//     const opacity = 1 - distance / this.linkRadius;
	//     if (opacity > 0) {
	//       this.ctx.lineWidth = this.maxLineWidth * (1 - Math.exp(-this.t / 200));
	//       this.ctx.strokeStyle =
	//         "rgba(" +
	//         this.rgb[0] +
	//         "," +
	//         this.rgb[1] +
	//         "," +
	//         this.rgb[2] +
	//         "," +
	//         opacity +
	//         ")";
	//       this.ctx.beginPath();
	//       this.ctx.moveTo(point.x, point.y);
	//       this.ctx.lineTo(hub.x, hub.y);
	//       this.ctx.closePath();
	//       this.ctx.stroke();
	//     }
	//   }
	// }
}
