class Fish extends MovableObject {
  height = 120;
  width = 120;

  MOVEMENT_PUFFER_IMAGES = [
    "img/2_enemy/1_puffer_fish/1_swim/1.swim1.png",
    "img/2_enemy/1_puffer_fish/1_swim/1.swim2.png",
    "img/2_enemy/1_puffer_fish/1_swim/1.swim3.png",
    "img/2_enemy/1_puffer_fish/1_swim/1.swim4.png",
    "img/2_enemy/1_puffer_fish/1_swim/1.swim5.png",
  ];

  constructor() {
    super().loadImage("img/2_enemy/1_puffer_fish/1_swim/1.swim1.png");
    this.loadImages(this.MOVEMENT_PUFFER_IMAGES);
    this.x = 400 + Math.random() * 500;
    this.y = 20 + Math.random() * 220;
    this.speed = 0.3 + Math.random() * 0.5;
    
    this.animate();
  }

  animate() {
    this.moveLeft();
    setInterval(() => {
      let index = this.currentImage % this.MOVEMENT_PUFFER_IMAGES.length;
      let path = this.MOVEMENT_PUFFER_IMAGES[index];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 160);
  }
}
