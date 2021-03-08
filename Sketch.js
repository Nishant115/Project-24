
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var stone,plane,rubber,hammer;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	//Create the Bodies Here.
	plane = new Plane(600,height,1200,20)
    
    stone = new Stone(700,320,100,100);
	rubber = new Rubber(900,450,70);
    hammer = new Hammer(10,100);

}


function draw() {
  rectMode(CENTER);
  background("blue");
  Engine.update(engine);

  	stone.display();
    plane.display();
	rubber.display();

    hammer.display();

  drawSprites();
}
