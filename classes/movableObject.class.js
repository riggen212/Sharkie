class MovableObject {
  x;
  y;
  img;
  imageCache = {};
  currentImage = 0;
  speed = 0.5;

  height;
  width;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(arr) {
    arr.forEach(e => {
      let img = new Image();
      img.src = e;
      this.imageCache[e] = img;
    });
  }

  moveLeft() {
    setInterval (() => {
      this.x -= this.speed;
    }, 1000 / 60)
  }

  moveRight() {

  }
}
