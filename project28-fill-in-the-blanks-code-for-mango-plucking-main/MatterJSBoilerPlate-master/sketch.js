
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(650,200,500,25)
	bob1 = new Bob(450,700,50)
	bob2 = new Bob(550,700,50)
	bob3 = new Bob(650,700,50)
	bob4 = new Bob(750,700,50)
	bob5 = new Bob(850,700,50)

    rope1 = new Rope(ground.body,bob1.body,-200,0)
	rope2 = new Rope(ground.body,bob2.body,-100,0)
	rope3 = new Rope(ground.body,bob3.body,0,0)
	rope4 = new Rope(ground.body,bob4.body,+100,0)
	rope5 = new Rope(ground.body,bob5.body,+200,0)


	Engine.run(engine);
  
}


function draw() {
	console.log(rope2,rope3)

  rectMode(CENTER);
  background("green");
  ground.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()


}

function keyPressed(){

if(keyCode === RIGHT_ARROW){
	Matter.Body.applyForce(bob5.body,bob5.body.position,{x:1000,y:0})

}
}
