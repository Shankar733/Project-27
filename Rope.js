class Chain{
    constructor(bodyA,bodyB,offsetX,offsetY){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:offsetX,y:offsetY}
        }
    this.offsetX=offsetX
    this.offsetY=offsetY
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
        
    }
    display(){
        var pointA=this.chain.bodyA.position
        var pointB=this.chain.bodyB.position
        var anchor1x=pointA.x
        var anchor1y=pointA.y
        var anchor2x=pointB.x+this.offsetX
        var anchor2y=pointB.y+this.offsetY
        strokeWeight(3);
    line(anchor1x,anchor1y,anchor2x,anchor2y)
    }
} 