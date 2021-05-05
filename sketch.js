const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobDiameter
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	bobDiameter =40
	roof =new Roof(width/2,height/4,width/7,20)
	startBobPosX=width/2
	startBobPosY=height/4+500
	//Create the Bodies Here.
	bobOb1 =new Bob(720,400,bobDiameter)
	bobOb2 =new Bob(760,400,bobDiameter)
	bobOb3 =new Bob(800,400,bobDiameter)
	bobOb4 =new Bob(840,400,bobDiameter)
	bobOb5 =new Bob(880,400,bobDiameter)
	
	rope1 =new Chain(bobOb1.body,roof.body,-bobDiameter*2,0)
	rope2 =new Chain(bobOb2.body,roof.body,-bobDiameter*1,0)
	rope3 =new Chain(bobOb3.body,roof.body,0,0)
	rope4 =new Chain(bobOb4.body,roof.body,bobDiameter*1,0)
	rope5 =new Chain(bobOb5.body,roof.body,bobDiameter*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobOb1.display();
  bobOb2.display();
  bobOb3.display();
  bobOb4.display();
  bobOb5.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobOb1.body,bobOb1.body.position,{x:-50,y:-45})
	}
}

