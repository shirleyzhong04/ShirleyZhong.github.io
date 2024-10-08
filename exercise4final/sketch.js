let properfishArr = new Array(15);

function setup() {

  createCanvas(800, 600);
  background(74, 189, 255);
  rectMode(CENTER);
  angleMode(DEGREES);
  noStroke();
  let col;
  for (let i = 0; i < properfishArr.length; i++) {
    col = color(random(50, 100));
    properfishArr[i] = new SZProperFish(color('#8591B5'), 300, 300, 200, random(-1,1));
  }

}

function draw() {
  background(74, 189, 255);
  seaweed();
  for (let i = 0; i < properfishArr.length; i++) {
    properfishArr[i].display();
    properfishArr[i].wiggle();
    properfishArr[i].update();
  }
}

function mousePressed() {

  for (let i = 0; i < properfishArr.length; i++) {
      properfishArr[i].newDirection();
  }

}

function keyPressed() {

  for (let i = 0; i < properfishArr.length; i++) {
    if (key == ' ')
    properfishArr[i].jump();
  }

}

function seaweed() {

  fill(color('#8CB296'));
  rect(700, 500, 10, 300);
  rect(500, 500, 10, 700);
  rect(100, 500, 10, 600);
  rect(50, 500, 10, 200);

}