const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var block10,block11,block12, block13, block14;
var ground1, ground2, ground3;
var score;
var hour, response, responseJSON, dateTime;
var block15, block16, block17, block18, block19, block20, block21;
var block22;
var sling;

var ball;
var img;

function preload(){
  img = loadImage("polygon.png");

}

function setup() {
  createCanvas(1500,600);
  engine = Engine.create();
    world = engine.world;


  block1 = new Block1(600,260,30,40);
  block2 = new Block1(570,260,30,40);
  block3 = new Block1(540,260,30,40);
  block4 = new Block1(630,260,30,40);
  block5 = new Block1(660,260,30,40);
  block6 = new Block2(585,220,30,40);
  block7 = new Block2(555,220,30,40);
  block8 = new Block2(615,220,30,40);
  block9 = new Block2(645,220,30,40);
  block10 = new Block3(600,170,30,40);
  block11 = new Block3(570,180,30,40);
  block12 = new Block3(630,180,30,40);
  block13 = new Block1(600,140,30,40);

  block14 = new Block1(900,170,30,40);
  block15 = new Block1(930,170,30,40);
  block16 = new Block1(870,170,30,40);
  block17 = new Block1(840,170,30,40);
  block18 = new Block1(960,170,30,40);
  block19 = new Block2(900,140,30,40);
  block20 = new Block2(930,140,30,40);
  block21 = new Block2(870,140,30,40);
  block22 = new Block3(900,110,30,40);
  ground1 = new Ground(600,285,200,10);
  ground2 = new Ground(900,195,200,10);
  ground3 = new Ground(750, 600, 1500, 10)

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  sling = new Sling(this.ball,{x:150, y:160});

  score = 0;
}

async function getTime() {
  response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  
  responseJSON = await response.json();
  
  dateTime = responseJSON.datetime
  hour = dateTime.slice(11,13)
}

function draw() {
  if(hour<= 06 && hour>=18){
    background("black")
  }

  else{
    background("white")
  }
  Engine.update(engine);

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();

  ground1.display();
  ground2.display();
  ground3.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();

  imageMode(CENTER);
  image(img,ball.position.x,ball.position.y,40,40);

  sling.display();

  fill("blue")
  stroke("blue")
  text("Press SPACE to get another chance to play!",500,500)
  text("Score:"+score,750,40)
  
}


function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
    sling.attach(ball)
  }
}

