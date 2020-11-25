var player,alien,
  alienGroup


function preload() {
  moonImg = loadImage("/img/SpaceImg.png")
}

function setup() {
  createCanvas(windowWidth-100,windowHeight/2+100);

  ground = createSprite(windowWidth/2-50,height-10,width,20)

  player=createSprite(20,windowHeight/2,20,20)
}

function draw() {
  background(moonImg);


  player.velocityY += 0.3

  camera.x = player.x
  ground.x = player.x

  player.collide(ground)

  playerMovement()

  drawSprites();
}

function playerMovement(){
  
  if(keyDown(UP_ARROW)){
    player.velocityY = -10
  }

  if(keyDown(RIGHT_ARROW)){
    player.x +=5
  }
  
  if(keyDown(LEFT_ARROW)){
    player.x -=5
  }
}