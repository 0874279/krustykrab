/// <reference path="../ingredients.ts"/>

class Patty extends Ingredients{

    public x:number;
    public y:number;
    public key:number = 6;

    constructor(){
        super();
        this.ingredient = document.createElement("patty");
        this.x = 600;
        this.y = 600;
        this.createDiv(this.ingredient, this.x, this.y);

    }
}