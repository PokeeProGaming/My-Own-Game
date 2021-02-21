var spaceShip, spaceShipBrake, spaceShipUp, spaceShipDown, spaceShipForward, spaceShipIdle, spaceShipShot;
var bg, bgImg;
var shotGunEnemy, shotGunEnemyImg, homingGunEnemy, homingGunEnemyImg, laserEnemy, laserEnemyImg; 
var laserEnemyGroup, homingGunEnemyGroup, shotGunEnemyGroup;
var spaceShipShotGroup, homingGunShotGroup, laserShotGroup, shotgunShotGroup;
var gameState = 0;

function preload(){
  bgImg = loadImage("Sprites/background.png");
  spaceShipBrake = loadImage("Player/playerBrake.png");
  spaceShipUp = loadImage("Player/playerUp.png");
  spaceShipDown = loadImage("Player/playerDown.png");
  spaceShipForward = loadImage("Player/playerForward.png");
  spaceShipIdle = loadImage("Player/playerIdle.png");

  shotGunEnemyImg = loadImage("Enemies/shotGunEnemy.png"); 
  homingGunEnemyImg = loadImage("Enemies/homingGunEnemy.png");
  laserEnemyImg = loadImage("Enemies/laserEnemy.png");

  laserEnemyShot = loadImage("Bullets/guardGunShot4.png");
  shotGunEnemyShot = loadImage("Bullets/shotGunShot2.png");
  homingGunEnemyShot = loadImage("Bullets/homingGunShot3.png");
  spaceShipShot = loadImage("Bullets/machineGunShot3.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  bg = createSprite(width/2,height/2);
  bg.addImage(bgImg);
  bg.scale = 1.4;
  bg.velocityX = -2;

  spaceShip = createSprite(80,windowHeight/2,50,50);
  spaceShip.addImage(spaceShipIdle);
  spaceShip.scale = 1.5;
  
  spaceShipShotGroup = createGroup();
  laserShotGroup = createGroup();
  homingGunShotGroup = createGroup();
  shotgunShotGroup = createGroup();

  laserEnemyGroup = createGroup();
  shotGunEnemyGroup = createGroup();
  homingGunEnemyGroup = createGroup();

}

function draw() {
  background(0);

  if(gameState===0){

    if(bg.x<500){
      bg.x = bg.width/2;
    }

    if(keyWentDown("space")){
      spaceShipBullet();
    }

    if(keyDown(UP_ARROW)){
      spaceShip.y -= 10;
      spaceShip.addImage(spaceShipUp);
    }

    if(keyDown(DOWN_ARROW)){
      spaceShip.y += 10;
      spaceShip.addImage(spaceShipDown);
    }

    if(keyDown(RIGHT_ARROW)){
      spaceShip.x += 10;
      spaceShip.addImage(spaceShipForward);
    }

    if(keyDown(LEFT_ARROW)){
      spaceShip.x -= 10;
      spaceShip.addImage(spaceShipBrake);
    }
    spawnLaserEnemy();
    spawnShotgunEnemy();
    spawnHomingGunEnemy();

    if(homingGunShotGroup.isTouching(spaceShip) || laserShotGroup.isTouching(spaceShip) || shotgunShotGroup.isTouching(spaceShip)){
      
      gameState = 1;
    }
  }

  if(gameState===1){
    spaceShip.destroy();
    homingGunEnemyGroup.destroyEach();
    laserEnemyGroup.destroyEach();
    shotGunEnemyGroup.destroyEach();
  }

  drawSprites();
}

function spaceShipBullet(){
  var bullet = createSprite(spaceShip.x,spaceShip.y,10,10);
  bullet.addImage(spaceShipShot);
  bullet.velocityX = 15;
  bullet.lifetime = width/15;
  spaceShipShotGroup.add(bullet);
}
