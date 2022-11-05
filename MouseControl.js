import { state } from "./leverState.js";
export function mouseControl(canvas){

    ['mousedown'].forEach(eventName => {
        canvas.addEventListener(eventName,event =>{
            if(event.buttons === 1){
                state(false)
            }
            else{
                state(true)
            }
        })
    })

    canvas.addEventListener('contextmenu',event => {
        event.preventDefault();
    })
}