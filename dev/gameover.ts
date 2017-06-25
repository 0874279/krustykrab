/// <reference path="startgame.ts"/>

class gameOver{
    private game:startGame;
    private div:HTMLElement;
    private playAgain:HTMLElement;


    constructor(g:startGame){
            this.game=g;
            this.game.question.div.remove();
            this.game.player.div.remove();
            this.game.player.lives.div.remove();
            this.game.player.score.div.remove();
            this.game.createIngredients.bread.ingredient.remove();
            this.game.createIngredients.cheese.ingredient.remove();
            this.game.createIngredients.ketchup.ingredient.remove();
            this.game.createIngredients.lettuce.ingredient.remove();
            this.game.createIngredients.mustard.ingredient.remove();
            this.game.createIngredients.patty.ingredient.remove();
            this.game.createIngredients.pickles.ingredient.remove();
            this.game.createIngredients.tomatoes.ingredient.remove();

            this.div = document.createElement("gameover");
            document.body.appendChild(this.div).innerHTML = "SPONGEBOB YOU'RE FIRED!, your score was: " + this.game.player.score.score + "."; 
            this.playAgain = document.createElement("startBtn");
            document.body.appendChild(this.playAgain).addEventListener("click", ()=> this.createGame());

    }
    // removes div & starts a new game
    private createGame(){
        this.div.remove();
        this.div = undefined;
        this.playAgain.remove();
        this.playAgain = undefined;
        this.game = new startGame;
    }

            
}