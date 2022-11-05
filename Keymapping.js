import { state } from "./leverState";
export function mouseControl(canvas){

    ['mousedown'].forEach(eventName => {
        canvas.addEventListener(eventName,event =>{
            if(event.buttons === 1){
                state(false)
            }
        })
    })

    canvas.addEventListener('contextmenu',event => {
        event.preventDefault();
    })
}