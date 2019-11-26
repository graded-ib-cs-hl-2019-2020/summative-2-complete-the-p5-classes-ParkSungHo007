import { AUDIO } from "p5";

export class Ball {
  public stopped: boolean = false;
  public audio = document.getElementById("memez") as HTMLAudioElement;
  private x: number;
  private y: number;
  private size: number;
  private xSpeed: number = random(-3, 3);
  private ySpeed: number = random(-3, 3);
  private color: string;
  private borderColor: string;
  constructor(x: number, y: number, size: number, color = "red", borderColor = "black") {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.borderColor = borderColor;
  }
  public setXspeed(a: number): void {
    this.xSpeed = a;
  }
  public setYspeed(a: number): void {
    this.ySpeed = a;
  }
  public getXspeed(): number {
    return this.xSpeed;
  }
  public getYspeed(): number {
    return this.ySpeed;
  }
  public getStop(): boolean {
    return this.stopped;
  }
  public getX(): number {
    return this.x;
  }
  public getY(): number {
    return this.y;
  }
  public getSize(): number {
    return this.size;
  }
  public getCol(): string {
    return this.color;
  }
  public getBorcol(): string {
    return this.color;
  }
  public stop() {
    this.stopped = true;
  }
  public go() {
    this.stopped = false;
  }
  public draw(): void {
    fill(this.color);
    stroke(this.borderColor);
    ellipse(this.x, this.y, this.size);
  }
  public move(): void {
    if (!this.stopped) {
      this.x = this.xSpeed + this.x;
      this.y = this.ySpeed + this.y;
      this.doBorderBehavior();
    }
  }
  public collison(ball: Ball): void {
    let distance = dist(this.x, this.y, ball.getX(), ball.getY());
    let combR = this.size / 2 + ball.size / 2; // distance between two balls if they are to collide
    if (distance <= combR) {
      let distanceBefore = dist(this.x - this.xSpeed, this.y - this.ySpeed, ball.x - ball.xSpeed, ball.y - ball.ySpeed);
      let distanceChange = distanceBefore - distance;
      let overlap = combR - distance;
      let prop = overlap / distanceChange;
      this.x = this.x - this.xSpeed * prop; // moves balls proportinally before collison
      this.y = this.y - this.ySpeed * prop;
      ball.x = ball.x - ball.getXspeed() * prop;
      ball.y = ball.y - ball.getYspeed() * prop;
      let vix = this.xSpeed;
      let viy = this.ySpeed;
      let vix2 = ball.getXspeed();
      let viy2 = ball.getYspeed();
      // tslint:disable-next-line: max-line-length
      this.xSpeed = (this.size - ball.getSize()) / (this.size + ball.getSize()) * vix + (2 * ball.getSize()) / (this.size + ball.getSize()) * vix2;
      // tslint:disable-next-line: max-line-length
      this.ySpeed = (this.size - ball.getSize()) / (this.size + ball.getSize()) * viy + (2 * ball.getSize()) / (this.size + ball.getSize()) * viy2;
      // tslint:disable-next-line: max-line-length
      ball.xSpeed = (ball.size - this.size) / (ball.size + this.size) * vix2 + (2 * this.size) / (this.size + ball.size) * vix;
      // tslint:disable-next-line: max-line-length
      ball.ySpeed = (ball.size - this.size) / (ball.size + this.size) * viy2 + (2 * this.size) / (this.size + ball.size) * viy;
    }
  }
  public distFromMouse(): number {
    return dist(this.x, this.y, mouseX, mouseY);
  }
  public touchingMouse(): boolean {
    return this.distFromMouse() < this.size / 2;
  }
  /* This border behavior implements a bounce */
  public doBorderBehavior() {
    this.audio.play();
    if (this.x < this.size / 2) {
      this.x = this.size / 2;
      this.xSpeed = -this.xSpeed;
    } else if (this.x > width - this.size / 2) {
      this.x = width - this.size / 2;
      this.xSpeed = -this.xSpeed;
    }
    if (this.y < this.size / 2) {
      this.y = this.size / 2;
      this.ySpeed = -this.ySpeed;
    } else if (this.y > height - this.size / 2) {
      this.ySpeed = -this.ySpeed;
      this.y = height - this.size / 2;
    }
  }
}
