class World {
  character = new Character();
  currentLevel = levelOne;
  canvas;
  ctx;
  keyboard;
  cameraOffsetX = 0;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.setWorld();
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.cameraOffsetX, 0);
    this.addObjectsToMap(this.currentLevel.backgroundObjects);
    this.addToMap(this.character);
    this.addObjectsToMap(this.currentLevel.enemies);
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
}
