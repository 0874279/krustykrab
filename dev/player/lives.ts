/// <reference path="../player.ts"/>

class Lives{
    div:HTMLElement;
    live:number = 3;

    constructor(){
        console.log("You start with "+ this.live + " lives, good luck!")
    }

    // wrong combination, lose 1 live
    public loseLives(){
        this.live -= 1;
        console.log("RIP MA NIGGA" + this.live);

    }

    // if all lives lost, game over
    private gameOver(){

    }
    
}