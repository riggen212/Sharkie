class Endboss extends MovableObject {
    x = 600;
    y = 0;
    height = 300;
    width = 300;
    speed = 4;

    END_BOSS_INTRO_IMAGES = [
        "img/2_enemy/3_final_enemy/1.Introduce/1.png",
        "img/2_enemy/3_final_enemy/1.Introduce/2.png",
        "img/2_enemy/3_final_enemy/1.Introduce/3.png",
        "img/2_enemy/3_final_enemy/1.Introduce/4.png",
        "img/2_enemy/3_final_enemy/1.Introduce/5.png",
        "img/2_enemy/3_final_enemy/1.Introduce/6.png",
        "img/2_enemy/3_final_enemy/1.Introduce/7.png",
        "img/2_enemy/3_final_enemy/1.Introduce/8.png",
        "img/2_enemy/3_final_enemy/1.Introduce/9.png",
        "img/2_enemy/3_final_enemy/1.Introduce/10.png",
    ];

    END_BOSS_WALKING_IMAGES = [
        "img/2_enemy/3_final_enemy/2.floating/1.png",
        "img/2_enemy/3_final_enemy/2.floating/2.png",
        "img/2_enemy/3_final_enemy/2.floating/3.png",
        "img/2_enemy/3_final_enemy/2.floating/4.png",
        "img/2_enemy/3_final_enemy/2.floating/5.png",
        "img/2_enemy/3_final_enemy/2.floating/6.png",
        "img/2_enemy/3_final_enemy/2.floating/7.png",
        "img/2_enemy/3_final_enemy/2.floating/8.png",
        "img/2_enemy/3_final_enemy/2.floating/9.png",
        "img/2_enemy/3_final_enemy/2.floating/10.png",
        "img/2_enemy/3_final_enemy/2.floating/11.png",
        "img/2_enemy/3_final_enemy/2.floating/12.png",
        "img/2_enemy/3_final_enemy/2.floating/13.png",
    ];

    constructor() {
        super().loadImage("img/2_enemy/3_final_enemy/1.Introduce/1.png");
        this.loadImages(this.END_BOSS_INTRO_IMAGES);
        this.loadImages(this.END_BOSS_WALKING_IMAGES);
        this.playIntro();
    }

    playIntro() {
        let counter = 0;
        const interval = setInterval(() => {
            this.animateObject(this.END_BOSS_INTRO_IMAGES);
            counter++;
            if (counter === this.END_BOSS_INTRO_IMAGES.length) {
                this.stopIntro(interval);
            }
        }, 160);
    }

    stopIntro(interval) {
        clearInterval(interval);
        this.animate(this.END_BOSS_WALKING_IMAGES);
    }
}
