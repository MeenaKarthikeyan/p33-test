const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg, snow ;



function preload() {
  backgroundImg=loadImage("snow3.jpg")
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  snow = new Snow(400, 350);
}

function draw() {
  if(backgroundImg)
  background(backgroundImg);
  
  snow.display();
  drawSprites();
}