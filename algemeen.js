let score = 0;
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

  if (frameCount % 100 == 5 && frameCount >= 20) {
    score++;
  }

  pipes.forEach((p) => {
    p.show();
    p.update();
    playing = true;
    if(p.hit(bird)) {
      console.log("hit");
      strokeWeight(8);
      rectMode(CENTER);
      fill(255);
      rect(width / 2, height / 2, width - 80, 80);
      fill(0);
      text("Score: " +
        score, width / 3.3, height / 1.9);
      playing = false;
      noLoop();
    }
  });

  if (playing) {
    textSize(50);
    text(score, width / 2, height / 5,);
}

}
function keyPressed() {
  if (key == " ") {
    bird.up();
  }
}