  Q1.stroke(random(60, 70), 100, 90);
  line(x, height-10, x+random(-10, 10), height-10-random(h));
  noStroke();

  x = x + 10;
  
  Q2.if (random() > 0.999) {
    fill(255);
    rect(0, 0, width, height-15);
    h = 10;
    It comes only once, when the h=10.
    
  Q3. It is the height of the glass.
  
  Q4. It makes the glass start growing on the ground. It makes the glass growing higher and make sure it can contiune growing.






Q1: Using the same syntax. For example, var=x, and drawing a ellipse should be (circle.x,circle.y,x2,y2)
Q2: The range of RGB, width, or height.
var r=0;
var b=255;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background(220);
  r=map(mouseX,0,300,0,255) ;
  b=map(mouseX,0,600,255,0) ;
  //ellpise
  background(r,0,b);
  fill(250,118,222);
  ellipse (mouseX,200,64,64);
}
Q3: 
