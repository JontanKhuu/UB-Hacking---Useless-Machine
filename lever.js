//import { mouseControl } from "./MouseControl";
const canvas = document.getElementById("screen");
const context = canvas.getContext('2d')

export default class Lever{
    constructor(x,y){
        this.x = x; //top left
        this.y = y; //top left
    
    }

    draw() {
        context.fillStyle = "blue";
        context.fillRect(100,150,this.x,this.y);
    }



}







    
