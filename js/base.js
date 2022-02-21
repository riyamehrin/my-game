class Base {
    constructor(){
        this.player=createSprite(width/2,height-150,50,50)
        this.hillGroup=[];
        this.coinGroup=[];
        this.player.addImage(bike)
        this.player.scale=1
        this.player.rotation=0
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
   show(){
       this.conrolPlayer();
       this.createHill();
       this.createCoin();
       this.scaleCoin();
       this.scaleHill();
       drawSprites() 
   }
   createHill(){
       if(frameCount%200==0){
           var hill=createSprite(random(width/2+75,width/2-75),height/2+50,20,20);
           hill.velocityY=5;
           hill.velocityX=random(-2,2)
           var r=Math.floor(random(0,3))
          // var r=2;
           switch(r){
               case 0:hill.addImage(obs1);
               hill.scale=0.4;
               break;
               case 1:hill.addImage(obs2);
               hill.scale=0.2;
               break;
               case 2:hill.addImage(obs3);
               hill.scale=0.1;
               break;
           }
           this.hillGroup.push(hill)
       }
   }
   createCoin(){
    if(frameCount%100==0){
        var coin=createSprite(random(width/2+75,width/2-75),height/2-75,20,20);
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