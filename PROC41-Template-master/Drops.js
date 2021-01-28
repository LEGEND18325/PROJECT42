class Drops{
    
    constructor(x,y){
        
    var option1={
friction:0.1
         }
        this.x=x;
        this.y=y;
        
        this.rain=Bodies.circle(this.x,this.y,10,option1)
        
        World.add(world,this.rain);




}
display(){

    var p=this.rain.position;
    push();
    translate(p.x,p.y);
    
    ellipseMode(CENTER);
    
    strokeWeight(5);
    
    fill("blue")
    ellipse(0,0,10,10);
    //this.update();
    pop();
    }

    update(){
//var p1 = this.drops.position
        if(this.rain.position.y>height){

            Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})


        }
        }
    


}






