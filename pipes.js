 class Pipe {
  constructor(top, x, w, speed, show, update, gap, min_height, max_height, hit, pass) {
    this.x = width;
    this.w = 90;
    this.gap = 100;
    this.min_height = 10;
    this.max_height = height - this.min_height - this.gap;
    this.top = floor(random(this.min_height, this.max_height));
    this.speed = 5;
    this.score = 0;
  }
  
  offScreen() {
    if (this.x + this.w + this.speed < 0) {
      return true;
    }
    return false;
  }

  hit(bird) {
    if (bird.x > this.x && bird.x < this.x + this.w) {
      if (bird.y < this.top ||
        bird.y > this.top + this.gap) {
        return true;
      }
    }
    return false;
  }
  
  pass(bird) {
    if (bird.x > this.x + this.w) {
      return true;
    }
    return false;
  }



    show() {
          // fill(0,255, 0);
          // if(this.highlight) {
          //   fill(255,0,0);
          // }
          rect(this.x, 0, this.w, this.top);

          fill(0, 255, 0);
          if(this.highlight) {
            fill(255, 0, 0)
          }
          let height_b = height - this.gap - this.top;
          let y_b = height - height_b;
          rect(this.x, y_b, this.w, height_b);
        }

        update() {
          this.x -= this.speed;
        }
} 