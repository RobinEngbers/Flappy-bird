var bird;

let img

function preload() {
  img = loadImage("./images/images.png")
}


function Bird() {
  this.y = width/2;
  this.x = 20;

  this.gravity = 0.1;
  this.lift = -5
  this.vy = 0;

  this.showBird = function() {
    //fill("yellow");
    //ellipse(this.x, this.y, 20, 20);
    image(img, this.x, this.y, 50, 50);   
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
	createCanvas(500, 500,);
  bird = new Bird();
}

function draw() {
  background('green');
  bird.fall();
  bird.showBird();
}

function keyPressed() {
  if (key == " ") {
    bird.up();
  }
}