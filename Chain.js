class Rope{
constructor(body1,body2,xOffset , yOffset){
    this.xOffset = xOffset;
    this.yOffset = yOffset;
    var options ={
        bodyA:body1,
        bodyB:body2,
        stiffness:0.7,
        length:500,
        friction:3,
        pointA:{x:xOffset, y:yOffset}
         
    }
    this.rope = Matter.Constraint.create(options)
    World.add(world, this.rope)


}

display(){
    var point1 = this.rope.bodyA.position
    var point2 = this.rope.bodyB.position
    strokeWeight(4)

    var roofAttachPointX = point1.x + this.xOffset
    var roofAttachPointY = point1.y + this.yOffset 

    var roofAttachPoint2X = point2.x
    var roofAttachPoint2Y = point2.y  

    line( roofAttachPoint2X,roofAttachPoint2Y ,roofAttachPointX, roofAttachPointY)


    
}
}
