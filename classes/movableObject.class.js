class MovableObject {
  x;
  y;
  img;

  height;
  width;

  moveRight() {}

  moveLeft() {}

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }
}
