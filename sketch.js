let ground;
let bird;
var bird_img;
var bg_img;
var groundImg

var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  bird_img = loadAnimation("assets/bird_1.png","assets/bird_2.png","assets/bird_3.png","assets/bird_4.png","assets/bird_6.png");
  bg_img = loadImage("assets/bgSky.png");
  groundImg=loadImage("assets/ground.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background("cyan")
  frameRate(80);
 ground=createSprite(width/2,height-100,width,100)
 ground.addImage(groundImg)
 ground.velocityX=-3
 ground.scale=1.5
  bird = createSprite(100,50,30,30);
  bird.addAnimation("bird_flying",bird_img);
  

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(bg_img);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();
 if(ground.x<0){
 ground.x=ground.width/2
 }
 if(keyDown("space")){
  bird.velocityY=-2
 }
 bird.velocityY+=0.05
  drawSprites();
}


