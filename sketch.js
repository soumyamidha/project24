const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone, bouncyBall,hammer;

function setup(){
     createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    iron = new Iron(300,350);
    stone = new Stone(700,320,100,100);
  
     bouncyBall=new BouncyBall(900,450,20);
    // bouncyBall=BouncyBall(900,450,70);
    // bouncyBall=new (900,450,70);
    // bouncyBall=new BouncyBall();

    hammer = new Hammer(10,100);
    rubber = new Rubber(100,100,50);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    stone.display();
   plane.display();
   
    bouncyBall.display();
   iron.display()  
   hammer.display();
   rubber.display();
fill(0)
text('hammer',hammer.body.position.x,hammer.body.position.y)
text('iron',iron.body.position.x,iron.body.position.y)
text('bouncyBall',bouncyBall.body.position.x,bouncyBall.body.position.y)
text('rubber',rubber.body.position.x,rubber.body.position.y)
text('stone',stone.body.position.x,stone.body.position.y)
}
