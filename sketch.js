const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var paddle;
var pendulum;
var chain;

var box1;
var box2;
var box3;

function setup() 
{
  var canvas = createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  paddle = new Paddle(200, 100, 150, 30);
  pendulum = new Pendulum(200, 300, 40);

  //box1 = new Paddle(70, 100, 70, 10);
  //box2 = new Paddle(40, 80, 10, 50);
  //box3 = new Paddle(100, 80, 10, 50);

  var options = 
  {
    bodyA : pendulum.body,
    bodyB : paddle.body,
    stiffness : 0.7,
    length : 100
  }
  chain = Constraint.create(options);
  World.add(world, chain);

}

function draw() 
{
  background("yellow");  
  Engine.update(engine);

  paddle.display();
  pendulum.display();

  textSize(14);
  text("press enter to bring back the pendulum to its initial position",20, 350);
  text("press space to join the pendulum with mouse position", 20, 380);

  //box1.display();
  //box2.display();
  //box3.display();
  
  strokeWeight(5);
  line(pendulum.body.position.x, pendulum.body.position.y, paddle.body.position.x, paddle.body.position.y);

  drawSprites();
}

function keyPressed()
{
  if(keyCode == 32){
   pendulum.body.position.x = mouseX;
   pendulum.body.position.y = mouseY;
  }
  if(keyCode == 13)
  {
   pendulum.body.position.x = 200;
   pendulum.body.position.y = 200;
  }
}