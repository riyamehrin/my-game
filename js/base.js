class Base {
    constructor(){
        this.player=createSprite(width/2,height-150,50,50)
        this.hillGroup=[];
        this.coinGroup=[];
        this.player.addImage(bike)
        this.player.scale=1;
        this.player.rotation=0;
        
        this.player.setCollider("rectangle",0,50,this.player.width-75,this.player.height/2)
        this.life=2;
        this.resetButton= createButton("RESTART")
    }
    conrolPlayer(){
        if(keyDown('LEFT_ARROW')){
            this.player.x-=12
            this.player.rotation=10
        }
        if(keyDown('RIGHT_ARROW')){
            this.player.x+=12
            this.player.rotation=-10
        }
    }
    handleCoin(){
        this.player.overlap(this.coinGroup,function(collector,collected){
            score+=5;
            console.log(score)
            collected.remove()
        })
    }
    gameOver(){
        gameState=2;
        this.player.remove();
        this.hillGroup=[];
        this.coinGroup=[];
        
    }
    handleHill(){
        this.player.overlap(this.hillGroup,function(collector,collected){
            this.life-=1;
            if(this.life<=0){
               gameState=2;
            }
            collected.remove()
        })
    }
  
   show(){
       if(gameState!=2){
        this.conrolPlayer();
        this.createHill();
        this.createCoin();
        this.scaleCoin();
        this.scaleHill();
        this.handleCoin();
        this.handleHill();
        if(score>100){
        gameState=1;
        }
        drawSprites() 
       }
      
   }
   createHill(){
       if(frameCount%200==0){
        var hill=createSprite(random(width/2+75,width/2-75),height/2+50,20,20);
           if(gameState==1){
            hill.y=height/2-100;

           }
          
           hill.velocityY=5;
           hill.velocityX=random(-2,2)
           var r=Math.floor(random(0,3))
          // var r=2;
           switch(r){
               case 0:hill.addImage(obs1);
               hill.scale=0.5;
               hill.setCollider("rectangle",0,0,hill.width-50,hill.height/2)
               break;
               case 1:hill.addImage(obs2);
               hill.scale=0.2;
               hill.setCollider("rectangle",0,0,hill.width-50,hill.height-50)
               break;
               case 2:hill.addImage(obs3);
               hill.scale=0.1;
               hill.setCollider("rectangle",0,0,hill.width-50,hill.height/2)
               break;
           }
           this.hillGroup.push(hill)
       }
   }
   createCoin(){
    if(frameCount%100==0){
        var coin=createSprite(random(width/2+75,width/2-75),height/2-75,20,20);
        if(gameState==1){
            coin.y=height/2-100;

           }
        coin.velocityY=5;
        coin.velocityX=random(-3,3)
        coin.addImage(coinimg);
        coin.scale=0.03;
        //coin.scale+=0.01
        this.coinGroup.push(coin)
    }
}
scaleCoin(){
    for(var i=0;i<this.coinGroup.length;i++){
        this.coinGroup[i].scale+=0.001;
    }
}
scaleHill(){
    for(var i=0;i<this.hillGroup.length;i++){
        this.hillGroup[i].scale+=0.007;
    }
}
}