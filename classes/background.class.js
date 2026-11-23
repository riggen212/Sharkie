class BackgroundObject extends MovableObject {
  y = 0;
  width = 900;
  height = 480;

  constructor(path, x, otherDirection) {
    super().loadImage(path);
    this.x = x;
    this.otherDirection = otherDirection;
  }
}
