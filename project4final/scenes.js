
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

function splash()  {
  var textX;
  var textY;
  var loy= 0;  // exists as data saved when in the splash scene
  let btnevent1 =false;
  let btnevent2 =false;

  // scene1.setup
  this.setup = function() {
    console.log("We are at setup for splash");
    // do all stuff you want to initialize things,
    // as this it need to be called only once.
    outputVolume(.15);  // turn down the volume.
  }

  // enter() will be called each time SceneManager switches
  // to this scene
  this.enter = function()  {
      console.log("We are at entering splash");
      background("grey");
      textAlign(CENTER);
      textSize(30);
      noStroke();

      // reset or disable the other scenes and their stuff
      // turn off the other scene stuff
      snd1.stop();
      // make sure ghost is gone from this scene
      kitty.visible = false;
    

  }


  this.draw = function()
  {
    background(bg);
    // this is the draw function for all p5.play commands
  
 
                           // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
    btnevent1 = checkButtonPress("Help",width-150,height-70,100,40,color(220,100,100),color(100),color(250));  
    if (btnevent1) { // help
      btnevent1 = false;
      this.sceneManager.showScene( help );
    }
                          // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
    btnevent2 = checkButtonPress("Start",width/2-60,height-140,120,40,color(120,180,100),color(100),color(250));
    if (btnevent2) {   // main or next scene
      btnevent2 = false;
       playshortsound();
       this.sceneManager.showScene( main );
    }

    fill("black");
    textAlign(LEFT);
    textSize(70);
    text( "Whiskers" , 170,100);

  }

  this.keyPressed = function() {
      fill(0,255,0);
      text(keyCode, textX, textY += 10);

      if ( textY > height )  {
          textX += 20;
          textY = 0;
      }
  }

  this.mousePressed = function() {

   
  }
}


function prepresplash() {

  let btnevent1;

  this.setup = function() {
    console.log("We are at setup for splash");
    // do all stuff you want to initialize things,
    // as this it need to be called only once.
    outputVolume(.15);  // turn down the volume.
  }

  // enter() will be called each time SceneManager switches
  // to this scene
  this.enter = function()  {
      console.log("We are at entering splash");
      background("grey");
      textAlign(CENTER);
      textSize(30);
      noStroke();

      // reset or disable the other scenes and their stuff
      // turn off the other scene stuff
      snd1.stop();
      // make sure ghost is gone from this scene
      kitty.visible = false;

  }

  this.draw = function() {
    background(bg);
    // this is the draw function for all p5.play commands
    // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
    btnevent1 = checkButtonPress("Help",width-150,height-70,100,40,color(220,100,100),color(100),color(250));
    if (btnevent1) { // help
      btnevent1 = false;
      this.sceneManager.showScene( help );
    }
    
  }

}

function presplash() {

  this.setup = function() {
    console.log("We are at setup for splash");
    // do all stuff you want to initialize things,
    // as this it need to be called only once.
    outputVolume(.15);  // turn down the volume.
  }

  // enter() will be called each time SceneManager switches
  // to this scene
  this.enter = function()  {
      console.log("We are at entering splash");
      background("grey");
      textAlign(CENTER);
      textSize(30);
      noStroke();

      // reset or disable the other scenes and their stuff
      // turn off the other scene stuff
      snd1.stop();
      // make sure ghost is gone from this scene
      kitty.visible = false;
    
  }

  this.draw = function() {
    background(bg);
    // this is the draw function for all p5.play commands
    
  }

}

////////////////////////////// 1 /////////////////


///////////////////////  2  ////////////////////////

function main()  {
   this.y = 0;
    // var y = 0;
    this.lox = 50;
    // var lox = 50;

   this.loy = 120;
    // var loy = 120;

   let btnevent1 = false;

  this.setup = function() {
      console.log("We are at setup for main");
      // make sure ghost is gone from this scene
  }

  this.enter = function()
  {
    console.log("We are at entering main");
    kitty.position.x = 300;
    kitty.position.y = 270;
    //kitty.position.x =  width/2;
    //kitty.position.y =  height/2;
    kitty.visible = true;
    kitty.changeAnimation("sleep");


    if ( !snd1.isPlaying() ) {
      snd1.play();
   }


  }




    this.draw = function() {
      background(bg3);

    
    kitty.changeAnimation("sleep");

     if ( kitty.mouse.hovering() ) {
        console.log("over");
        kitty.changeAnimation("pet");
        kitty.position.x = 300;
        kitty.position.y = 270;
        snd2.play();  // lots of fast sound playing
     }
      
     if (kitty.mouse.pressing()) {
           if ( !snd2.isPlaying() ) {
              snd2.play();
          } else {
              snd2.pause();

          }

     }  


    // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
    btnevent1 = checkButtonPress("Help",width-150,height-70,100,40,color(220,100,100),color(100),color(250));  
    if (btnevent1) { // help
      btnevent1 = false;
      this.sceneManager.showScene( help );
    }


    }  //end

    this.mousePressed = function()
    {

    }


}



////////////////////////////// 3 /////////////////

function help() {

    this.setup = function()  {
        console.log("We are at setup for help");
        // access a different scene using the SceneManager

    }

    this.enter = function()
    {
     console.log("We are at entering for help");
     kitty.visible = true;
     kitty.position.x = 300;
     kitty.position.y = 270;


    }

    this.draw = function() {
      background(bg2);
      // this is the draw function for all p5.play commands
     
      fill("black");
      textAlign(LEFT);
      textSize(25);
      text( "Hi, this is Whiskers. \nDon't wake me up. But I like to be pet." , 90,70);
      text( "Click on me to go back to the main page.\nClick and roll over me to pet me.", 30, 420);

      

      if ( kitty.mouse.hovering() ) {
        console.log("over");
        kitty.changeAnimation("pet");
        // kitty.position.x += random(-4,4);
        // kitty.position.y += random(-2,2);
      
     }  else {

      kitty.changeAnimation("sleep");


     }
      

     if (kitty.mouse.pressing()) {
           if ( !snd2.isPlaying() ) {
              snd2.play();
          } else {
              snd2.pause();

          }

       this.sceneManager.showScene( splash );

     }  



        
    }

   

}


function checkButtonPress(str,bx,by,boxW,boxH,upcolor,ovcolor,dncolor) {

  let btnc = "";
  let btnstate =false;

  // Test if the cursor is over the box
  if ( mouseX > bx - boxW &&
       mouseX < bx + boxW &&
       mouseY > by - boxH &&
       mouseY < by + boxH ) {
       overBox = true;

    if (!mouseIsPressed) {
      stroke(255);
      btnc = ovcolor;
      btnstate = false;
    } else {
      console.log(str + " pressed");
      stroke(255);
      btnc = dncolor;
      btnstate = true;
    }

  } else {
    stroke(255);
    btnc = upcolor;
    overBox = false;
  }

  push();
  translate(bx,by);
  fill(btnc);
  rect(0, 0, boxW, boxH,10); // draw the box

  fill(20);
  noStroke();
  textSize(20);
  textAlign(CENTER);
  text (str,boxW/2,28);

    pop();

    return btnstate;

}



function playshortsound() {
  if ( !snd2.isPlaying() ) {
    snd2.play();
  } else {
     snd2.stop();
 }


}