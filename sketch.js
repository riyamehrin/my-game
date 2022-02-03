var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("day.gif");
  bg2 = loadImage("night.gif")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  player = new Base()
  
}

function draw() {
  background(bg);
  player.show()
}