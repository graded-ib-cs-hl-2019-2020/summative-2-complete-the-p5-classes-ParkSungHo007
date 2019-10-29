export class Rocket {
    public position = createVector(width / 2, height);
    public velocity = createVector(0, -1);
    public acceleration = createVector();

    public force(force: number): void {
        this.acceleration.add(force);
    }
    public move(): void {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }
    public draw(): void {
        translate(this.position.x, this.position.y);
        rotate(this.velocity.heading());
        rectMode(CENTER);
        rect(0, 0, 30, 5);
        fill("black");
    }
}
