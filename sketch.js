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
  background(10);
  fill(255, 255, 255, 255);
  ellipse(30, 30, 30, 30);
  twoCircles();
}

// write functions here that are called in your setup or draw function. please remove this one.
const twoCircles = () => {
  fill(255, 0, 0);
  ellipse(10, 10, 10, 10);
  fill(0, 255, 0);
  ellipse(20, 20, 20, 20);
};
