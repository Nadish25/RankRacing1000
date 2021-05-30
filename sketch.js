var canvas, backgroundImage;
var carsAtEnd;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var playerInfoRef;
var form, player, game;
var bike;
var cars, car1, car2, car3;
var cardriving;
var car1Img,car2Img,car3Img;
var groundImg;
var track;
var carImg,carTop;
var bike,bikeTop;
var rcar,rcarTop;
var user;
var test;
var logoImg;
var finishLine;
var ferarriTop;
var bg
var bugattiTop;
var imageCount;
var revvingSound;
var carStarting;
var clap;
function preload(){
clap=loadSound("applause.wav")
carImg=loadImage("car.png")
carTop=loadImage("carTop.png")

bike=loadImage("bike.png")
bikeTop=loadImage("bikeTop.png")

rcar=loadImage("rcar.png")
rcarTop=loadImage("rcarTop.png")

user=loadImage("user.png")

track=loadImage("track.png")

ferarriTop=loadImage("ferarriTop.png")
bugattiTop=loadImage("bugattiTop.png")
bg=loadImage("background1.jpg")
logo=loadImage("rankracing.png")

cardriving=loadSound("cardriving.mp3")

revvingSound=loadSound("revvingSound.mp3")

carStarting=loadSound("carStarting.mp3")

}

function setup(){
  canvas = createCanvas(displayWidth-50, displayHeight -150);
  database = firebase.database();

 
  drawSprites();
  game = new Game();
  game.getState();
  game.start();
  
  //test=new Test();
}


function draw(){
 

  
  
  
  
  if(playerCount === 3){
    game.update(1);
    
    
  }
  if(gameState === 1){
    
    game.chooseChar();  
    clear();
    game.play();
    textSize(50)
    fill(0)
    text("Chose your character:",displayWidth /2 -200,displayHeight/2+100)
    
  }

  if(gameState === 2){

    
    game.end();
  }
  
}
