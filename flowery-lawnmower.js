function setup() {
  createCanvas(400, 200);
  colorMode(HSB);
}

var x = 0;
var h = 10;

function draw() {
  stroke(random(60, 70), 100, 90);
  line(x, height-10, x+random(-10, 10), height-10-random(h));
  noStroke();

  x = x + 10;

  if (x > width) {
    x = random(10);
    h = h + 3;
  }

  if (h>=20) {
    fill(random(10,30), 150, 255);
    ellipse(200, 140,40,40);
    fill(random(10,30), 150, 90);
    ellipse(200, 160,20,20);
    fill(random(10,30), 150, 90);
    ellipse(200, 120,20,20);
    ellipse(180, 140,20,20);
    ellipse(220, 140,20,20);
    ellipse(183, 157,20,20);
    ellipse(214, 157,20,20);
    ellipse(183, 157,20,20);
    ellipse(183, 125,20,20);
    ellipse(214, 125,20,20);
    h = 10;
  }

  fill(40, 100, 60);
  rect(0, height-10, width, 10);
}
