/// <reference path="../player.ts"/>

class Score{
    private div:HTMLElement;
    private score:number = 0;
    private game:startGame;


    constructor(g:startGame){
        this.game=g;
        console.log("Your score is "+ this.score + ". Good luck!")
    }

    // checks if given awnser is correct
    public checkAnswer(){

        if (this.game.question.code.length == this.game.player.answer.length){
        if (this.game.question.code.toString() == this.game.player.answer.toString()){
            this.roundWon();
        }
            else{
                this.game.player.lives.loseLives();
            }
        }   
    }

    // gives player 10 points and new round
    private roundWon(){
        this.game.player.lives.roundOver = true;
        this.score +=10;
        console.log(this.score);
    }


}
