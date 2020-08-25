var fixedRect, movingRect;
var r1,r2,r3,r4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  r1 = createSprite(400, 200, 50, 80);
  r1.shapeColor = "green";
  r1.debug = true;
  r2 = createSprite(600, 200, 50, 80);
  r2.shapeColor = "green";
  r2.debug = true;
  r3 = createSprite(800, 200, 50, 80);
  r3.shapeColor = "green";
  r3.debug = true;
  r4 = createSprite(1000, 200, 50, 80);
  r4.shapeColor = "green";
  r4.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(movingRect,r4)){
    movingRect.shapeColor = "red";
    r4.shapeColor = "red";
  }
 else{
  movingRect.shapeColor = "green";
  r4.shapeColor = "green";
 } 
  drawSprites();
}
