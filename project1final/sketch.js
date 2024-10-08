let penSize = 1;
let penType = 0;
let myPicker;
let currentColor;
let currentBackground;
let quokka;
let pizza;
let button;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  myPicker = createColorPicker("green");
  quokka = loadImage("assets/quokka.png");
  pizza = loadImage("assets/pizza.png");
  button = createButton("don't click me");
  button.mousePressed(() => {
    szPizzaParty();
  })
}

function draw() {
  currentColor = (myPicker.color());
  if (mouseIsPressed) {
    if (penType == 0) {
      ellipse(mouseX, mouseY, penSize, penSize);
      stroke(currentColor);
    }
    if (penType == 1) {
      imageMode(CENTER)
      image(quokka, mouseX, mouseY, penSize + 35, penSize + 35);
    }
  }
}

function szPizzaParty() {
  r = random(windowWidth);
  r1 = random(windowHeight);
  image(pizza, r, r1, 100, 100);
}

function szRandomBackground() {
  var a = random(150, 240);
  var b = random(150, 240);
  var c = random(150, 240);
  background(a, b, c);  
}

//pen & background options
function keyTyped() {

//background
  
  //clear
    if (key == 'c') {
    currentBackground = background(255);
  }
  
  //random
   if (key == 'r') {
    currentBackground = szRandomBackground();
  }
  
  //premade options
    //light blue
  if (key == '1') {
    currentBackground = background('#b0e3ff');
  }
    //light green
  if (key == '2') {
    currentBackground = background('#94ffa0');
  }
  //light purple
  if (key == '3') {
    currentBackground = background('#e6b0ff');
  }
    //light pink
  if (key == '4') {
    currentBackground = background('#ffb0da');
  }
  if (key == 'w'); {
    penType = 0;
  }
  if (key =='q') {
    penType = 1;
  }
}

//pen size
function keyPressed() {
    if (keyCode == LEFT_ARROW && penSize > 1) {
    penSize -= 1;
  }
  
  if (keyCode == RIGHT_ARROW) {
        penSize += 1;
  }
    
  strokeWeight(penSize);
}