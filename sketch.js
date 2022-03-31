var y = 0;
var velY = 12;
var x = 0;
var velX = 12;

function setup() {
	createCanvas(200, 200);
	}

function draw() {
	background('rgba(54, 29, 46, 0.45)');
	noStroke();
	fill('rgba(0,255,0, 0.8)');
	
	ellipse(width/2, y, 20, 20);
	y = y + velY;
	if (y > height || y < 1){
		velY *= -1;
	}
	
	ellipse(x, height/2, 20, 20);
	x = x + velX;
	if (x > width || x < 1){
		velX *= -1;
	}
}
