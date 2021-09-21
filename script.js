var bird;

function Bird() {
  this.y = width/2;
  this.x = 20;

  this.gravity = 0.2;
  this.lift = -5
  this.vy = 0;

  this.showBird = function() {
    fill("yellow");
    ellipse(this.x, this.y,20, 20);
  }

  this.up = function() {
    this.vy += this.lift;
  }

  this.fall = function() {
    this.vy += this.gravity;
    this.y += this.vy;

    if (this.y > height) {
      this.y = height;
      this.vy = 0;
    }
    
  }
}

function setup() {
	createCanvas(300, 300);
  bird = new Bird();
}

function draw() {
  background(0);
  bird.fall();
  bird.showBird();
}

function keyPressed() {
  if (key == " ") {
    bird.up();
  }
}