var ball;
var database;
var position;
var bgi
var form
var player

function preload(){
bgi=loadImage("background.png")

}
function setup(){
    database=firebase.database()
    createCanvas(windowWidth,windowHeight)
    game=new Gamestate()
    game.start()

}

function draw(){
    background(bgi);
    
}

function windowResized()
 { resizeCanvas(windowWidth, windowHeight); }





