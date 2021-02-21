function spawnLaserEnemy(){
    if(frameCount%180===0){
        var laserEnemy = createSprite(displayWidth+20,Math.round(random(15,700)),50,50);
        laserEnemy.addImage(laserEnemyImg);
        laserEnemy.velocityX = -8;
        spawnLaserEnemyShot(laserEnemy);
        laserEnemyGroup.add(laserEnemy);
    }
}

function spawnLaserEnemyShot(laserEnemy){
    if(frameCount%180===0){
        var bullet = createSprite(laserEnemy.x,laserEnemy.y,10,10);
        bullet.addImage(laserEnemyShot);
        bullet.velocityX = -15;
        bullet.lifetime = width/15;
        laserShotGroup.add(bullet);
        }
}