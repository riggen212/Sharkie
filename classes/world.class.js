class World {
  character = new Character();
  enemies = [new Fish(), new Fish(), new Fish()];
  backgroundObjects = [
    new BackgroundObject("img/3_background/legacy/layers/5_water/d1.png"),
    new BackgroundObject("img/3_background/legacy/layers/4_fondo_2/d1.png"),
    new BackgroundObject("img/3_background/legacy/layers/3_fondo_1/d1.png"),
    new BackgroundObject("img/3_background/legacy/layers/1_light/1.png"),
    new BackgroundObject("img/3_background/legacy/layers/2_floor/d1.png"),
  ];
  canvas;
  ctx;

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.addObjectsToMap(this.backgroundObjects);
    this.addToMap(this.character);
    this.addObjectsToMap(this.enemies);

    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addToMap(e) {
    this.ctx.drawImage(e.img, e.x, e.y, e.width, e.height);
  }

  addObjectsToMap(obj) {
    obj.forEach((e) => {
      this.addToMap(e);
    });
  }
}
