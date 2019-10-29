export class Rocket {

    public position = createVector(width / 2, height);

    public velocity = createVector();
    public acceleration = createVector();
    private maxVel = 1;

    public move(xPos: number, yPos: number): void {
        this.acceleration.x = .05;
        this.acceleration.y = 0;
        let targetVector = createVector(xPos, yPos);
        let vecBetween = targetVector.sub(this.position);
        this.acceleration.rotate(vecBetween.heading());
        if (this.velocity.mag() >= 2) {
            this.position.add(this.velocity);
        } else {
            this.velocity.add(this.acceleration);
            this.position.add(this.velocity);
        }
    }
    public hit(xPos: number, yPos: number): boolean {
        if (this.position.x == xPos && this.position.y == yPos) {
            return true;
        } else { return false; }
    }
    public draw(): void {
        rectMode(CENTER);
        rect(0, 0, 30, 5);
        fill("red");
    }
    public getxpos() {
        return this.position.x;
    }
    public getypos() {
        return this.position.y;
    }
}
