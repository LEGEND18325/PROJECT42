class Umbrella{
    constructor(x,y){
    
        var options={

            isStatic: true
        }
            this.x=x;
            this.y=y;
            this.width = width;
            this.height = height;
            this.body = Bodies.rectangle(x, y, 50, 150,options);
            this.image = loadImage("images/Walking Frame/walking_1.png");
            //this.image=loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png")
            World.add(world,this.body);
    
    
    }
    display(){
    
        var p=this.body.position;
        push();
        translate(p.x,p.y);
        imageMode(CENTER);
        
       
        
        image(this.image, 0, 0, 340, 340);
        pop();
        }
        
       
    
    }
    
    
    
    
    
    
    