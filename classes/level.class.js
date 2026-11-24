class Level {
  enemies;
  backgroundObjects;
  levelWidth;
  world;

  layerStartOne = 0;
  layerStartTwo = 900;

  backgroundFolderPath = "img/3_background/legacy/layers/";
  backgroundImgages = ["_water/d", "_fondo_2/d", "_fondo_1/d", "_floor/d", "_light/"];

  constructor(enemies, backgroundObjects, levelWidth) {
    this.enemies = enemies;
    this.backgroundObjects = backgroundObjects;
    this.levelWidth = levelWidth;
    for (let index = 1; index <= this.levelWidth; index++) {
      let numb = 5;
      this.createBackgroundPair(index, numb);
    }
  }

  createBackgroundPart(numb, layer, layerStart, otherDirection) {
    for (let i = 0; i < 5; i++) {
      let path = this.backgroundFolderPath + numb + this.backgroundImgages[i] + layer + ".png";
      this.backgroundObjects.push(new BackgroundObject(path, layerStart, otherDirection));
      numb--;
    }
  }

  createBackgroundPair(index, numb) {
    let otherDirection = index % 2 === 0;
    let layer = otherDirection ? 2 : 1;

    this.createBackgroundPart(numb, layer, this.layerStartOne, otherDirection);
    layer = otherDirection ? 1 : 2;
    this.createBackgroundPart(numb, layer, this.layerStartTwo, otherDirection);

    this.layerStartOne += 1800;
    this.layerStartTwo += 1800;
  }
}
