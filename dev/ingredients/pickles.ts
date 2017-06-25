/// <reference path="../ingredients.ts"/>

class Pickles extends Ingredients{

    public x:number;
    public y:number;
    public key:number = 7;

    constructor(){
        super();
        this.ingredient = document.createElement("pickles");
        this.x = 700;
        this.y = 600;
        this.createDiv(this.ingredient, this.x, this.y);

    }
}