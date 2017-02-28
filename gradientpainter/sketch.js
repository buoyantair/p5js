var pageHeight = window.innerHeight;
var pageWidth = window.innerHeight;

function setup() {
    createCanvas(pageWidth, pageHeight);

    background(161,255,254);

    fill(229, 116, 99);
    stroke(0,0);

}

c = {
    r: 229,
    g: 116,
    b: 99
}

function draw() {
    fill(c.r,c.g,c.b);
    ellipse(mouseX,mouseY,50,50);
    var r = random(0,100);
    if (r > 50){
        c.r += 1;
        c.g += 1;
        c.b += 1;
    } else{
        c.r -= 1;
        c.g -= 1;
        c.b -= 1;
    }
}

function mousePressed(){
    background(random(0,255), random(0,255), random(0,255));
    c.r = random(0,255);
    c.g = random(0,255);
    c.b = random(0,255);
}
