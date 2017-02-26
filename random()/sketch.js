var col = {
    r: 255,
    g: 0,
    b: 0
};
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
    background(r,0,b);
    fill(250, 200 ,200);
    ellipse(mouseX,circle.y,circle.diameter, circle.diameter);
}

