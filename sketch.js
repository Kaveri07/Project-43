var hr, sec, min, secAngle, hrAngle, minAngle;

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(mouseY,mouseX,100);  
  hr = hour();
  sec = second();
  min = minute();

  angleMode(DEGREES);
  secAngle = map(sec-15,0,60,0,360);
  minAngle = map(min-15,0,60,0,360);
  hrAngle = map(hr-3,0,12,0,360);

  push();
  translate(windowWidth/2,windowHeight/2);
  rotate(secAngle);
  stroke(255,0,0);
  strokeWeight(windowHeight/106);
  line(0,0,windowHeight/3,0);
  pop();

  push();
  stroke(255,0,0);
  strokeWeight(windowHeight/106);
  noFill();
  arc(windowWidth/2,windowHeight/2,windowWidth/2.05,windowWidth/2.05,0-90,secAngle);
  pop();

  push();
  translate(windowWidth/2,windowHeight/2);
  rotate(minAngle);
  stroke("yellow");
  strokeWeight(windowHeight/106);
  line(0,0,windowHeight/3.25,0);
  pop();

  push();
  stroke("yellow");
  strokeWeight(windowHeight/106);
  noFill();
  arc(windowWidth/2,windowHeight/2,windowWidth/2.15,windowWidth/2.15,0-90,minAngle);
  pop();

  push();
  translate(windowWidth/2,windowHeight/2);
  rotate(hrAngle);
  stroke("cyan");
  strokeWeight(windowHeight/106);
  line(0,0,windowHeight/4.5,0);
  pop();

  push();
  stroke("cyan");
  strokeWeight(windowHeight/106);
  noFill();
  arc(windowWidth/2,windowHeight/2,windowWidth/2.25,windowWidth/2.25,0-90,hrAngle);
  pop();

  drawSprites();

  textFont("georgia");
  textSize(windowHeight/20);
  fill(255);
  stroke(0);
  strokeWeight(2);
  if(hr <= 12) {
    if(sec < 10) {
      text(hr+":"+min+":0"+sec,windowWidth/7,windowWidth/10)
    } else {
      text(hr+":"+min+":"+sec,windowWidth/7,windowWidth/10);
    }
  } else {
    if(sec < 10) {
      text(hr-12+":"+min+":0"+sec,windowWidth/7,windowWidth/10)
    } else {
      text(hr-12+":"+min+":"+sec,windowWidth/7,windowWidth/10);
    }
  }
}