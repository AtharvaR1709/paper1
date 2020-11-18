
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 680, 800, 20)
	side1 = new Box(450, 660, 150, 20)
	side2 = new Box(375, 660, 20, 100)
	side3 = new Box(525, 660, 20, 100)
	paper = new Paper(50, 610, 20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
   ground.display();
	side1.display();
	side2.display();
	side3.display(); 
	paper.display();


  drawSprites();
 
}
function keyPressed() { 
	if (keyCode === UP_ARROW) { 
		Matter.Body.applyForce(paper.body, paper.body.position, {x: 10, y:-30});
	 } 
	}



