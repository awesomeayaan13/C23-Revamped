var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1,box2,box3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	engine = Engine.create();
	world = engine.world;
	
	createCanvas(800, 700);
	rectMode(CENTER);
	
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("pink")

	box1=createSprite(width/2,height-50,200,20)
	box1.shapeColor=color("red") 
	
	box1Body = Bodies.rectangle(width/2,height-50,200,20, {isStatic:true} )
	World.add(world, box1Body)
	
	
	box2=createSprite(510,610,60,100)
	box2.shapeColor=color("red")
	
	box2Body = Bodies.rectangle(510,610,60,100, {isStatic:true} )
	World.add(world,box2Body)
	
	box3=createSprite(310,610,60,100)
	box3.shapeColor=color("red")
	
	box3Body = Bodies.rectangle(310,610,60,100, {isStatic:true} )
	World.add(world, box3Body)
	
	
	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	packageSprite.y=packageBody.y-10
	Matter.Body.setStatic(packageBody, false);

  }
}



