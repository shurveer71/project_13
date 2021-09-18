var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background("white");
  rabbit.x = World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
  console.log(frameCount)
  
  createApples();
  drawSprites();
}

function createApples(){
if(frameCount % 80 == 0){
apple=createSprite(random(50,350),0,20,20)
apple.addImage(appleImg);
apple.scale=0.1 
apple.velocityY=3

}
if(frameCount % 190 == 0){
  leaf=createSprite(random(50,350),0,20,20)
leaf.addImage(leafImg);
leaf.scale=0.1 
leaf.velocityY=3

}
}