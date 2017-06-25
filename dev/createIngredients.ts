/// <reference path="startgame.ts"/>

// This code generates ingredients

class createIngredients{
    //ingredients
    public bread:Bread;
    public cheese:Cheese;
    public ketchup:Ketchup;
    public lettuce:Lettuce;
    public mustard:Mustard;
    public patty:Patty;
    public pickles:Pickles;
    public tomatoes:Tomatoes;
    public game:startGame;
    
    //booleans so
    private breadB:boolean = true;
    private cheeseB:boolean = true;
    private ketchupB:boolean = true;
    private lettuceB:boolean = true;
    private mustardB:boolean = true;
    private pattyB:boolean = true;
    private picklesB:boolean = true;
    private tomatoesB:boolean = true;


    constructor(g:startGame){
        this.game = g;
        this.createDivs();
    }

    public takeBread(){
        if (this.game.player.x < this.bread.x + this.bread.width &&
            this.game.player.x + this.game.player.width > this.bread.x &&
            this.game.player.y < this.bread.y + this.bread.height &&
            this.game.player.height + this.game.player.y > this.bread.y && this.breadB == true) {
                this.breadB = false;
                this.game.player.answer.push(this.bread.key);
                this.bread.ingredient.remove();
            }  
    }

    public takeCheese(){
        if (this.game.player.x < this.cheese.x + this.cheese.width &&
            this.game.player.x + this.game.player.width > this.cheese.x &&
            this.game.player.y < this.cheese.y + this.cheese.height &&
            this.game.player.height + this.game.player.y > this.cheese.y && this.cheeseB == true) {
                this.cheeseB = false;
                this.game.player.answer.push(this.cheese.key);
                this.cheese.ingredient.remove();

            }  
    }

    public takeKetchup(){
        if (this.game.player.x < this.ketchup.x + this.ketchup.width &&
            this.game.player.x + this.game.player.width > this.ketchup.x &&
            this.game.player.y < this.ketchup.y + this.ketchup.height &&
            this.game.player.height + this.game.player.y > this.ketchup.y && this.ketchupB == true) {
                this.ketchupB = false;
                this.game.player.answer.push(this.ketchup.key);
                this.ketchup.ingredient.remove();

            }  
    }

    public takeLettuce(){
        if (this.game.player.x < this.lettuce.x + this.lettuce.width &&
            this.game.player.x + this.game.player.width > this.lettuce.x &&
            this.game.player.y < this.lettuce.y + this.lettuce.height &&
            this.game.player.height + this.game.player.y > this.lettuce.y && this.lettuceB == true) {
                this.lettuceB = false;
                this.game.player.answer.push(this.lettuce.key);
                this.lettuce.ingredient.remove();

            }  
    }

    public takeMustard(){
        if (this.game.player.x < this.mustard.x + this.mustard.width &&
            this.game.player.x + this.game.player.width > this.mustard.x &&
            this.game.player.y < this.mustard.y + this.mustard.height &&
            this.game.player.height + this.game.player.y > this.mustard.y && this.mustardB == true) {
                this.mustardB = false;
                this.game.player.answer.push(this.mustard.key);
                this.mustard.ingredient.remove();
            }  
    }

    public takePatty(){
        if (this.game.player.x < this.patty.x + this.patty.width &&
            this.game.player.x + this.game.player.width > this.patty.x &&
            this.game.player.y < this.patty.y + this.patty.height &&
            this.game.player.height + this.game.player.y > this.patty.y && this.pattyB == true) {
                this.pattyB = false;
                this.game.player.answer.push(this.patty.key);
                this.patty.ingredient.remove();
            }  
    }

    public takePickles(){
        if (this.game.player.x < this.pickles.x + this.pickles.width &&
            this.game.player.x + this.game.player.width > this.pickles.x &&
            this.game.player.y < this.pickles.y + this.pickles.height &&
            this.game.player.height + this.game.player.y > this.pickles.y && this.picklesB == true) {
                this.picklesB = false;
                this.game.player.answer.push(this.pickles.key);
                this.pickles.ingredient.remove();
            }  
    }
    
    public takeTomatoes(){
        if (this.game.player.x < this.tomatoes.x + this.tomatoes.width &&
            this.game.player.x + this.game.player.width > this.tomatoes.x &&
            this.game.player.y < this.tomatoes.y + this.tomatoes.height &&
            this.game.player.height + this.game.player.y > this.tomatoes.y && this.tomatoesB == true) {
                this.tomatoesB = false;
                this.game.player.answer.push(this.tomatoes.key);
                this.tomatoes.ingredient.remove();
            }  
    }
    // resets the ingredients 
    public resetIngredients(){
        this.setTrue();
        this.removeDivs();
        this.createDivs();
    }

    // set makes sure everything can be taken again when round is over
    private setTrue(){
        this.breadB = true;
        this.cheeseB = true;
        this.ketchupB = true;
        this.lettuceB = true;
        this.mustardB = true;
        this.pattyB = true;
        this.picklesB = true;
        this.tomatoesB = true;

    }
    // remove all ingredients when round is over
    private removeDivs(){
        this.bread.ingredient.remove();
        this.cheese.ingredient.remove();
        this.ketchup.ingredient.remove();
        this.lettuce.ingredient.remove();
        this.mustard.ingredient.remove();
        this.patty.ingredient.remove();
        this.pickles.ingredient.remove();
        this.tomatoes.ingredient.remove();
    }
    // create new ingredients when new round starts
    private createDivs(){
        this.bread = new Bread;
        this.cheese = new Cheese;
        this.ketchup = new Ketchup;
        this.lettuce = new Lettuce;
        this.mustard = new Mustard;
        this.patty = new Patty;
        this.pickles = new Pickles;
        this.tomatoes = new Tomatoes;
    }

}
