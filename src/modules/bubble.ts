
export class Bubble {
    private x: number;
    private y: number;
    private size: number;
    private xSpeed: number = random(-1.5, 1.5);
    private ySpeed: number = random(-1.5, 1.5);
    private stopped: boolean = false;
    private color: string = "#ffffffcc"; // translucent bubbles
    private borderColor: string;

    /* TODO REQUIRED - What's missing here? Add it! */
    // tslint:disable-next-line: one-line;annoying problem solved
    // tslint:disable-next-line: max-line-length
    constructor(x: number, y: number, size: number, borderColor: string) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.borderColor = borderColor;
    }

    public getX(): number {
        return this.x;
    }
    public getY() {
        return this.y;
    }

    public stop() {
        this.stopped = true;
    }

    public go() {
        this.stopped = false;
    }

    public draw(): void {
        fill(this.color);
        stroke(this.borderColor);
        ellipse(this.x, this.y, this.size);
    }

    public move(): void {
        if (!this.stopped) {
            this.x = this.xSpeed + this.x;
            this.y = this.ySpeed + this.y;
            this.doBorderBehavior();
        }
    }

    public distFromMouse(): number {
        return dist(this.x, this.y, mouseX, mouseY);
    }

    /* This border behavior implements a wrap, so bubbles will flip over to the other side */
    private doBorderBehavior() {
        if (this.x < -this.size / 2) {
            this.x = width + this.size / 2;
        } else if (this.x > width + this.size / 2) {
            this.x = -this.size / 2;
        }
        if (this.y < -this.size / 2) {
            this.y = height + this.size / 2;
        } else if (this.y > height + this.size / 2) {
            this.y = -this.size / 2;
        }
    }
}
