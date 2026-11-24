class MovableObject {
  x;
  y;
  img;
  imageCache = {};
  currentImage = 0;
  speed = 0.5;
  otherDirection = false;

  height;
  width;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(arr) {
    arr.forEach((e) => {
      let img = new Image();
      img.src = e;
      this.imageCache[e] = img;
    });
  }

  animateObject(pictures) {
    let index = this.currentImage % pictures.length;
    let path = pictures[index];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  moveLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
  }
}s
