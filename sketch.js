var ground, box, slingshot;



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

}

function draw() {
  background(255,255,255);  
  // backgroundColor("black");
  ground = new Ground(400, 450, 20, 400);
  box = new Box(50, 50, 600, 150);
  var slingshot = new SlingShot()
  drawSprites();
  
}