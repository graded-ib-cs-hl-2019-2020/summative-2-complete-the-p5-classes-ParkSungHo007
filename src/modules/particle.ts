export class Particle {
    private x: number;
    private y: number;
    private size: number = 25;
    private xSpeed: number;
    private ySpeed: number;
    private color: string = "orange";
    constructor(x: number, y: number, xSpeed: number, ySpeed: number) {
        this.x = x;
        this.y = y;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
    }
    public draw(): void {
        fill(this.color);
        ellipse(this.x, this.y, this.size);
    }
    public explode(nth: number): void {
        angleMode(DEGREES);
        this.x = this.x + this.xSpeed * sin(18 * nth);
        this.y = this.y + this.ySpeed * cos(18 * nth);
    }
}
