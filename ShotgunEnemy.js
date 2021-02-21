function spawnShotgunEnemy(){
    if(frameCount%160===0){
        var shotgunEnemy = createSprite(displayWidth+20,Math.round(random(15,700)),50,50);
        shotgunEnemy.addImage(shotGunEnemyImg);
        shotgunEnemy.velocityX = -8;
        spawnShotgunShot(shotgunEnemy);
        shotGunEnemyGroup.add(shotgunEnemy);
    }
}

function spawnShotgunShot(shotgunEnemy){
    if(frameCount%2===0){
        var bullet = createSprite(shotgunEnemy.x,shotgunEnemy.y,10,10);
        bullet.addImage(shotGunEnemyShot);
        bullet.velocityX = -15;
        bullet.lifetime = width/15;
        shotgunShotGroup.add(bullet);
        }
}