export class Snowflake {
    constructor(x, y, size) {
        this.stopped = false;
        this.color = "white";
        this.x = x;
        this.y = y;
        this.size = size;
        this.xSpeed = random(-1, 1);
        this.ySpeed = random(0.1, 0.5);
    }
    stop() {
        this.stopped = true;
    }
    getStop() {
        return this.stopped;
    }
    go() {
        this.stopped = false;
    }
    draw() {
        stroke(this.color);
        line(this.x, this.y + this.size / 2, this.x, this.y - this.size / 2);
        line(this.x + this.size / 2, this.y, this.x - this.size / 2, this.y);
        line(this.x - this.size / 3, this.y - this.size / 3, this.x + this.size / 3, this.y + this.size / 3);
        line(this.x - this.size / 3, this.y + this.size / 3, this.x + this.size / 3, this.y - this.size / 3);
    }
    move() {
        if (!this.stopped) {
            this.x = this.xSpeed + this.x;
            this.y = this.ySpeed + this.y;
        }
    }
    doBorderBehavior() {
        if (this.x < -this.size / 2) {
            this.x = width + this.size / 2;
        }
        else if (this.x > width + this.size / 2) {
            this.x = -this.size / 2;
        }
        if (this.y < -this.size / 2) {
            this.y = height + this.size / 2;
        }
        else if (this.y > height + this.size / 2) {
            this.y = -this.size / 2;
        }
    }
}
//# sourceMappingURL=snowflakes.js.map