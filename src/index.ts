/* Programming Summative 2

    This summative comes in 2 parts.

    Part 1 - Programming
    ---------------------
    Your PRIMARY goal is to get the program running. You can find missing elements by looking for comments marked
    TODO REQUIRED. If they are all fixed, the program should run with 10 red balls, 10 white snowflakes, and
    10 transluscent bubbles.

    Your SECONDARY goal is to implement the optional TODO requirements and any other fun things you think of.

    Part 2 - Documenting
    ------------------------
    Create UML diagrams for all three of these classes, and a flowchart that shows the basic program flow of
    index.ts. You can do these by hand (be neat!) or using an online tool - draw.io and lucidchart are both nice
    online offerings.
*/
import { Ball } from "./modules/ball.js";
import { Bubble } from "./modules/bubble.js";
import { Snowflake } from "./modules/snowflakes.js";
// tslint:disable-next-line: no-var-requires
let Calculess = require("calculess");
let Calc = Calculess.prototype;
let balls: Ball[] = [];
let snowflakes: Snowflake[] = [];
let bubbles: Bubble[] = [];
let clickedIndex = -1;
function setup() {
    let numBubbles = 10;
    let numBalls = 10;
    let numFlakes = 10;
    createCanvas(1000, 1000);
    for (let i = 0; i < numBalls; i++) {
        balls[i] = new Ball(random(25, width - 25), random(25, height - 25), random(10, 50), getCol());
    }
    for (let i = 0; i < numBubbles; i++) {
        bubbles[i] = new Bubble(random(25, width - 25), random(25, height - 25), random(10, 50), getCol(), getCol());
    }
    for (let i = 0; i < numFlakes; i++) {
        snowflakes[i] = new Snowflake(random(25, width - 25), random(25, height - 25), random(10, 50));
    }
    /* TODO OPTIONAL - add a function mousePressed() that either stops or starts objects from moving
       if the mouse is pressed while it is touching them. So you could use this (if careful!) to stop all of the
       objects from moving then start them back up again. The Ball class has some helper functions that will
       help you with this, but you'll need to add them to the other classes.
    */

    // do not edit the below lines
}
function getCol(): string {
    // color id is 6 letters with # in front. There are 16 letters possible for all the different possibilites
    // 0 ~ 9 and A~ F
    let letters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let colSymbol = "#";
    for (let i = 0; i < 6; i++) {
        colSymbol = colSymbol + letters[Math.floor(Math.random() * 16)];
    }
    return colSymbol;
}
function draw() {
    background("skyblue");
    for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].move();
    }
    for (let c = 0; c < bubbles.length; c++) {
        bubbles[c].draw();
        bubbles[c].move();
    }
    for (let s = 0; s < snowflakes.length; s++) {
        snowflakes[s].draw();
        snowflakes[s].move();
    }
}
window.draw = draw;
window.setup = setup;
window.mousePressed = mousePressed;
window.mouseReleased = mouseReleased;
