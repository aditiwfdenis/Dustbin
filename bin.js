class Bin {
 constructor() {
    var options={
        restitution:0.8,
        friction:0.3,
        density:1.0,
        isStatic:true  
    }
        this.body1 = Bodies.rectangle(600,430,160,20, options);
        this.width1 = 160;
        this.height1 = 20;

        this.body2 = Bodies.rectangle(530,400,20,80, options);
        this.width2 = 20;
        this.height2 = 80;
        this.image=loadImage("dustbingreen.png")
         
     this.body3 = Bodies.rectangle(670,400,20,80, options);
      this.width3 = 20;
      this.height3 = 80;
     
      World.add(world, this.body1);
      World.add(world, this.body2);
      World.add(world, this.body3);
}
            
display(){
    var pos1 =this.body1.position;
    var pos2 =this.body2.position;
    var pos3 =this.body3.position;
    push();
    translate(pos2.x+65, pos2.y-12);
    imageMode(CENTER)
    image(this.image,0,0,150,100)
    pop();

   /* push();
    translate(pos1.x, pos1.y);
   rectMode(CENTER)
    rect(0,0,this.width1,this.height1)
    pop();

    push();
    translate(pos2.x, pos2.y);
    rectMode(CENTER)
    rect(0,0,this.width2,this.height2)
    pop();

    push();
    translate(pos3.x, pos3.y);
    rectMode(CENTER)
   rect(0,0,this.width3,this.height3)
    pop();
*/
    
  }
};





























