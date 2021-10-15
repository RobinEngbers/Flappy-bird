let score = 0;
var bird;
var pipes = [];
playing = false;
var gameState = 0;

function setup() {
  createCanvas(400, 400);
  bird = new Bird();
  pipes.push(new Pipe());
}



function draw() {
  if(gameState == 0){
    startGame();
  } else if(gameState == 1){
    playGame();
  }else if(gameState == 2){
    finishGame();
  }
  function startGame(){
    background(0,255,0);
    textAlign(CENTER);
    textSize(20);
    text("CLICK TO START GAME", width/2,height/2);
  }

  function playGame() {


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
  }
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

function mousePressed(){
  if(gameState == 0){
    gameState += 1;
  }
}