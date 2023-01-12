var sea, ship, seaImg, shipImg;
function preload(){
  seaImg=loadImage("sea.png");
  shipImg=loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png")
}

function setup(){
  createCanvas(400,400);
  //sprite del mar
  sea= createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX=-5;
  sea.scale=0.3;
  //sprite del barco
  ship= createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg);
  ship.scale=0.25;
}

function draw() {
  background("blue");
  if(sea.x<0){
    sea.x=400
  }

  drawSprites();
}