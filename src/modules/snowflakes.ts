export class Snowflake {
    private x: number;
    private y: number;
    private size: number;
    private xSpeed: number;
    private ySpeed: number;
    private stopped: boolean = false;
    private color: string = "white";

    constructor(x: number, y: number, size: number) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.xSpeed = random(-1, 1); // moves leftwards or rightwards sloooooooooooowly
        this.ySpeed = random(0.1, 0.5); // falls downwards slooooooooooooooooooowly
    }
    public stop() {
        this.stopped = true;
    }
    public getStop(): boolean {
        return this.stopped;
    }
    public go() {
        this.stopped = false;
    }
    // tslint:disable-next-line: max-line-length
    /* TODO REQUIRED - Make this work. The snowflakes should drift slowly downward. I have implemented only the draw() method.
     * You can base the rest of the behavior after bubbles, with only a few changes. */
    public draw(): void {
        stroke(this.color);
        line(this.x, this.y + this.size / 2, this.x, this.y - this.size / 2);
        line(this.x + this.size / 2, this.y, this.x - this.size / 2, this.y);
        line(this.x - this.size / 3, this.y - this.size / 3, this.x + this.size / 3, this.y + this.size / 3);
        line(this.x - this.size / 3, this.y + this.size / 3, this.x + this.size / 3, this.y - this.size / 3);
    }
    public move(): void {
        if (!this.stopped) {
            this.x = this.xSpeed + this.x;
            this.y = this.ySpeed + this.y;
        }
    }
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
