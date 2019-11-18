
import { Ball } from "./modules/ball.js";
import { Bubble } from "./modules/bubble.js";
import { Particle } from "./modules/particle.js";
import { Rocket } from "./modules/rocket.js";
import { Snowflake } from "./modules/snowflakes.js";
let rockets: Rocket[] = [];
let particles: Particle[] = [];
let balls: Ball[] = [];
let snowflakes: Snowflake[] = [];
let bubbles: Bubble[] = [];
let clickedIndex = -1;
let target: Bubble;
let targetIndex: number;
let missilestarget: Bubble;
let stop: boolean = false;
let rocket;
let audio = document.getElementById("gojaEffect") as HTMLAudioElement;

function setup() {
    let aaaNum = 1;
    let numMissiles = 1;
    let numRockets = 1;
    let numBubbles = 10;
    let numBalls = 10;
    let numFlakes = 10;
    let numParticle = 20;
    Rocket.loadRocket();

    createCanvas(1500, 800);
    for (let i = 0; i < numRockets; i++) {
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
    }
    targetIndex = Math.floor(random(0, numBubbles));
    target = bubbles[targetIndex];
    target.setCol("red");
    target.setXspeed(4);
    target.setYspeed(4);
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
        } else {
            balls[i].move();
        }
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
        rockets[r].move(target.getX(), target.getY());
        if (dist(rockets[r].position.x, rockets[r].position.y, target.getX(), target.getY()) <= 40) {
            audio.play();
            for (let i = 0; i < 20; i++) {
                angleMode(DEGREES);
                // tslint:disable-next-line: max-line-length
                particles[i] = new Particle((target.getX() + (6 * sin(18 * i))), (target.getY() + (6 * cos(18 * i))), 5, 5);
            }
            rockets.splice(r, 1);
            bubbles.splice(targetIndex, 1);
        }
    }
    for (let i = 0; i < particles.length; i++) {
        particles[i].draw();
        particles[i].explode(i);
    }
}
function mousePressed() {
    if (mouseIsPressed && !stop) {
        for (let i = 0; i < 10; i++) {
            balls[i].stop();
            bubbles[i].stop();
            snowflakes[i].stop();
            stop = true;
        }
    } else if (mouseIsPressed && stop) {
        for (let i = 0; i < 10; i++) {
            balls[i].go();
            bubbles[i].go();
            snowflakes[i].go();
            balls[i].move();
            bubbles[i].move();
            snowflakes[i].move();
            stop = false;
        }
    }
}
window.draw = draw;
window.setup = setup;
window.mousePressed = mousePressed;
window.mouseReleased = mouseReleased;
