function setup() {
  createCanvas(600, 400);
}
// draw function function draw() {
 ellipse (110,140,20,70); // purple circle

  function draw() {
    fill (300); 

  //this is a call to myShape()
  myShape(width / 2, height / 10, 50);
  myShape(100, 200, 20, 40);
  myShape(400, 150, 30, 45); 
}

function myShape(x, y, w, h) {
  // make this function more interesting
  fill(100, 0, 200); 
  ellipse(x, y, w, h);
  rectMode(CENTER);
  fill(0); 
  rect(x, y, h/2, w, h);
}