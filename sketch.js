const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer, stone, rubber, ground;

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	hammer = new Hammer(10,100);
	stone = new Stone(700,320,100,100);
	rubber = new Rubber(900,450,70);
	ground = new Ground(600,590,1200,20);


	Engine.run(engine);
  
}


function draw() {
  background("orange");

  Engine.update(engine);

  hammer.display();
  stone.display();
  rubber.display();
  ground.display();

  drawSprites(); 
}



