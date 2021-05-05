class Bob{

    constructor(x,y,raidus){
        var options={
            isStatic: false,
            restitution:1.0,
            friction:0.0,
            density:0.8
        }
        this.body=Bodies.circle(x,y,raidus/2,options)
        this.raidus=raidus;
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
       // rotate(angle);
        //imageMode(CENTER);
        //image(this.image, 0, 0, this.width, this.height);
        //ellipseMode(RADIUS)
        ellipse(0,0,this.raidus,this.raidus)
        pop();
      }
    
}