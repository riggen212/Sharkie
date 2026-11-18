let canvas;
let ctx;
let charactar = new Image();


function init(){
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d');
    
    charactar.src = 'img/1.Sharkie/1_idle/1.png';

    ctx.drawImage(charactar, 100, 250, 250, 250);
}
