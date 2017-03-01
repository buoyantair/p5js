var pageHeight = window.innerHeight;
var pageWidth = window.innerHeight;

var ball = {
    x: 0,
    y: 0,
    xspeed: 10,
    yspeed: -7
}


function setup() {
    createCanvas(pageWidth, pageHeight);
}

function draw() {
    background(0);


    if (ball.x > width || ball.x < 0){
        ball.xspeed = ball.xspeed * -1;
    }

    if (ball.y > height || ball.y < 0){
        ball.yspeed = ball.yspeed * -1;
    }


    ball.x = ball.x + ball.xspeed;
    ball.y = ball.y + ball.yspeed;

    ellipse(ball.x, ball.y, 100, 100);
}
