import { Ball } from "./modules/ball.js";
import { Bubble } from "./modules/bubble.js";
import { Rocket } from "./modules/rocket.js";
import { Snowflake } from "./modules/snowflakes.js";
let rockets: Rocket[] = [];
let balls: Ball[] = [];
let snowflakes: Snowflake[] = [];
let bubbles: Bubble[] = [];
let clickedIndex = -1;
function setup() {
    let numRockets = 3;
    let numBubbles = 10;
    let numBalls = 10;
    let numFlakes = 10;
    createCanvas(1000, 800);
    for (let i = 0; i < rockets.length; i++) {
        rockets[i] = new Rocket();
    }
    for (let i = 0; i < numBalls; i++) {
        balls[i] = new Ball(random(25, width - 25), random(25, height - 25), random(10, 50), getCol());
    }
    for (let i = 0; i < numBubbles; i++) {
        bubbles[i] = new Bubble(random(25, width - 25), random(25, height - 25), random(10, 50), getCol());
    }
    for (let i = 0; i < numFlakes; i++) {
        snowflakes[i] = new Snowflake(random(25, width - 25), random(25, height - 25), random(10, 50));
    }    //  do not edit the below lines
}
function getCol(): string {// color id is 6 letters with # in front.
    // There are 16 letters possible for all the different possibilites 0 ~ 9 and A~ F
    let letters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let colSymbol = "#"; for (let i = 0; i < 6; i++) {
        colSymbol = colSymbol + letters[Math.floor(Math.random() * 16)];
    }
    return colSymbol;
}
function draw() {
    background("skyblue");
    for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
        if (balls[i].touchingMouse() && mouseIsPressed && !balls[i].stopped) {
            balls[i].stop();
        } else if (balls[i].touchingMouse() && mouseIsPressed && balls[i].stopped) {
            balls[i].stopped = false;
            balls[i].move();
        } else { balls[i].move(); }
    }
    for (let c = 0; c < bubbles.length; c++) {
        bubbles[c].draw();
        bubbles[c].move();
    }
    for (let s = 0; s < snowflakes.length; s++) {
        snowflakes[s].draw();
        snowflakes[s].move();
    }
    for (let r = 0; r < rockets.length; r++) {
        rockets[r].draw();
        rockets[r].move();
    }
}
window.draw = draw;
window.setup = setup;
function mouseReleased() {
    console.log("you released the mosue");
}
// window.mousePressed = mousePressed;
window.mouseReleased = mouseReleased;
