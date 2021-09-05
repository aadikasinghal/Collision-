var fixedRect;
var movingRect;
var box3;
 
function setup() {
  createCanvas(800,400);
  movingRect= createSprite(400, 200, 50, 50);
  movingRect.shapeColor="green";
  movingRect.debug="true";
  fixedRect= createSprite(200, 200, 80, 30);
  fixedRect.shapeColor="red";
  fixedRect.debug="true";
  box3= createSprite(300,200,70,40);
  box3.shapeColor="pink";
  box3.debug="true";
}

function draw() {
  background("black");  

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  black(movingRect, fixedRect);
  black(box3, movingRect);

  drawSprites();

}

function black(box1 ,box2){
  if(box1.x - box2.x < box2.width/2 + box1.width/2 
    && box2.x - box1.x < box2.width/2 + box1.width/2
     && box1.y - box2.y < box2.height/2 + box1.height/2
     && box1.y - box2.y < box2.height/2 + box1.height/2 )
     {
       box1.shapeColor="green";
       box2.shapeColor="red";
     }
  else{
       box1.shapeColor="yellow";
       box2.shapeColor="yellow";
  }   
}