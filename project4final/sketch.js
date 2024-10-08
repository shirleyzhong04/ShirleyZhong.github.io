
// This contains the use of both Scenemanager and P5.play
// Documentation and additional examples of these libraries can be found at:
//https://github.com/mveteanu/p5.SceneManager
//http://molleindustria.github.io/p5.play/


let image1_up, image2_over;
let snd1,snd2;
// var duration;
// var  slideWidth = 500;

// global manager object
var mgr;

// define your p5.play sprites that you want to use in more that 1 scene.
var kitty;

function preload() {
    // sound should be loaded so its available for all places.
   snd1 = loadSound("assets/backgroundmusic.mp3");
   snd2 = loadSound("assets/catpurr.mp3");
   bg = loadImage('assets/splash.png');
   bg2 = loadImage('assets/cat.png');
   bg3 = loadImage('assets/mainmain.png');
   
}

function setup() {
    createCanvas(600, 500);
    //console.log(hell);
    mgr = new SceneManager();

    kitty = createSprite(0, 0);
    kitty.addAnimation("sleep", "assets/sleep0001.png", "assets/sleep0005.png");
    kitty.addAnimation("pet", "assets/pet0001.png",  "assets/pet0006.png");
     // make the sprite invisible until you need it.
    kitty.visible = false;

    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (splash);
    mgr.addScene (prepresplash);
    mgr.addScene (presplash);
    mgr.addScene (main);
    mgr.addScene (help);
    mgr.showNextScene();

}

function draw()
{

    // passthe current draw function into the SceneManager
    mgr.draw();
}

function mousePressed()
{
   // pass the mousePressed message into the SceneManager
  mgr.mousePressed();
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( splash );
            break;
        case '2':
            mgr.showScene( main );
            break;
        case '3':
            mgr.showScene( help );
            break;
        case '4':
            mgr.showScene( presplash );
            break;
        case '5':
            mgr.showScene( prepresplash );
            break;
        case 'h':
            mgr.showScene( help );
            break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}
