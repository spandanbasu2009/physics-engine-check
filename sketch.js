var bg = "bg2.jpg";
var background;

function preload(){
   backgroundImg();
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  bg = createSprite(400,200,800,400);
  bg.shapeColor = color("red");
}

function draw() {
  background("white"); 
  
  fill("purple");
  textSize(15);
  text(""+hour,150,200);
  drawSprites();
}

async function backgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  console.log(hour);

  

  

  //background = loadImage(bg);
  //console.log(background);
}