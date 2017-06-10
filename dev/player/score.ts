/// <reference path="../player.ts"/>

class Score{
    private div:HTMLElement;
    private score:number = 0;
    private game:startGame;


    constructor(g:startGame){
        this.game=g;
        console.log("Your score is "+ this.score + ". Good luck!")
    }

    public getScore(){
        if (this.game.question.code.toString() == this.game.player.answer.toString()){
            console.log("Correct!");
        }
        else{
            console.log("go F yourself");
        }
    }
}