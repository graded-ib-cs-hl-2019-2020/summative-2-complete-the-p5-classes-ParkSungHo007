export class Rocket {
    constructor() {
        this.position = createVector(width / 2, height);
        this.velocity = createVector();
        this.acceleration = createVector();
    }
    static loadRocket() {
        Rocket.img = loadImage("/images/rocket.png");
        rectMode(CENTER);
        imageMode(CENTER);
    }
    move(xPos, yPos) {
        this.acceleration.x = .3;
        this.acceleration.y = 0;
        let targetVector = createVector(xPos, yPos);
        let vecBetween = targetVector.sub(this.position);
        this.acceleration.rotate(vecBetween.heading());
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        if (this.velocity.mag() > 7) {
            this.velocity.setMag(5);
        }
    }
    hit(xPos, yPos) {
        if (this.position.x == xPos && this.position.y == yPos) {
            return true;
        }
        else {
            return false;
        }
    }
    draw() {
        translate(this.position.x, this.position.y);
        rotate(this.velocity.heading());
        image(Rocket.img, 0, 0, 60, 20);
    }
    getxpos() {
        return this.position.x;
    }
    getypos() {
        return this.position.y;
    }
}
//# sourceMappingURL=rocket.js.map