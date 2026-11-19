class Character extends MovableObject {
  x = 100;
  y = 200;
  height = 300;
  width = 300;

  constructor() {
    super().loadImage("img/1_sharkie/1_idle/1.png");
  }

  moveUp() {}
}
