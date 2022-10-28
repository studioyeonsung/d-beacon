function setup() {
  createCanvas(windowWidth, windowHeight);
  // noStroke();

}

function draw() {
  background(0);
  //make the ellipse follow your mouse
  // translate(width / 2, height / 2);
  stroke('#FFFAFA');
  strokeWeight(0.75);
  setLineDash([5, 5]);
  line(mouseX + width/1000, 0, mouseX - width/1000, height);
  line(0, mouseY + height/1000, width, mouseY - height/1000);

  noStroke();
  ellipse(mouseX,mouseY,25,25);

}

function setLineDash(list) {
  drawingContext.setLineDash(list);
}
