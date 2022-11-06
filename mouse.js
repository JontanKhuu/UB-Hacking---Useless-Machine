import Lever from "./lever.js"
export default class Mouse{
    lever = new Lever()
    constructor(canvas){
        this.canvas = canvas
        this.lever = new Lever()
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
            checkOnLever(mousePos.x, mousePos.y)
        }, false);
        canvas.addEventListener('contextmenu',event => {
            event.preventDefault();
        })
        function printMousePosition(x,y){
            console.log(x, y)
        }
        function checkOnLever(x,y){
            //get lever positions
            var lever_up = {
                lever_top_x : 375,
                lever_top_y : 376,
                lever_bottom_x : 414,
                lever_bottom_y : 478
            }
            var lever_down ={
                lever_top_x : 375,
                lever_top_y : 304,
                lever_bottom_x : 414,
                lever_bottom_y : 397
            }
            //check if clicked on positions
            if (!lever.leverActive){
                if( x > lever_up.lever_top_x 
                    && x < lever_up.lever_bottom_x 
                    && y < lever_up.lever_bottom_y 
                    && y > lever_up.lever_top_y){
                    console.log("clicked lever")
                    lever.leverClicked()
                }
            }
            else {
                if( x > lever_down.lever_top_x 
                    && x < lever_down.lever_bottom_x 
                    && y < lever_down.lever_bottom_y 
                    && y > lever_down.lever_top_y){
                    console.log("clicked lever")
                    lever.leverClicked()
                }
            }
            
            //call clickedLever function from leverClass
        }
    }  
}
