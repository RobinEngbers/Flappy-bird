var bird;
var pipes = [];
playing = false;

function setup() {
  createCanvas(400, 400);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(img2);
  bird.fall();
  bird.showBird();


  if (frameCount % 100 == 0) {
    console.log("nieuwe pijp!");
    pipes.push(new Pipe());
  }

  pipes.forEach((p) => {
    p.show();
    p.update();
    
    if(p.hit(bird)) {
      console.log("hit");
      strokeWeight(8);
      rectMode(CENTER);
      fill(255);
      rect(width / 2, height / 2, width - 80, 80);
      fill(0);
      text("Score: " +
      bird.score, width / 2, height / 2);
      playing = false;
      noLoop();
    }     
  });

  // for (var i = pipes.length - 1; i < pipes.length; i++) {    
  //   pipes[i].show();
  //   pipes[i].update();
  // }
}
function keyPressed() {
  if (key == " ") {
    bird.up();
  }
}