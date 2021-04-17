// declare any variables you need here.
// var x, y, etc..
// you will see setup and draw is not definied or used warnings and other warnings in your console at the bottom right. This is a glitch in how codesandbox loads the libraries and methods from p5. All is well.
var white = {
  r : 250,
  g : 250, 
  b : 250,
}
var teal = {
  r : 0,
  g : 255, 
  b : 196,
}
var pink = {
  r : 239,
  g : 141, 
  b : 141,
}

function setup() {
  // create your canvas and define size here it's set to 500 x 500px you can also set any static shapes that won't need to be drawn here.
  createCanvas(500, 500);
}

function draw() {
  runGodZillaAttacks();
}

// use of a conditional statement, and
// use of a loop, and
// use of a function that you write and call in the code.

// What you draw is up to you, but feel free to use these ideas as inspiration:

// A city skyline that features some sort of movement –  
// - clouds in the sky, cars on the street, etc.
// An animation featuring 
// - a rising sun 
// - and a following sunset.
// Abstract art
//  - that uses random numbers and loops to determine the placement and size of shapes and objects.
setColor = (rgbObj) => {
  color(rgbObj.r, rgbObj.g, rgbObj.b)
}

setFill = (rgbObj) => {
  fill(rgbObj.r, rgbObj.g, rgbObj.b);
}

runGodZillaAttacks = () => {
  setBackground();
  drawSkyline();
  drawClouds();
}

// This project will do the following
// - a city to be moving oposit directions like godzilla is walking
// set background
function setBackground() {
  // https://processing.org/reference/background_.html
  // relative link
  // img = loadImage("background.jpg");
  background(0);
}

var Building = function(config) {
  this.x = config.x;
  this.y = config.y;
  this.h = config.h; 
  this.w = this.h/2; 
  this.bg = config.bg;

} 
Building.prototype.draw = function(){
  //rect(x, y, w, h)
  setFill(this.bg);
  rect(this.x, this.y, this.w, this.h);
  setFill({
    r: 250,
    g: 250,
    b: 250,
  });
  var padding = 6;
  var windowW = this.w/4 - padding; 
  var windowH = this.h/5 - padding; 
  for (var i = 0; i < 5; i++) {
    // rows
    for (var j = 0; j < 4; j++) {
      // column
      // rect(x, y, width, height, radius)
      rect(this.x + (j * (windowW+padding)), this.y + (i * (windowH+padding)) + 2, windowW, windowH);
    }
  } 
  // take width / 4 

}
var Cloud = function(config) {
  // when creating cloud we think of rect
  this.x = config.x;
  this.y = config.y;
  this.width = config.w;
  this.height = config.w / 2;
  this.color = config.color;

}

Cloud.prototype.draw = function() {
  // create big ellipse inside of constraints in ceter
  // takes up height
  // https://processing.org/reference/circle_.html
  setFill(this.color);
  noStroke();
  //center circle
  var pCircleX = this.x+(this.width/2);
  var pCircleY = this.y+(this.height/2);
  var pCicrlceH = this.height;
  circle(pCircleX, pCircleY, pCicrlceH);
  // cicle on left
  circle(pCircleX-(pCicrlceH/3), 
    pCircleY+(pCicrlceH/4),
    pCicrlceH/1.5);
  // cirlce on right
  circle(pCircleX+(pCicrlceH/2), 
    pCircleY+(pCicrlceH/12),
    pCicrlceH/1.5);
}

// put the cloudds
function drawClouds() {
  var clouds = [
    {
      x: 40,
      y: 50,
      w: 100,
      color: teal,
    },
    {
      x: 100,
      y: 50,
      w: 200,
      color: white,
    },
    {
      x: 300,
      y: 50,
      w: 100,
      color: teal,
    }
  ];
  for (var i = 0; i <  clouds.length; i++) {
    console.log(clouds[i]);
    var cloud = new Cloud(clouds[i]);
    cloud.draw();
  };

  new Building({
    x : 100,
    y : 200,
    h : 200,
    bg : {
      r: 50,
      g: 50,
      b: 50
    }
  }).draw();
  new Building({
    x : 200,
    y : 250,
    h : 150,
    bg : {
      r: 100,
      g: 100,
      b: 100
    }
  }).draw();
}
// draw skyline
function drawSkyline(){

}
// draw road
function drawRoad(){

}
// draw Godzilla
function drawGozilla(){

}
// draw people
function drawPeople(){

}
  // - somethin poping up at a certain time from the back ground
  // - it runs in a loop
  // - people move on mouse over
  // - dark grey clouds moving in the background
  // - clouds moving same direction as godzilla
  // - road, gozilla ontop
