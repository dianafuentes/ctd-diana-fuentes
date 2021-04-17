// declare any variables you need here.
// var x, y, etc..
// you will see setup and draw is not definied or used warnings and other warnings in your console at the bottom right. This is a glitch in how codesandbox loads the libraries and methods from p5. All is well.

function setup() {
  // create your canvas and define size here it's set to 500 x 500px you can also set any static shapes that won't need to be drawn here.
  createCanvas(500, 500);
}

function draw() {
  //call your functions and do your drawing here.
  // please erase code below once you are working.
  // background(10);
  // fill(255, 255, 255, 255);
  // ellipse(30, 30, 30, 30);
  // twoCircles();
  runGodZillaAttacks();
}

// write functions here that are called in your setup or draw function. please remove this one.
const twoCircles = () => {
  fill(255, 0, 0);
  ellipse(10, 10, 10, 10);
  fill(0, 255, 0);
  ellipse(20, 20, 20, 20);
};

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
runGodZillaAttacks = () => {
  setBackground();
}

// This project will do the following
// - a city to be moving oposit directions like godzilla is walking
// set background
function setBackground() {
  // https://processing.org/reference/background_.html
  // relative link
  img = loadImage("images/background.jpg");
  background(img);
}
// put the cloudds
function drawClouds() {
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
