var col;
var r= 0;
var b = 255;

var circle = {
    diameter : 50,
    x : 10,
    y : 300
};

function setup() {
    createCanvas(459, 360);

}

function draw() {
    r = map(mouseX, 0, 459, 0, 255);
    b = map(mouseX, 0, 459, 255, 0);
    background(r,0,b);
    fill(250, 200 ,200);
    ellipse(mouseX,circle.y,circle.diameter, circle.diameter);
}

