class Ground{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
    this.body=Bodies.rectangle(x,y,w,h,options)
    World.add(world,this.body);
    this.width = w;
    this.height = h; 
    
    
    }
    
    display(){
        push()

        fill(128,128,128);
        stroke("white");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop()
    }
                                    
    }