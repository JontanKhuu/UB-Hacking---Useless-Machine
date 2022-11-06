const canvas = document.getElementById("screen");
const context = canvas.getContext('2d')

const img1 = new Image();
img1.src = "frames/LeverDown.png";


const img2 = new Image();
img2.src = "frames/LeverUp.png";

const frameSheet = new Image();
frameSheet = "frames/Frame Sheet.png";
const boxSize = 800

export default class Lever{
    constructor(balls){
        this.leverActive = false;
        let gameFrame = 0;
        const stagFrame = 70;
    }
    leverClicked(){
        console.log("Inside leverClicked")
        this.leverActive = !this.leverActive;
    }
  
    draw() {
        console.log("Lever is current Active: " + this.leverActive)
        if (this.leverActive == true) {
            context.drawImage(img2,0,0)
        }
        else {
            context.drawImage(img1, 0,0);
        }
    }

}


/* lever down -> lever up -> 5 sec delay -> open frame 1-3 -> fully open ->
   movement 1-3 -> close 1-5 -> lever down  */




    