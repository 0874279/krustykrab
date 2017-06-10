/// <reference path="game.ts"/>

class startGame{
    player:Player;
    createIngredients:createIngredients;
    question:Question;

    constructor(){
        console.log("Welcome to the new game!")
        this.createIngredients = new createIngredients(this); // creates ingredients
        this.player = new Player(this);
        this.question = new Question;
        requestAnimationFrame(this.gameLoop.bind(this)); // makes game loop
    }

    gameLoop(){
    this.player.move();
    this.player.score.getScore();
    this.createIngredients.takeBread();
    this.createIngredients.takeCheese();
    this.createIngredients.takeKetchup();
    this.createIngredients.takeLettuce();
    this.createIngredients.takeMustard();
    this.createIngredients.takePatty();
    this.createIngredients.takePickles();
    this.createIngredients.takeTomatoes();
    
    requestAnimationFrame(this.gameLoop.bind(this));
    }
}