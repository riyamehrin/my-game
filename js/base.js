class Base {
    constructor(){
        this.player=createSprite(width/2,height-100,50,50)
        this.hillGroup=[];
        this.coinGroup=[];


    }
    conrolPlayer(){
        if(keyDown('LEFT_ARROW')){
            this.player.x-=12
        }
        if(keyDown('RIGHT_ARROW')){
            this.player.x+=12
        }
    }
   show(){
       this.conrolPlayer();
       this.createHill();
       this.createCoin();
       this.scaleCoin();
       drawSprites() 
   }
   createHill(){
       if(frameCount%200==0){
           var hill=createSprite(random(width/2+75,width/2-75),height/2-75,20,20);
           hill.velocityY=5;
           hill.velocityX=random(-2,2)
           var r=Math.floor(random(0,2))
           switch(r){
               case 0:hill.addImage(obs1);
               break;
               case 1:hill.addImage(obs2);
               break;
               case 2:hill.addImage(obs3);
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
}