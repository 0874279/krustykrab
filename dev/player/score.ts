/// <reference path="../player.ts"/>

class Score{
    public div:HTMLElement;
    public score:number = 0;
    private game:startGame;


    constructor(g:startGame){
        this.game=g;
        this.createDiv(this.score);
    }

    private createDiv(score){ // creates score div
        this.div = document.createElement("score");
        document.body.appendChild(this.div).innerHTML="Score: " + score;
    }
    // hides the question when first ingredient is picked up
    public hidequestion(){
        if (this.game.player.answer.length === 2){
            this.game.question.div.remove();
        }
    }

    // checks if given awnser is correct
    public checkAnswer(){
        this.hidequestion();
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
        this.updateScore(this.score)
    }

    // updates scorediv
    private updateScore(score){
        this.div.remove();
        this.div = document.createElement("score");
        document.body.appendChild(this.div).innerHTML="Score: " + score;
    }




}
