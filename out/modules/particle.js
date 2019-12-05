export class Particle {
    constructor(x, y, xSpeed, ySpeed) {
        this.size = 25;
        this.color = "orange";
        this.x = x;
        this.y = y;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
    }
    draw() {
        fill(this.color);
        ellipse(this.x, this.y, this.size);
    }
    explode(nth) {
        angleMode(DEGREES);
        this.x = this.x + this.xSpeed * sin(18 * nth);
        this.y = this.y + this.ySpeed * cos(18 * nth);
    }
}
//# sourceMappingURL=particle.js.map