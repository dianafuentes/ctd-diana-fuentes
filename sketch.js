// declare any variables you need here.
// var x, y, etc..
// you will see setup and draw is not definied or used warnings and other warnings in your console at the bottom right. This is a glitch in how codesandbox loads the libraries and methods from p5. All is well.
var drawnBuildings = [];

var whiteColor = {
  r : 250,
  g : 250,
  b : 250,
}
var tealColor = {
  r : 0,
  g : 255,
  b : 196,
}
var grayColor = {
  r : 160,
  g : 160,
  b : 160,
}
var blueColor = {
  r : 51,
  g : 51,
  b : 255,
}
var redColor = {
  r : 255,
  g : 0,
  b : 0,
}
var blackColor = {
  r: 0,
  g: 0,
  b: 0,
}
var hotPinkColor = {
  r: 255,
  g: 0,
  b: 255,
}
var lightPurpleColor = {
  r: 204, 
  g: 155, 
  b: 255,
}
var greenLimeColor = {
  r: 0,
  g: 255, 
  b: 0,
} 

// this runs only once on load
function setup() {
  // create your canvas and define size here it's set to 500 x 500px you can also set any static shapes that won't need to be drawn here.
  createCanvas(500, 500);
  runGodZillaAttacks();
}

// this runs on a loop
function draw() {
  skylineInteraction();
}

// use of a conditional statement

// An animation featuring
// - a rising sun
// - and a following sunset.
// Abstract art
//  - that uses random numbers and loops to determine the placement and size of shapes and objects.

// helper function
// an arrow function, does not have "this"
setColor = (rgbObj) => {
  color(rgbObj.r, rgbObj.g, rgbObj.b)
}

// helper function
setFill = (rgbObj) => {
  fill(rgbObj.r, rgbObj.g, rgbObj.b);
}

runGodZillaAttacks = () => {
  setBackground();
  drawRoad();
  drawCars();
  drawClouds();
  drawSkyline();
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

function drawRoad(){
  var y = 440;
  var w = 100;
  var h = 20;
//Draw road
  setFill(grayColor);
  rect(0, 350, 500, 150);
//Draw dashed(dotted) line
  setFill(whiteColor);
  rect(10, y, w, h);
  rect(200, y, w, h);
  rect(390, y, w, h);
}

//CAR START
var Car = function(config) {
  this.x = config.x;
  this.y = config.y;
  this.w = config.w;
  this.h = config.h;
  this.carColor = config.carColor;
  //call the buildCar function on new car create

  this.buildCar = function() {
    setFill(this.carColor);
   
    rect(this.x, this.y, this.w, this.h);
    //adds wheels
    this.addWheels();
  }

  // private method
  this.addWheels = function() {
    var wheelSize = 20;
    var leftWheelX = this.x;
    var leftWheelY = this.y + this.h;
    var rightWheelX = this.x + this.w;
    var rightWheelY = this.y + this.h;

    setFill(blackColor);
    // left wheel
    circle(leftWheelX, leftWheelY, wheelSize);
    // right wheel
    circle(rightWheelX, rightWheelY, wheelSize);
  }
  this.buildCar();
}

// public
Car.prototype.drive = function(x) {
  this.x = x;
}

// draw cars

function drawCars(){
  var yPosition = 410;
  var width = 50;
  var height = 20;

  var movingCars = [
    {
      x : 10,
      y: yPosition, 
      w: width,
      h: height,
      carColor:hotPinkColor
    },
    { 
      x: 200, 
      y: yPosition, 
      w: width, 
      h: height,
      carColor:lightPurpleColor 
    },
    { 
      x: 400, 
      y: yPosition, 
      w: width, 
      h: height,
      carColor:greenLimeColor 
    },
    { 
      x: 150, 
      y: 465, 
      w: width, 
      h: height,
      carColor:greenLimeColor 
    },
  ]

  for (var i = 0; i < movingCars.length; i++){
    var currentItem = movingCars[i];
    var car = new Car(currentItem);
  }
} 
//CAR END

//Cloud start
// cloud class to create clouds
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
  var middleCircleX = this.x+(this.width/2);
  var middleCircleY = this.y+(this.height/2);
  var middleCicrlceH = this.height;
  circle(middleCircleX, middleCircleY, middleCicrlceH);
  // cicle on left
  circle(middleCircleX-(middleCicrlceH/3),
    middleCircleY+(middleCicrlceH/4),
    middleCicrlceH/1.5);
  // cirlce on right
  circle(middleCircleX+(middleCicrlceH/2),
    middleCircleY+(middleCicrlceH/12),
    middleCicrlceH/1.5);
}

