  var bird;
var pipes = [];

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
    
    if(p.hits(bird)) {
      console.log("hit");
      pipes.push(0);
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