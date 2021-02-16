const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21;
var ground, stand, polygon;
var score=0;

function preload(){
     polygon_img= loadImage("polygon.png")
}


function setup(){
    var canvas = createCanvas(1536,750);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(765,600,1550,20);

    block1 = new Block(600,560,30,40);
    block2 = new Block(630,560,30,40);
    block3 = new Block(660,560,30,40);
    block4 = new Block(690,560,30,40);
    block5 = new Block(720,560,30,40);
    block6 = new Block(750,560,30,40);
    block7 = new Block(780,560,30,40);
    block8 = new Block(810,560,30,40);
    
    block9 = new Block(630,530,30,40);
    block10 = new Block(660,530,30,40);
    block11 = new Block(690,530,30,40);
    block12 = new Block(720,530,30,40);
    block13 = new Block(750,530,30,40);
    block14 = new Block(780,530,30,40);

    block15 = new Block(660,500,30,40);
    block16 = new Block(690,500,30,40);
    block17 = new Block(720,500,30,40);
    block18 = new Block(750,500,30,40);
    
    block19 = new Block(690,470,30,40);
    block20 = new Block(720,470,30,40);

    block21 = new Block(705,430,30,40);

    polygon = Bodies.circle(50,200,20); 
    World.add(world, polygon)
    slingshot = new Slingshot(this.polygon,{x:100, y:200});
}

function draw(){
        background("blue");
    Engine.update(engine);
    //strokeWeight(4);
    ground.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();

    imageMode(CENTER)
    image(polygon_img, polygon.position.x, polygon.position.y, 40,40)
    slingshot.display();   
    
    text("Score:"+ score,750,40);
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly()
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(this.polygon);
    }
}
