export class Ball {
    constructor(x, y, size, color = "red", borderColor = "black") {
        this.stopped = false;
        this.audio = document.getElementById("memez");
        this.xSpeed = random(-3, 3);
        this.ySpeed = random(-3, 3);
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.borderColor = borderColor;
    }
    setXspeed(a) {
        this.xSpeed = a;
    }
    setYspeed(a) {
        this.ySpeed = a;
    }
    getXspeed() {
        return this.xSpeed;
    }
    getYspeed() {
        return this.ySpeed;
    }
    getStop() {
        return this.stopped;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    getSize() {
        return this.size;
    }
    getCol() {
        return this.color;
    }
    getBorcol() {
        return this.color;
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
    collison(ball) {
        let distance = dist(this.x, this.y, ball.getX(), ball.getY());
        let combR = this.size / 2 + ball.size / 2;
        if (distance <= combR) {
            let distanceBefore = dist(this.x - this.xSpeed, this.y - this.ySpeed, ball.x - ball.xSpeed, ball.y - ball.ySpeed);
            let distanceChange = distanceBefore - distance;
            let overlap = combR - distance;
            let prop = overlap / distanceChange;
            this.x = this.x - this.xSpeed * prop;
            this.y = this.y - this.ySpeed * prop;
            ball.x = ball.x - ball.getXspeed() * prop;
            ball.y = ball.y - ball.getYspeed() * prop;
            let vix = this.xSpeed;
            let viy = this.ySpeed;
            let vix2 = ball.getXspeed();
            let viy2 = ball.getYspeed();
            this.xSpeed = (this.size - ball.getSize()) / (this.size + ball.getSize()) * vix + (2 * ball.getSize()) / (this.size + ball.getSize()) * vix2;
            this.ySpeed = (this.size - ball.getSize()) / (this.size + ball.getSize()) * viy + (2 * ball.getSize()) / (this.size + ball.getSize()) * viy2;
            ball.xSpeed = (ball.size - this.size) / (ball.size + this.size) * vix2 + (2 * this.size) / (this.size + ball.size) * vix;
            ball.ySpeed = (ball.size - this.size) / (ball.size + this.size) * viy2 + (2 * this.size) / (this.size + ball.size) * viy;
        }
    }
    distFromMouse() {
        return dist(this.x, this.y, mouseX, mouseY);
    }
    touchingMouse() {
        return this.distFromMouse() < this.size / 2;
    }
    doBorderBehavior() {
        this.audio.play();
        if (this.x < this.size / 2) {
            this.x = this.size / 2;
            this.xSpeed = -this.xSpeed;
        }
        else if (this.x > width - this.size / 2) {
            this.x = width - this.size / 2;
            this.xSpeed = -this.xSpeed;
        }
        if (this.y < this.size / 2) {
            this.y = this.size / 2;
            this.ySpeed = -this.ySpeed;
        }
        else if (this.y > height - this.size / 2) {
            this.ySpeed = -this.ySpeed;
            this.y = height - this.size / 2;
        }
    }
}
//# sourceMappingURL=ball.js.map