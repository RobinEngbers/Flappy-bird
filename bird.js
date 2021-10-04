
let img

function preload() {
  img = loadImage("./images/images.png")
  img2 = loadImage("./images/flappybird.png")
}

class Bird {
  constructor(y, x, gravity, lift, vy, showBird, up, fall) {
    this.y = width/2;
    this.x = 20;

    this.gravity = 0.1;
    this.lift = -5;
    this.vy = 0;
  }
    showBird() {
      //ellipse(this.x, this.y, 20, 20)
      image(img, this.x, this.y, 40, 40);
    }

    up() {
      this.vy += this.lift;
    }

    fall() {
      this.vy += this.gravity;
      this.y += this.vy;

      if (this.y > height) {
        this.y = height - 35;
        this.vy = 0,2;
      }
      
      if (this.y < 0) {
        this.y = 0;
        this.vy = 0;
      }
    }
    }