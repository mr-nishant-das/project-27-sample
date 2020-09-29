const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var hangingbeam;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	hangingbeam = new roof(400, 50, 700, 50);

	bob1 = new bob(400, 650, 80);
	bob2 = new bob(320, 650, 80);
	bob3 = new bob(240, 650, 80);
	bob4 = new bob(480, 650, 80);
	bob5 = new bob(560, 650, 80);

	rope1 = new rope(bob1.body, hangingbeam.body, 0, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  hangingbeam.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();

  drawSprites();
 
}



