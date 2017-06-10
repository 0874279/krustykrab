/// <reference path="../player.ts"/>

class Lives{
    div:HTMLElement;
    live:number = 3;

    constructor(){
        console.log("You start with "+ this.live + " lives, good luck!")
        this.loseLives();
        console.log(this.live)
    }

    // wrong combination, lose 1 live
    private loseLives(){
        this.live -= 1;

    }
    
}