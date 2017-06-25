/// <reference path="../ingredients.ts"/>

class Ketchup extends Ingredients{

    public x:number;
    public y:number;
    public key:number = 3;

    constructor(){
        super();
        this.ingredient = document.createElement("ketchup");
        this.x = 300;
        this.y = 600;
        this.createDiv(this.ingredient, this.x, this.y);

    }
}