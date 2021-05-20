const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg, snow ;

var snowParticles = [];

function preload() {
  backgroundImg=loadImage("snow3.jpg")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;
  //createSprite(400, 200, 50, 50);
  snow = new Snow(400, 350, 10);
  Engine.run(engine)
}

function draw() {
  //if(backgroundImg)
  background(backgroundImg);
  if (frameCount%10===0){
  
    snowParticles.push(new Snow(random(10,770),10,10));
  }
  for (var j = 0; j < snowParticles.length; j++) {
    snowParticles[j].display();
  }
 
  drawSprites();
}
