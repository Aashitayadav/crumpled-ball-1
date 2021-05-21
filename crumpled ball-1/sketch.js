
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world

function preload()
{
	
}

function setup() {
	createCanvas(1200,400);
	
  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground = new Ground(600,height,1200,20)
	
	
	
	Block1 = new Block(1000,320,200,20);
    Block2 = new Block(1100,380,20,100);
	Block3 = new Block(500,380,20,100);
	Paper1 = new Paper(100,100,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  

  Block1.display();
  Block2.display();
  Block3.display();
  Paper1.display();
}
function keyPressed(){
if(KEYCode===UP_ARROW){

Matter.Body.applyForce(paperObject.Body,paperObject.body.postition,{x:85,y:-85})

}
}


