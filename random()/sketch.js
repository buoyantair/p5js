

var pageHeight = window.innerHeight;
var pageWidth = window.innerHeight;
var spot = {
    x: 100,
    y: 50,
    scale: 100
}

var col = {
    r: 255,
    g: 0,
    b: 0
};
function setup(){
    createCanvas(pageWidth, pageHeight);
    background(0);
};

function draw() {
    col.r = random(100,255);
    col.g = random(0,255);
    col.b = random(60,82);
    noStroke();
    spot.x = random(0,width);
    spot.y = random(0,height);
    spot.scale = random(20,100);
    fill(col.r, col.g ,col.b, 100);
    ellipse(spot.x, spot.y, spot.scale, spot.scale);
};
