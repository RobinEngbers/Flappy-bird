class Pipe {
  constructor(top, x, w, speed, show, update, gap, min_height, max_height, offscreen) {
    this.x = width;
    this.w = 90;
    this.gap = 120;
    this.min_height = 100;
    this.max_height = height - this.min_height - this.gap;
    this.top = floor(random(this.min_height, this.max_height));
    this.speed = 3;

    this.show = function() {
      fill(0, 255, 0);
      rect(this.x, 0, this.w, this.top);

      fill(0, 255, 0);
      let height_b = height - this.gap - this.top;
      let y_b = height - height_b;
      rect(this.x, y_b, this.w, height_b);
    }

    this.offscreen = function() {
        if (this.x + this.w + this.speed < 0) {
        return true;
      }
      return false;
    }

    this.update = function() {
      this.x -= this.speed;
    }
  }
} 