export class Rocket {

    public position = createVector(width / 2, height);

    public velocity = createVector();
    public acceleration = createVector();
    private maxVel = 1;

    public move(xPos: number, yPos: number): void {
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
    public hit(xPos: number, yPos: number): boolean {
        if (this.position.x == xPos && this.position.y == yPos) {
            return true;
        } else { return false; }
    }
    public draw(): void {
        translate(this.position.x, this.position.y);
        rotate(this.velocity.heading());
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
