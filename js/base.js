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
       drawSpirtes()
   }
   createHill(){
       if(frameCount%100==0){
           var hill=createSprite(random(width/2+100,width/2-100),0,20,20);
           hill.velocityY=5;
           this.hillGroup.push(hill)
       }
   }
   createCoin(){
    if(frameCount%50==0){
        var coin=createSprite(random(width/2+100,width/2-100),0,20,20);
        coin.velocityY=5;
        this.coinGroup.push(coin)
    }
}
}