/// <reference path="../player.ts"/>

class Lives{
    private div:HTMLElement;
    public live:number = 3;
    public roundOver:boolean = false

    constructor(){
        console.log("You start with "+ this.live + " lives, good luck!")
    }

    // wrong combination, lose 1 life
    public loseLives(){
        this.live -= 1;
        console.log("RIP MA NIGGA" + this.live);
        this.roundOver = true;

    }

    // if all lives lost, game over
    private gameOver(){

    }
    
}