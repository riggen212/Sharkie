class Character extends MovableObject {
  x = 100;
  y = 200;
  height = 300;
  width = 300;
  CHARACTER_WALKING_IMAGES = [
    "img/1_sharkie/1_idle/1.png",
    "img/1_sharkie/1_idle/2.png",
    "img/1_sharkie/1_idle/3.png",
    "img/1_sharkie/1_idle/4.png",
    "img/1_sharkie/1_idle/5.png",
    "img/1_sharkie/1_idle/6.png",
    "img/1_sharkie/1_idle/7.png",
    "img/1_sharkie/1_idle/8.png",
    "img/1_sharkie/1_idle/9.png",
    "img/1_sharkie/1_idle/10.png",
    "img/1_sharkie/1_idle/11.png",
    "img/1_sharkie/1_idle/12.png",
    "img/1_sharkie/1_idle/13.png",
    "img/1_sharkie/1_idle/14.png",
    "img/1_sharkie/1_idle/15.png",
    "img/1_sharkie/1_idle/16.png",
    "img/1_sharkie/1_idle/17.png",
    "img/1_sharkie/1_idle/18.png",
  ];
  world;

  constructor() {
    super().loadImage("img/1_sharkie/1_idle/1.png");
    this.loadImages(this.CHARACTER_WALKING_IMAGES);
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (this.world.keyboard.RIGHT) {
        let index = this.currentImage % this.CHARACTER_WALKING_IMAGES.length;
        let path = this.CHARACTER_WALKING_IMAGES[index];
        this.img = this.imageCache[path];
        this.currentImage++;
      }
    }, 160);
  }

  moveUp() {}
}
