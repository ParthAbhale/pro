
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var backImage;
var ground,tree,player,stone,sling,mango1,mango2,mango3,mango4;

function preload()
{
	backImage = loadImage("images.jpg")
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(500,690,1000,20)
    tree = new Tree(450,100,50,50)
	player = new Player(150,450,300,350)
	stone = new Stone(190,535)
    sling = new SlingShot(stone.body,{x:190,y:535})
	mango1= new Mango(450,150)
	mango2 = new Mango(500,200)
	mango3 = new Mango(550,300)
	mango4 = new Mango(400,250)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backImage);
  Engine.update(engine)

  ground.display();
  tree.display();
  player.display();
  stone.display();
  sling.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();

  
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	sling.fire();
}

function keyPressed(){
	if (keyCode === 32){
		sling.attach(stone.body)
	}
}


