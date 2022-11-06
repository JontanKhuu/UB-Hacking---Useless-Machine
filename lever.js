const canvas = document.getElementById("screen");
const context = canvas.getContext('2d')

const frameSheet = new Image();
frameSheet.src = "frames/Frame Sheet.png";


export default class Lever{
    constructor(){
        this.leverActive = false;
        this.gameFrame = 0;
        this.stagFrame = 30;
        this.frameX = 0;
        this.frameY = 0;
        this.sprite = 800; 
        
    }
    leverClicked(){
        console.log("Inside leverClicked")
        this.leverActive = !this.leverActive;
    }
  
    draw() {
        console.log("Lever is currently Active: " + this.leverActive)
        if (this.leverActive) {
        if (this.gameFrame % this.stagFrame == 0) {
            this.frameX++;
            if (this.frameX > 4) {
                this.frameX = 0;
                this.frameY++;
                if (this.frameY > 2) {
                    this.frameY = 0;
                    this.leverActive = false;
                }
            }
          
        }
             context.drawImage(frameSheet, this.frameX * this.sprite, this.frameY * this.sprite, this.sprite, this.sprite, 0, 0, 800, 800);
                this.gameFrame++;
       
        
    }
        
}
        
}


/* lever down -> lever up -> 5 sec delay -> open frame 1-3 -> fully open ->
   movement 1-3 -> close 1-5 -> lever down  */




