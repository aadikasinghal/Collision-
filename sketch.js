var fixedRect;
var movingRect;
 
function setup() {
  createCanvas(800,400);
  movingRect= createSprite(400, 200, 50, 50);
  movingRect.shapeColor="green";
  movingRect.debug="true";
  fixedRect= createSprite(200, 200, 80, 30);
  fixedRect.shapeColor="red";
  fixedRect.debug="true";
}

function draw() {
  background("black");  

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
      && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 )
      {
        movingRect.shapeColor="green";
        fixedRect.shapeColor="red";
      }
   else{
        movingRect.shapeColor="yellow";
        fixedRect.shapeColor="yellow";
   }   

  drawSprites();
}