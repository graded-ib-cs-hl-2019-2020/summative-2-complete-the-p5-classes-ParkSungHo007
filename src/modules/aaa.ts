import { Rocket } from "./rocket.js";
export class AAA {
    public draw(a: Rocket): void {
        rect(10, 60, width / 2, height);
        fill("black");
        stroke("black");
        angleMode(DEGREES);
        rotate(a.velocity.heading() - 90);
    }
    public fire(): void {

    }
}
