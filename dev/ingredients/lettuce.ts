/// <reference path="../ingredients.ts"/>

class Lettuce extends Ingredients{

    protected ingredient:HTMLElement;
    public x:number;
    public y:number;
    public key:number = 4;

    constructor(){
        super();
        this.ingredient = document.createElement("lettuce");
        this.x = 400;
        this.y = 500;
        this.createDiv(this.ingredient, this.x, this.y);

    }
}