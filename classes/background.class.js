class BackgroundObject extends MovableObject {
    x = 0;
    y = 0;
    width = 900;
    height = 480;
    constructor(path) {
    super().loadImage(path);
  }
}
