class Bob{
  constructor(x , y,r){
      var options={
          
          friction:0,
          restitution:1,
          density:1
      }
  this.body=Bodies.circle(x,y,r,options) 
  this.diameter=2*r

  
  World.add(world,this.body);
  this.image=loadImage("Metal-Ball-PNG-715x715-removebg-preview.png")



  
  
  }
  
  display(){
      var pos=this.body.position
      var  angle=this.body.angle
      push()
      
      imageMode(CENTER)
      stroke("black")
      strokeWeight(4)
      
      image(this.image,this.body.position.x,this.body.position.y,2*this.diameter,2*this.diameter);
      pop()
  }
  
  }