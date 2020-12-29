
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy,back;
var launchingForce=100;


// Hi , there are 5 hints numbered from 1) to 5) in this sketch.js file , 
//find them and fill in the blanks to complete the animation/game
// you may add your own additional creativity as well . 
// all the best :)


function preload(){
  boy=loadImage("images/boy.png");
  tree= loadImage("images/tree.png")
  backg=loadImage("images/back.png")
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new stone(235,420,30); 

  mango1=new mango(1100,100,30);
  mango2=new mango(1170,130,30);
  mango3=new mango(1010,140,30);
  mango4=new mango(1100,170,30);
  mango5=new mango(1170,200,30);
  mango6=new mango(1010,240,30);
  mango7=new mango(900,200,30);
  mango8=new mango(920,280,30);
  mango9=new mango(1220,280,30);
  mango10=new mango(1100,270,30);
  
	//1)create a few more mangos , give x and y value such that it looks like mango is on the tree image
 //create atlest 5 more mangos.
 //uncomment line number 47 and run code,to see the x and y position of any point on canvas










	groundObject=new ground(width/2,600,width,20);
	launcherObject=new launcher(stoneObj.body,{x:235,y:420})
  
	
	Engine.run(engine);

}

function draw() {

  background("skyBlue");
 
  textSize(25);
  fill("green")
  text("$$*Press Space to get a second Chance to Play again and to get more mango*$$",10 ,50);
  image(boy ,200,340,200,300);
  image (tree,780,0, 500 , 630 )
  //text(mouseX +","+mouseY, mouseX, mouseY);

  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  //2) write code to display all the mango objects you have created.



  groundObject.display();
  launcherObject.display();
  dropMango(stoneObj,mango1);
  dropMango(stoneObj,mango2);
  dropMango(stoneObj,mango3);
  dropMango(stoneObj,mango4);
  dropMango(stoneObj,mango5);
  dropMango(stoneObj,mango6);
  dropMango(stoneObj,mango7);
  dropMango(stoneObj,mango8);
  dropMango(stoneObj,mango9);
  dropMango(stoneObj,mango10);

//3)write code for all the mangos to drop from tree, when stone hits it
  


}

function mouseDragged()
{
	
	//4) write the code to set the position of the stone body , to //the same position where the mouse moves
  Matter.Body.setPosition(stoneObj.body, {x: mouseX, y:mouseY}) 

	
}

