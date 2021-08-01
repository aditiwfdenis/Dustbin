class Paper{
    constructor(x,y,radious){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
        }
        this.body = Bodies.circle(x,y,radious,options)
        this.radious=radious;
        this.image=loadImage("paper.png")
        

        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER)
        image(this.image,0,0,this.radious*2,this.radious*2)
        pop();



    }
}
