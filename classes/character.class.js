class Character extends MovableObject {
    x = 100;
    y = 0;
    height = 300;
    width = 300;
    speed = 4;

    moveUp = false;

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
            if (this.world.keyboard.RIGHT && this.x + this.speed <= levelOne.levelWidth * 1800 - (this.world.canvas.width - 100)) {
                this.x += this.speed;
                this.otherDirection = false;
                this.world.cameraOffsetX = -this.x + 100;
            }

            if (this.world.keyboard.LEFT && this.x - this.speed >= 100) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.world.cameraOffsetX = -this.x + 100;
            }

            if (this.world.keyboard.UP && this.y + this.speed >= 0 - 130) {
                this.y -= this.speed;
            }

            if (this.world.keyboard.DOWN && this.y + this.speed <= this.world.canvas.height - this.height + 60) {
                this.y += this.speed;
            }
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
                this.animateObject(this.CHARACTER_WALKING_IMAGES);
            }
        }, 100);
    }
}
