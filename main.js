import Lever from "./lever.js";
import Mouse from "./mouse.js";
const canvas = document.getElementById("screen");
const context = canvas.getContext('2d');    
const frameSheet = new Image();
frameSheet.src = "frames/Frame Sheet.png";


var gameLoop;

window.onload = function() {
    context.drawImage(frameSheet, 0, 0);
    this.lever = new Lever();
    console.log("before draw")
    gameLoop = setInterval(draw, 1000/1000);
    this.mouse = new Mouse(canvas);
}

function draw() {
    
    this.lever.draw();
}




