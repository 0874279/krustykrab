/// <reference path="../ingredients.ts"/>

class Lettuce extends Ingredients{

    public x:number;
    public y:number;
    public key:number = 4;

    constructor(){
        super();
        this.ingredient = document.createElement("lettuce");
        this.x = 400;
        this.y = 600;
        this.createDiv(this.ingredient, this.x, this.y);

    }
}