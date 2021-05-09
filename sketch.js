var bg = "bg2.jpg";
var bg1 = "bg9.jpg";
var bkground;
var hr;
var tm;
var clr;

function preload(){
   backgroundImg();
}

function setup() {
  createCanvas(800,400);
   
}

function draw() {
  if(bkground){
  background(bkground);
  fill(clr); 
  }
  else{
    background(0);
  }
  getTime();
  textSize(30);
  textAlign(CENTER);
  text(""+tm,width/2,height/2);
  drawSprites();
}

async function backgroundImg(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  hr = datetime.slice(11,13);
  console.log(hr);
  
  if(hr>06 && hr<18){
    bkground = loadImage(bg);
    clr="black";
  }else{
    bkground = loadImage(bg1);
    clr="white";
  }

  

  
  //console.log(background);
}

async function getTime(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  
  tm = datetime.slice(11,19);
  

  

 
  //console.log(background);
}