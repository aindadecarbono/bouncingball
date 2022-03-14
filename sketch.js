var y = 0;
var velY = 8;

function setup() {
	createCanvas(windowWidth, windowHeight);
	
}

function draw() {
	background(255);
	ellipse(windowWidth/2, y, 20, 20);
	y = y + velY;
	if (y > height || y < 1){
		velY *= -1;
	}
}
