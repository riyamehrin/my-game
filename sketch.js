var bg,bg2,form,system,code,security;
var score=0;
var coinimg;
var obs1,obs2,obs3,bike
function preload() {
  bg = loadImage("day.gif");
  bg2 = loadImage("night.gif");
  coinimg = loadImage("goldCoin.png");
  obs1= loadImage("obiyas1.png");
  obs2= loadImage("obiyas2.png");
  obs3= loadImage("obiyas3.png");
  bike=loadImage("bike.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  //createCanvas(300,500);
  player = new Base()
  
}

function draw() {
  background(0);
  image(bg,0,0,width,height)
  player.show()
}
function keyReleased(){
  if(keyCode==37 || keyCode==38){
    player.player.rotation=0
  }
}
