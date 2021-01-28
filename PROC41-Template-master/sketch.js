const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Render=Matter.Render
var drops=[];
var thunder1,thunder2,thunder3,thunder4,thunder,thunderCreatedFrame ;

var umbrella;
var maxDrops=100;

function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
    createCanvas(500, 600);
    engine = Engine.create();
    world = engine.world;
    
for(var i=0;i<maxDrops;i++){
    
     drops.push(  new Drops(random(0,400),random(0,400)));
     
 }


 umbrella = new Umbrella(270,450,370,370);




    Engine.run(engine);
}

function draw(){
    background("black");
  Engine.update(engine);


  


  for(var i=0;i<drops.length;i++){
    
  
   
    drops[i].display();
    drops[i].update();
    
 }

 

 umbrella.display();


 if(frameCount % 100===0) {
        thunder = createSprite(random(20,380),5,5,5);
        thunderCreatedFrame=frameCount;
        var rand = Math.round(random(1,4));
        switch(rand) {
          case 1: thunder.addImage(thunder1);
                  break;
          case 2: thunder.addImage(thunder2);
                  break;
          case 3: thunder.addImage(thunder3);
                  break;
          case 4: thunder.addImage(thunder4);
                  break;
         }
         thunder.scale = 0.6;
         //thunder.destroy();
    }
    
    if(thunderCreatedFrame+20===frameCount){
            thunder.destroy();
    }
drawSprites();


}   

