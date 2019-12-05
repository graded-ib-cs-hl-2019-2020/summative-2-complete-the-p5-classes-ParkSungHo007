export class Bubble {
    constructor(x, y, size, borderColor) {
        this.xSpeed = random(-1.5, 1.5);
        this.ySpeed = random(-1.5, 1.5);
        this.stopped = false;
        this.color = "#ffffffcc";
        this.x = x;
        this.y = y;
        this.size = size;
        this.borderColor = borderColor;
    }
    getStop() {
        return this.stopped;
    }
    getXspeed() {
        return this.xSpeed;
    }
    getYspeed() {
        return this.ySpeed;
    }
    setXspeed(c) {
        this.xSpeed = c;
    }
    setYspeed(c) {
        this.ySpeed = c;
    }
    setCol(c) { this.color = c; }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    stop() {
        this.stopped = true;
    }
    go() {
        this.stopped = false;
    }
    draw() {
        fill(this.color);
        stroke(this.borderColor);
        ellipse(this.x, this.y, this.size);
    }
    move() {
        if (!this.stopped) {
            this.x = this.xSpeed + this.x;
            this.y = this.ySpeed + this.y;
            this.doBorderBehavior();
        }
    }
    distFromMouse() {
        return dist(this.x, this.y, mouseX, mouseY);
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
//# sourceMappingURL=bubble.js.map