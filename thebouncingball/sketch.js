var pageHeight = window.innerHeight;
var pageWidth = window.innerHeight;
var x = 0;



function setup() {
    createCanvas(pageWidth, pageHeight);
}


function draw() {
    background(0);
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(x, 200, 100, 100);

    if (x == pageWidth){
        x= 0;
    } else{
        x+= 3;
    }
}
