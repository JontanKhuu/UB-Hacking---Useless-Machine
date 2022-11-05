
export default class Test{
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
            console.log('Mouse position: ' + mousePos.x + ',' + mousePos.y);
        }, false);
        canvas.addEventListener('contextmenu',event => {
            event.preventDefault();
        })
    }  
}