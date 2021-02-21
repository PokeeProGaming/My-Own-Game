function spawnHomingGunEnemy(){
    if(frameCount%160===0){
        var homingGunEnemy = createSprite(displayWidth+20,Math.round(random(15,700)),50,50);
        homingGunEnemy.addImage(homingGunEnemyImg);
        homingGunEnemy.velocityX = -8;
        spawnHomingGunShot(homingGunEnemy);
        homingGunEnemyGroup.add(homingGunEnemy);
    }
}

function spawnHomingGunShot(homingGunEnemy){
    if(frameCount%2===0){
        var bullet = createSprite(homingGunEnemy.x,homingGunEnemy.y,10,10);
        bullet.addImage(homingGunEnemyShot);
        bullet.velocityX = -15;
        bullet.lifetime = width/15;
        homingGunShotGroup.add(bullet);
        }
}