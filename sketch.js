// Practice code
// by Matias Puputti
// This code is based on everything i learned from
// Daniel Shiffman (The coding Train)
// https://www.youtube.com/user/shiffman
//19.6.2019

  var Bad1 = {
  x : 15,
  y : 0,
  speed : 10,
  Points :0
};

  var Bad2 = {
    x : 0,
    y : 0,
    speed : 10,
    Points :0
  };

  var Ball = {
    x : 0,
    y : 0,
    speedx : 10,
    speedy : 10,
    dirvas : false
  };
var rand  = 0;
var ctx;
function setup() {
    frameRate(60);
    // put setup code here
    rand = Math.floor((Math.random() * 2) + 1);
    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.position(0, 0);
    background(0, 0, 0);
    ctx = canvas.getContext("2d");

    Bad1.y = windowHeight / 2;
    Bad2.y = windowHeight / 2;
    Bad2.x = windowWidth - 15;
    Ball.x = windowWidth / 2;
    Ball.y = windowHeight / 2;

    if (rand == 1) {
      Ball.speedx = Ball.speedx * -1;
      Ball.dirvas = true;
    }
    if (rand == 2) {
      Ball.speedx = Ball.speedx * +1;
      Ball.dirvas = false;
    }
}
function draw() {
  background(0, 0, 0);
  strokeWeight(10);
  stroke(255);
  fill(0, 0, 0);
  line(windowWidth / 2, windowHeight, windowWidth / 2, 0);

  ctx.font = "100px sans-serif";
  ctx.strokeText(Bad1.Points, windowWidth / 3, windowHeight / 6);
  ctx.strokeText(Bad2.Points, (windowWidth / 3) * 2, windowHeight / 6);

  rectMode(CENTER);
  strokeWeight(0);
  fill(0, 255, 255);
  rect(Bad1.x, Bad1.y, 15, windowHeight / 4);
  rect(Bad2.x, Bad2.y, 15, windowHeight / 4);
  circle(Ball.x, Ball.y, 60)

    //Makes the ball move at the speed set in the ball.speed variables
  Ball.x = Ball.x + Ball.speedx;
  Ball.y = Ball.y + Ball.speedy;

    // Check if the ball is further than the pong padle, add point to the opponent,
    // reset the ball to the center of the screen
  if (Ball.x < -160) {
    Bad2.Points =Bad2.Points + 1;
    Ball.x = windowWidth / 2;
    Ball.y = windowHeight / 2;
    //Ball.speedx = Ball.speedx * -1;
    //Ball.dirvas = !Ball.dirvas;
    Ball.speedx = Ball.speedx + 2;
    Ball.speedy = Ball.speedy + 1;
}

if (Ball.x > windowWidth + 160) {
  Bad1.Points =Bad1.Points +1;
  Ball.x = windowWidth / 2;
  Ball.y = windowHeight / 2;
  //Ball.speedx = Ball.speedx * -1;
  //Ball.dirvas = !Ball.dirvas;
  Ball.speedx = Ball.speedx + 2;
  Ball.speedy = Ball.speedy + 1;
}

if (Ball.y < 45) {
  Ball.speedy = Ball.speedy * -1;
}

if (Ball.y > windowHeight - 45) {
  Ball.speedy = Ball.speedy * -1;
}

if (Ball.dirvas && Ball.x < 45 && Ball.x > 30 && Ball.y < Bad1.y + windowHeight / 8 && Ball.y > Bad1.y - windowHeight / 8) {
  Ball.speedx = Ball.speedx * -1;
  Ball.dirvas = false;
    if (Ball.y <  Bad1.y + windowHeight / 8 && Ball.y >  Bad1.y && Ball.speedy < 0) {
    Ball.speedy = Ball.speedy * -1;
    }
    if (Ball.y >  Bad1.y - windowHeight / 8 && Ball.y <  Bad1.y && Ball.speedy > 0) {
    Ball.speedy = Ball.speedy * -1;
    }
}

if (!Ball.dirvas && Ball.x > windowWidth - 45 && Ball.x < windowWidth - 15 && Ball.y < Bad2.y + windowHeight / 8 && Ball.y > Bad2.y - windowHeight / 8) {
  Ball.speedx = Ball.speedx * -1;
  Ball.dirvas = true;
    if (Ball.y <  Bad2.y + windowHeight / 8 && Ball.y >  Bad2.y && Ball.speedy < 0) {
    Ball.speedy = Ball.speedy * -1;
    }
    if (Ball.y >  Bad2.y - windowHeight / 8 && Ball.y <  Bad2.y && Ball.speedy > 0) {
    Ball.speedy = Ball.speedy * -1;
    }
}

  if  (keyIsDown(87) && (Bad1.y > windowHeight / 8)) {
    Bad1.y = Bad1.y - Bad1.speed;
  }
  if (keyIsDown(83) && (Bad1.y < (windowHeight - windowHeight / 8))) {
    Bad1.y = Bad1.y + Bad1.speed;
  }

  if  (keyIsDown(38) && (Bad2.y > windowHeight / 8)) {
    Bad2.y = Bad2.y - Bad2.speed;
  }
  if (keyIsDown(40) && (Bad2.y < (windowHeight - windowHeight / 8))) {
    Bad2.y = Bad2.y + Bad2.speed;
  }
                }
