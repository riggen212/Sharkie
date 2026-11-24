let canvas;
let world;
let keyboard = new Keyboard();

function init(){
    canvas = document.getElementById('gameCanvas');
    world = new World(canvas, keyboard);
}s