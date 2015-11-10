// this is me trying to make a for loop
var i = 4;
var len = hexagon.length;
var text = "";
for (; i < len; i++) { 
    text += hexagon[i] + "<br>";
}

for (i = 0; i < hexagon.length; i++) { 
    text += hexagon[i] + "<br>";
}

// This is an attempt to make the bees swarm around
var balls;

function setup() {
    //window width and window height
	createCanvas(1250px, 357px);

	// create a collection of balls
	balls = [];
	for (i = 0; i < 10; i++) {
		balls[i] = new Ball();
	}
}
function draw() {
	background(125, 125, 125);

	strokeWeight(4);

	// tell each ball to move and draw itself
	for (i = 0; i < balls.length; i++) {
		balls[i].step();
		balls[i].draw();
	}
}
// Define the idea of a "ball", including its position, speed, and how it behaves.
var Ball = function() {
	console.log("Creating a Ball.");
	this.x = width * .5;
	this.y = height * .5;
	this.speedX = random(-10, 10);
	this.speedY = random(-10, 10);
}

Ball.prototype.step = function() {
	this.x += this.speedX;
	this.y += this.speedY;
	if (this.x < 25) this.speedX = abs(this.speedX);
	if (this.y < 25) this.speedY = abs(this.speedY);
	if (this.x > width - 25) this.speedX = -abs(this.speedX);
	if (this.y > height - 25) this.speedY = -abs(this.speedY);
}

Ball.prototype.draw = function() {
	fill(225, 150, 150);
	ellipse(this.x, this.y, 50, 50);
}