// put the cloudds
function drawClouds() {
  var clouds = [
    {
      x: 5,
      y: 20,
      w: 150,
      color: grayColor,
    },
    {
      x: 100,
      y: 50,
      w: 200,
      color: whiteColor,
    },
    {
      x: 350,
      y: 20,
      w: 200,
      color: whiteColor,
    },
    {
      x: 280,
      y: 20,
      w: 100,
      color: grayColor,
    }
  ];
  for (var i = 0; i <  clouds.length; i++) {
    // console.log(clouds[i]);
    var cloud = new Cloud(clouds[i]);
    cloud.draw();
  };
} 
//Cloud End

// For Buildings
// this is a function that creates a class
var Building = function(config) {
  this.x = config.x;
  this.y = config.y;
  this.h = config.h;
  this.w = this.h/2;
  this.bg = config.bg;
}

Building.prototype.updatecolor = function(colorObj){
  this.bg = colorObj;
  this.draw();
}

Building.prototype.drawBuilding = function() {
  //rect(x, y, w, h)
  // console.log('this.bg', this.bg);
  setFill(this.bg);
  rect(this.x, this.y, this.w, this.h);
}

Building.prototype.drawWindows = function() {
  // set to whiteColor
  setFill({
    r: 250,
    g: 250,
    b: 250,
  });
  var padding = 6;
  var windowW = this.w/4 - padding;
  var windowH = this.h/5 - padding;
  // rows and columns for windows
  for (var i = 0; i < 5; i++) {
    // rows
    for (var j = 0; j < 4; j++) {
      // column
      // create windows
      rect(this.x + (j * (windowW+padding)), this.y + (i * (windowH+padding)) + 2, windowW, windowH);
    }
  }
}

Building.prototype.draw = function(){
  this.drawBuilding();
  this.drawWindows();
  // take width / 4
}


// draw skyline
function drawSkyline(){

  var tallest = 250;
  var medium = 200;
  var small = 100;
  var buildings = [
    {
      x : 0,
      y : 150,
      h : tallest,
      bg: blueColor,
    },
    {
      x : 125,
      y : 200,
      h : medium,
      bg: grayColor,
    },
    {
      x : 225,
      y : 300,
      h : small,
      bg: redColor,
    },
    {
      x : 275,
      y : 150,
      h : tallest,
      bg: redColor,
    },
    {
      x : 400,
      y : 200,
      h : medium,
      bg: grayColor,
    },
  ];
  for (var i = 0; i <  buildings.length; i++) {
    // console.log(i, buildings[i]);
    var building = new Building(buildings[i]);
    building.draw();
    drawnBuildings.push(building);
  };
}
// END: For Buildings

function skylineInteraction(){
  if (mouseIsPressed) {
    for (var i = 0; i < drawnBuildings.length; i++) {
      var currentItem = drawnBuildings[i];
      if (mouseX > currentItem.x && mouseX < (currentItem.x + currentItem.w) && mouseY > currentItem.y && mouseY < (currentItem.y + currentItem.h)) {
        currentItem.updatecolor({
          r: floor(random(0,255)),
          g: floor(random(0,255)),
          b: floor(random(0,255))
        })
      }
    }
  }   
}; 

// draw Godzilla
function drawGozilla(){

}
  // - somethin poping up at a certain time from the back ground
  // - it runs in a loop
  // - people move on mouse over
  // - dark grey clouds moving in the background
  // - clouds moving same direction as godzilla
  // - road, gozilla ontop
