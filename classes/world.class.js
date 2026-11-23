class World {
  character = new Character();
  enemies = [new Fish(), new Fish(), new Fish()];
  backgroundObjects = [
    // new BackgroundObject("img/3_background/legacy/layers/5_water/d1.png", 0),
    // new BackgroundObject("img/3_background/legacy/layers/4_fondo_2/d1.png", 0),
    // new BackgroundObject("img/3_background/legacy/layers/3_fondo_1/d1.png", 0),
    // new BackgroundObject("img/3_background/legacy/layers/2_floor/d1.png", 0),
    // new BackgroundObject("img/3_background/legacy/layers/1_light/1.png", 0),
    // new BackgroundObject("img/3_background/legacy/layers/5_water/d2.png", 900),
    // new BackgroundObject("img/3_background/legacy/layers/4_fondo_2/d2.png", 900),
    // new BackgroundObject("img/3_background/legacy/layers/3_fondo_1/d2.png", 900),
    // new BackgroundObject("img/3_background/legacy/layers/2_floor/d2.png", 900),
    // new BackgroundObject("img/3_background/legacy/layers/1_light/2.png", 900),
  ];
  canvas;
  ctx;
  keyboard;
  cameraOffsetX = 0;
  numb = 5;
  layerStartOne = 0;
  layerStartTwo = 900;

  backgroundFolderPath = "img/3_background/legacy/layers/";
  backgroundImgages = ["_water/d", "_fondo_2/d", "_fondo_1/d", "_floor/d", "_light/"];

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;

    for (let index = 1; index <= 3; index++) {
      let numb = 5;
      this.createBackgroundPair(index, numb);
    }

    this.draw();
    this.setWorld();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.cameraOffsetX, 0);

    this.addObjectsToMap(this.backgroundObjects);
    this.addToMap(this.character);
    this.addObjectsToMap(this.enemies);

    this.ctx.translate(-this.cameraOffsetX, 0);

    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  setWorld() {
    this.character.world = this;
  }

  addToMap(e) {
    if (e.otherDirection) {
      this.ctx.save();
      this.ctx.translate(e.width, 0);
      this.ctx.scale(-1, 1);
      e.x = e.x * -1;
    }
    this.ctx.drawImage(e.img, e.x, e.y, e.width, e.height);
    if (e.otherDirection) {
      e.x = e.x * -1;
      this.ctx.restore();
    }
  }

  addObjectsToMap(obj) {
    obj.forEach((e) => {
      this.addToMap(e);
    });
  }

  createLayerPath(numb, layer, layerStart, otherDirection) {
    for (let i = 0; i < 5; i++) {
      let path = this.backgroundFolderPath + numb + this.backgroundImgages[i] + layer + ".png";
      this.backgroundObjects.push(new BackgroundObject(path, layerStart, otherDirection));
      numb--;
    }
  }

  createBackgroundPair(index, numb) {
    let otherDirection = index % 2 === 0;
    let layer = otherDirection ?  2 :  1;

    this.createLayerPath(numb, layer, this.layerStartOne, otherDirection);
    layer = otherDirection ?  1 :  2;
    this.createLayerPath(numb, layer, this.layerStartTwo, otherDirection);

    this.layerStartOne += 1800;
    this.layerStartTwo += 1800;
  }
}