function mouseReleased()
{
	launcherObject.fly();
    
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
   launcherObject.attach(stoneObj.body)


	}
  } q

  function dropMango(stoneObj,mangoArgument){

  mangoBodyPosition=mangoArgument.body.position
  stoneBodyPosition=stoneObj.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

  	if(distance<=mangoArgument.r+stoneObj.body.r)
    {
//5)write the code to set the isStatic attribute of the body of the mango to false , so that it drops down
// you will have to use the setStatic function in Matter.Body module.
// in the same way you used it to make the packageBody fall	down when down arrow pressed in supply mission project  
      if(mango1.body.r-stoneObj.body.r< stoneObj.body.width + mango1.body.width
        && stoneObj.body.r-mango1.body.r < stoneObj.body.width + mango1.body.width
        && mango1.body.r-stoneObj.body.r < stoneObj.body.height + mango1.body.height
        && stoneObj.body.r-mango1.body.r < stoneObj.body.height + mango1.body.height){
       Matter.Body.setStatic(mango1.body,false)
      }

      if(mango2.body.x-stoneObj.body.x < stoneObj.body.width + mango2.body.width
        && stoneObj.body.x-mango2.body.x < stoneObj.body.width + mango2.body.width
        && mango2.body.y-stoneObj.body.y < stoneObj.body.height + mango2.body.height
        && stoneObj.body.y-mango2.body.y < stoneObj.body.height + mango2.body.height){
       Matter.Body.setStatic(mango2.body,false)
      }

      if(mango3.body.x-stoneObj.body.x < stoneObj.body.width + mango3.body.width
        && stoneObj.body.x-mango3.body.x < stoneObj.body.width + mango3.body.width
        && mango3.body.y-stoneObj.body.y < stoneObj.body.height + mango3.body.height
        && stoneObj.body.y-mango3.body.y < stoneObj.body.height + mango3.body.height){
       Matter.Body.setStatic(mango3.body,false)
      }

      if(mango4.body.x-stoneObj.body.x < stoneObj.body.width/2 + mango4.body.width/2
        && stoneObj.body.x-mango4.body.x < stoneObj.body.width/2 + mango4.body.width/2
        && mango4.body.y-stoneObj.body.y < stoneObj.body.height/2 + mango4.body.height/2
        && stoneObj.body.y-mango4.body.y < stoneObj.body.height/2 + mango4.body.height/2){
       Matter.Body.setStatic(mango4.body,false)
      }

      if(mango5.body.x-stoneObj.body.x < stoneObj.body.width/2 + mango5.body.width/2
        && stoneObj.body.x-mango1.body.x < stoneObj.body.width/2 + mango5.body.width/2
        && mango5.body.y-stoneObj.body.y < stoneObj.body.height/2 + mango5.body.height/2
        && stoneObj.body.y-mango1.body.y < stoneObj.body.height/2 + mango5.body.height/2){
       Matter.Body.setStatic(mango5.body,false)
      }

      if(mango6.body.x-stoneObj.body.x < stoneObj.body.width/2 + mango6.body.width/2
        && stoneObj.body.x-mango6.body.x < stoneObj.body.width/2 + mango6.body.width/2
        && mango6.body.y-stoneObj.body.y < stoneObj.body.height/2 + mango6.body.height/2
        && stoneObj.body.y-mango6.body.y < stoneObj.body.height/2 + mango6.body.height/2){
       Matter.Body.setStatic(mango6.body,false)
      }

      if(mango7.body.x-stoneObj.body.x < stoneObj.body.width/2 + mango7.body.width/2
        && stoneObj.body.x-mango7.body.x < stoneObj.body.width/2 + mango7.body.width/2
        && mango7.body.y-stoneObj.body.y < stoneObj.body.height/2 + mango7.body.height/2
        && stoneObj.body.y-mango7.body.y < stoneObj.body.height/2 + mango7.body.height/2){
       Matter.Body.setStatic(mango7.body,false)
      }

      if(mango8.body.x-stoneObj.body.x < stoneObj.body.width/2 + mango8.body.width/2
        && stoneObj.body.x-mango8.body.x < stoneObj.body.width/2 + mango8.body.width/2
        && mango8.body.y-stoneObj.body.y < stoneObj.body.height/2 + mango8.body.height/2
        && stoneObj.body.y-mango8.body.y < stoneObj.body.height/2 + mango8.body.height/2){
       Matter.Body.setStatic(mango8.body,false)
      }

      if(mango9.body.x-stoneObj.body.x < stoneObj.body.width/2 + mango9.body.width/2
        && stoneObj.body.x-mango9.body.x < stoneObj.body.width/2 + mango9.body.width/2
        && mango9.body.y-stoneObj.body.y < stoneObj.body.height/2 + mango9.body.height/2
        && stoneObj.body.y-mango9.body.y < stoneObj.body.height/2 + mango9.body.height/2){
       Matter.Body.setStatic(mango9.body,false)
      }

      if(mango10.body.x-stoneObj.body.x < stoneObj.body.width/2 + mango10.body.width/2
        && stoneObj.body.x-mango10.body.x < stoneObj.body.width/2 + mango10.body.width/2
        && mango10.body.y-stoneObj.body.y < stoneObj.body.height/2 + mango10.body.height/2
        && stoneObj.body.y-mango10.body.y < stoneObj.body.height/2 + mango10.body.height/2){
       Matter.Body.setStatic(mango10.body,false)
      }


    }

  }


