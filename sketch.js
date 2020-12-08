const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;  

    ground = new Ground(600,505,1200,20);
    stand = new Ground(590,255,200,10)

    block8 = new Block(530,235,30,40);
    block9 = new Block(560,235,30,40);
    block10 = new Block(590,235,30,40);
    block11 = new Block(620,235,30,40);
    block12 = new Block(650,235,30,40);
    block13 = new Block(560,195,30,40);
    block14 = new Block(590,195,30,40);
    block15 = new Block(620,195,30,40);
    block16 = new Block(590,155,30,40);

    polygon = new Polygon(200,200);

    
    slingshot = new Sling(polygon.body,{x:200, y:200});
    
}

function draw(){
    background("black");
    Engine.update(engine);
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    polygon.display();

    ground.display();
    stand.display();
}


function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body)
    }
}