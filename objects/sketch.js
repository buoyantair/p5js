var r = 218;
var g = 160;
var b = 221;
var col;

var circle = {
    diameter : 50,
    x : 10,
    y : 300
};

function setup() {
    createCanvas(459, 360);

}

function draw() {
    background(r,g,b);
    fill(250, 200 ,200);
    col = mouseX;
    
    if (mouseX < 100){
        background(col);
    } else if(mouseX > 350){
        background(col);
    }
    ellipse(mouseX,circle.y,circle.diameter, circle.diameter);
}

