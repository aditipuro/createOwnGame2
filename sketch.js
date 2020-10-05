var fish1img, fish2img, dolphinImg, sharkImg, turtleImg;

function preload()  {
  fish1img = loadImage("images/fishOrange.png"); 
  fish2img = loadImage("images/fishBlue.png");
  dolphinImg = loadImage("images/dolphin.png");
  sharkImg = loadImage("images/shark.png");
  turtleImg = loadImage("images/turtle.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight);

}

function draw() {
  background(255,255,255);  
  spawnCreature();
  drawSprites();
}

function spawnCreature()  {
  if (frameCount%120 === 0) {
    creature = createSprite(0, 350, 20, 20);
    creature.y = random(200, displayHeight - 200);
    var x = Math.round(random(1, 5));
    creature.velocityX = 7;

    switch(x) {
      case 1: creature.addImage(fish1img);
      break;

      case 2: creature.addImage(fish2img);
      break;

      case 3: creature.addImage(dolphinImg);
      break;

      case 4: creature.addImage(sharkImg);
      break;

      case 5: creature.addImage(turtleImg);
      break;

      default: break;
     }
     creature.scale = 0.3;
  }
}