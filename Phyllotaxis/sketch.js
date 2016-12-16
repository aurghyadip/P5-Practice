var  n = 0;
var c = 4;

var start = 0;

function setup() {
  createCanvas(400,400);
  background(0);
  angleMode(DEGREES);
  colorMode(HSB,360,255,255);
}

function draw() {
  //background(0);
  translate(width/2,height/2);
  rotate(n*0.3);

  for (var i = 0; i < n; i++) {
    var a = i * 137.5;
    var r = c * sqrt(n);

    var x = r * cos(a);// + width/2;
    var y = r * sin(a);// + height/2;
    hu = i/3.0 % 360;

    fill(hu, 255, 255);
    noStroke();
    ellipse(x,y, 4, 4);

  }

  n += 5;
  start += 5;
}
