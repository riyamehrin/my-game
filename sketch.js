var bg,bg2,form,system,code,security;
var gameState=0;
var score=0;
var coinimg;
var obs1,obs2,obs3,bike,go;
var score=0;
function preload() {
  bg = loadImage("day.gif");
  bg2 = loadImage("night.gif");
  coinimg = loadImage("goldCoin.png");
  obs1= loadImage("obiyas1.png");
  obs2= loadImage("obiyas2.png");
  obs3= loadImage("obiyas3.png");
  bike=loadImage("bike.png");
  go= loadImage("go.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  //createCanvas(300,500);
  player = new Base()
  
}

function draw() {
  background(0);
  
  if(gameState==0){
    image(bg,0,0,width,height)
    player.show()
  }else if(gameState==1){
    console.log("night")
    image(bg2,0,0,width,height)
    player.show()
  }else{
    player.gameOver()
    image(go,0,0,width,height)
  }
  
 
}
function keyReleased(){
  if(gameState==0 || gameState==1){
    if(keyCode==37 || keyCode==38){
      player.player.rotation=0
    }
  }
 
}
