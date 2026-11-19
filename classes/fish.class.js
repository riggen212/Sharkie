class Fish extends MovableObject {
  height = 120;
  width = 120;

  constructor() {
    super().loadImage("img/2_enemy/1_puffer_fish/1_swim/1.swim1.png");
    this.x = 400 + Math.random() * 500;
    this.y = 20 + Math.random() * 220;
  }
}
