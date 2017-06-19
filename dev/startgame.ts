/// <reference path="game.ts"/>

class startGame{
    player:Player;
    createIngredients:createIngredients;
    question:Question;

    constructor(){
        console.log("Welcome to Krusty Krab!")
        this.createIngredients = new createIngredients(this); // creates ingredients
        this.player = new Player(this);
        this.question = new Question;
        requestAnimationFrame(this.gameLoop.bind(this)); // makes game loop
    }

    gameLoop(){
    this.player.move();
    this.player.score.checkAnswer();
    this.createIngredients.takeBread();
    this.createIngredients.takeCheese();
    this.createIngredients.takeKetchup();
    this.createIngredients.takeLettuce();
    this.createIngredients.takeMustard();
    this.createIngredients.takePatty();
    this.createIngredients.takePickles();
    this.createIngredients.takeTomatoes();
    
    if (this.player.lives.roundOver == true){
        // Round over, create new round if player has > 0 lives
        if (this.player.lives.live > 0){
        console.log("New round should start!")
        this.question.code = [];
        this.player.answer = [];
        this.player.lives.roundOver = false;
        this.question = new Question;
        this.createIngredients.setTrue();
        console.log(this.player.answer);
        this.player.x = 0
        this.player.y = 0
        requestAnimationFrame(this.gameLoop.bind(this));
    }
        // game over
        else {
            console.log("game over")
        }
    }
    else{
    requestAnimationFrame(this.gameLoop.bind(this));
        }
    }
}
