// import mouseControl from './MouseControl.js';
import Lever from "./lever.js";
import Test from "./test.js";
const canvas = document.getElementById("screen");
const context = canvas.getContext('2d')

var gameLoop;

window.onload = function() {
    
    this.lever = new Lever(100,100, canvas);
    console.log("before draw")
    gameLoop = setInterval(draw, 100/1000);
    
}

function draw() {
    context.fillStyle = "black";
    context.fillRect(0,0,canvas.width,canvas.height);
    this.lever.draw();
    this.test = new Test(canvas)
    // console.log(test.getPosition())

    
}




