/// <reference path="main.ts"/>

class Game{
    public startGame:startGame; // starts the game
    private div:HTMLElement; // button to create game
    private help:HTMLElement; // help div
    private ingredients:Ingredients //set ingredients

    constructor(){
        this.createDiv();

    }
    
    private createDiv(){ // creates startBtn div
        this.div = document.createElement("startBtn");
        document.body.appendChild(this.div).addEventListener("click", ()=> this.createGame());

        this.help = document.createElement("help");
        document.body.appendChild(this.help).innerHTML = "Hey Spongebob, you have to make some krabbypatties today. Move with WASD to grab the ingredients and make sure to follow the orders from Squidward. Good luck!"

    }
    // removes div & starts a new game
    private createGame(){
        this.div.remove();
        this.div = undefined;
        this.help.remove();
        this.help = undefined;
        this.startGame = new startGame;
    }

}
