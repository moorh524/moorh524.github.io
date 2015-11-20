// $(window).keypress(function(event) {
// 	console.log(event);
// 	//user press r 
// 	if(event.keyCode == 114) {
// 		$("body").css("background-color","red");
// 		}
// 	//user press g
// 		console.log(event);
// 		if(event.keyCode == 103) {
// 		$("body").css("background-color","lime");
// 		}
// 	//user press b 
// 		console.log(event);
// 		if(event.keyCode == 98) {
// 		$("body").css("background-color","blue");
// 		}
// });

// $(window).resize(function(event) {
// 	console.log(event); 
// 	if ($(window).width() > 800) {
// 		$(".button").css("width","200px")
// 	}
// 	});

var balls;

function setup() {
	createCanvas(displayWidth, displayHeight);
	


	// create a collection of balls
	balls = [];
	for (i = 0; i < 10; i++) {
		balls[i] = new Ball();
	}
}

function draw() {
	background(230, 141, 33);

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
	console.log("this x: " + this.x);
	this.speedX = random(-5, 10);
	this.speedY = random(-10, 10);
	console.log(this.speedX);
	console.log(this.speedY);
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
	fill(153, 0, 0);
	ellipse(this.x, this.y, 50, 50);
}

console.log("hello");