/// <reference path="main.ts"/>

class Game{
    private startGame:startGame; // starts the game
    private div:HTMLElement; // button to create game
    private ingredients:Ingredients

    constructor(){
        this.createDiv();

    }
    
    private createDiv(){ // creates startBtn div
        this.div = document.createElement("startBtn");
        document.body.appendChild(this.div).addEventListener("click", ()=> this.createGame());

    }
    // removes div & starts a new game
    private createGame(){
        this.div.remove();
        this.div = undefined;
        this.startGame = new startGame;
    }

}