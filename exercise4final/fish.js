class SZProperFish {

spdx;
spdy;
spdrot;
counter;

  constructor(lk,llx,lly,lrot,lsc) {

    this.k = lk;
    this.lx = llx;
    this.ly = lly;
    this.rot = lrot;
    this.sc = lsc;
    this.spdx = random(-3, 3);
    this.spdy = random(-3, 3);
    this.spdrot = random(-1, 1);
    this.counter = 0;

  }
  
  display() {

    push();
  
    translate(this.lx,this.ly);
    rotate(this.rot);
    scale(this.sc);
    this.hat(color('#936C35'), -30, -70);
    this.leg(color('#FFBEF9'), 50, 100);
    this.leg(color('#FFBEF9'), -15, 100);
    this.body(this.k);
    this.eye1(255, 0, 0, 0);
    this.eye1(255, 0, -60, 0);
    
    pop();

  }

  wiggle() {

    this.lx+=random(-1,1);
    this.ly+=random(-1,1);
    
  }

  jump() {

    this.lx = random(50,width-50);
    this.ly = random(50,height);
    
  }

  update() {

  if (this.lx < 0) {
    this.spdx = -this.spdx;
  }
  if (this.lx > width) {
    this.spdx = -this.spdx;
  }
  if (this.ly < 0) {
    this.spdy = -this.spdy;
  }
  if (this.ly > width) {
    this.spdy = -this.spdy;
  }
    this.lx += this.spdx;
    this.ly += this.spdy;
    this.rot += this.spdrot;

  }

  // body of fish
  body(k) {

    fill(k);
    ellipse(0, 0, 300, 130);
    triangle(0, 0, 200, -75, 200, 75);

  }

  // eyes of fish
  eye1(k, k2, lx, ly) {

    fill(k);
    ellipse(lx-30, ly-50, 50, 50);
    fill(k2);
    ellipse(lx-40, ly-50, 20, 20);

  } 
  
  // fish hat
  hat(k, lx, ly) {

    fill(k);
    rect(lx, ly, 100, 30, 40);
    rect(lx, ly-30, 70, 80, 30);

  }

  // fish legs (the radioactivity doing its job)
  leg(k, lx, ly) {

  fill(k);
  rect(lx, ly, 20, 100, 10);
  ellipse(lx-15, ly+40, 50, 30);

}

  // changes direction fish are going
  newDirection() {
    this.spdx = random(-3,3);
    this.spdy = random(-3,3);
    this.k = color(255,0,0);
  }

  // flattens fish
  newRotation() {
    this.rot = this.counter;
  }
      
} 