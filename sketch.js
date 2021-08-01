
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800,500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	paper=new Paper(80,350,20)
  ground=new Ground(400,450,800,20)
  bin1=new Bin()
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  paper.display();
  ground.display();
  bin1.display();
  drawSprites();
 
}
function keyPressed(){
  if (keyCode===UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-70})
  } 


}


