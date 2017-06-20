/// <reference path="../player.ts"/>

class Lives{
    private div:HTMLElement;
    public live:number = 3;
    public roundOver:boolean = false

    constructor(){
        this.createDiv();
    }

    private createDiv(){ // creates lives div
        this.div = document.createElement("lives3");
        document.body.appendChild(this.div);        
    }

    // wrong combination, lose 1 life & update div
    public loseLives(){
        this.live -= 1;
        if (this.live == 2){
            this.div.remove();
            this.div = document.createElement("lives2");
        }
        else {
            this.div.remove()
            this.div = document.createElement("lives1");
        }
        document.body.appendChild(this.div);
        this.roundOver = true;

    }

    // if all 3 lives lost, game over
    private gameOver(){

    }
    
}
