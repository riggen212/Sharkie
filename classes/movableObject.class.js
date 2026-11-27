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

    speedY = 0;
    acceleration = 0.04;

    applyGravity(world) {
        setInterval(() => {
            if (this.y < 200 && !world.keyboard.UP) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            } else  this.speedY = 0;
        }, 1000 / 25);        
    }

    stopIntro(interval) {
        clearInterval(interval);
    }

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

    animateObject(images) {
        let index = this.currentImage % images.length;
        let path = images[index];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }

    animate(images) {
        this.currentImage = 0;
        setInterval(() => {
            this.animateObject(images);
        }, 160);
    }
}
