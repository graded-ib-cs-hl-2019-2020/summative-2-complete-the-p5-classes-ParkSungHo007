import { Bubble } from "./bubble";

export class Missile {
    private position = createVector(width / 2, height);
    private velocity = createVector();

    public draw() {
        translate(this.position.x, this.position.y);
        rotate(this.velocity.heading());
        rectMode(CENTER);
        rect(0, 0, 60, 10);
        fill("green");
    }
    public shoot(target: Bubble) {
        let finalX = target.getXspeed() * 2 + target.getX();
        let finalY = target.getYspeed() * 2 + target.getY();
        let finalPos = point(finalX, finalY);
        this.velocity = this.velocity.add(finalX / 2, finalY / 2);
        this.position = this.position.add(this.velocity);
    }

}
