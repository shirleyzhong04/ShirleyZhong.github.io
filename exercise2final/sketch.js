let cx, cy;
let bgc;
let dog;
let cat;
let quokka;
let gridSize;
let f;
let f1;
let current;

function setup() {
  createCanvas(600, 600);
  background(255);
  dog = loadImage("assets/dog.png");
  cat = loadImage("assets/cat.png");
  quokka = loadImage("assets/quokka.png");
  f = loadFont('assets/Pecita.otf');
  f1 = loadFont('assets/flicker DEMO.otf');
  current = dog;
  cx = width/2;
  cy = height/2;
  bgc = color (0, 10);
  gridSize = 50;
}  

function draw() {
  fill(bgc);
  rect(0,0,width,height);
  if (keyChoice) {
     keyChoice();
  }
  else {
    keyPressed();
  }
}

function keyChoice() {
 switch(key) {
 case 'a':
   cx+= -gridSize;
   image(current,cx,cy,gridSize,gridSize);
   break;
 case 'w':
   cy+= -gridSize; 
   image(current,cx,cy,gridSize,gridSize);
   break;
 case 'd':
   cx+= gridSize;
   image(current,cx,cy,gridSize,gridSize);
   break;
 case 's':
   cy+= gridSize;
   image(current,cx,cy,gridSize,gridSize);
   break;
 case 'm':
    fill('#FF9FE6');
    textFont(f);
    textSize(20);
    text("meow",cx,cy,200);
    break;
case 'n':
    fill('#97D6FF');
    textFont(f);
    textSize(100);
    text("WOOF",cx,cy,200);
break;
 default:
   break;
 }
 key = "";
 }

 function keyPressed() {
  if (key == 'c' || key == 'C') {
    current = cat;
  }
  else if (key == 'x' || key == 'X') {
    current = dog;
  }
 }

 function mouseClicked() {
  imageMode(CENTER)
  image(quokka, mouseX, mouseY, 200, 200);
  fill('#BC90FF');
  textFont(f1);
  textSize(100);
  text("QUOKKA!!!!", mouseX - 200, mouseY + 200);
 }