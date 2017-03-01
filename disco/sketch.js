var pageHeight = window.innerHeight;
var pageWidth = window.innerHeight;
var s = 100;
function setup() {
    createCanvas(pageWidth, pageHeight);
    frameRate(1);
}


function draw() {
    background(0);
    stroke(255);
    strokeWeight(4);

    for (var x =0; x <= width; x+= s){
        for (var y =0; y <= width; y+= s){
            fill(random(255),random(255), random(255));
            rect(x,y, s, s);

        }
    }
}
