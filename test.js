import Lever from "./lever.js"
export default class Mouse{
    constructor(canvas){
        this.canvas = canvas
        function getMousePos(canvas, evt) {
            var rect = canvas.getBoundingClientRect();
            return {
              x: evt.clientX - rect.left,
              y: evt.clientY - rect.top
            };
        }
        canvas.addEventListener('click', function(evt) {
            event.preventDefault();
            var mousePos = getMousePos(canvas, evt);
            printMousePosition(mousePos.x, mousePos.y)
        }, false);
        canvas.addEventListener('contextmenu',event => {
            event.preventDefault();
        })
        function printMousePosition(x,y){
            console.log(x, y)
        }
        function checkOnLever(x,y){
            //get lever positions
            //check if clicked on positions
            //call clickedLever function from leverClass
        }
    }  
}