var bg,bg2,form,system,code,security;
var score=0;
var coinimg;
var obs1,obs2,obs3
function preload() {
  bg = loadImage("day.gif");
  bg2 = loadImage("night.gif");
  coinimg = loadImage("goldCoin.png");
  obs1= loadImage("obiyas1.png");
  obs2= loadImage("obiyas2.png");
  obs3= loadImage("obiyas3.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  player = new Base()
  
}

function draw() {
  background(bg);
  player.show()
}