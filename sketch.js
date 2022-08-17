// https://editor.p5js.org/cy1503/sketches/f-4AAaeuI
// https://www.youtube.com/watch?v=s7CTmJt0NfI
var time, theta = 0;
var frames = 1000,
    num = 50,
    num2 = 1;
//var rs;

function setup() {
    createCanvas(windowWidth, windowHeight);
    smooth(8);
    noStroke();
    rs = random(10000);
    // frameRate(300);
}

function draw() {
    randomSeed(rs);
    background("white");
    time = (frameCount % frames) / float(frames);
    for (var i = 0; i < num; i++) {
        drawBubble(i);
    }
    theta += TWO_PI / frames;
    drawingContext.filter = 'blur(8px)';
}

function drawBubble(i) {
    var x = random(width);
    var y = random(height);
    var sc = random(1, 3);
    //var rotation = random(-.01, 0.1);
    var m = map(sin( theta+(TWO_PI / num) * i), -1, 1, 0.5, 1.5);
    var sz = random(20, 50) * m;
    push();
    scale(sc);
    translate(x, y);
    fill('rgba(0,0,0,0.2)');
    text("connecting",200,);
    ellipse(0, time * height - height, sz, sz);
    ellipse(0, time * height, sz, sz)
    pop();

}
