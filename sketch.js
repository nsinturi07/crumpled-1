
var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 200);


	engine = Engine.create();
	world = engine.world;


	

	
	ground = Bodies.rectangle(width/2, 120, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	paper = new paperObject(50,50,30);
	box1 = new Box(380,115,150,20);
	box2 = new Box(440,115,20,80);
	box3 = new Box(280,115,20,80);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(120);
  paper.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:155,y:360});
	}
}
