/// <reference path="../ingredients.ts"/>

class Cheese extends Ingredients{

    protected ingredient:HTMLElement;
    public x:number;
    public y:number;
    public key:number = 2;

    constructor(){
        super();
        this.ingredient = document.createElement("cheese");
        this.x = 200;
        this.y = 500;
        this.createDiv(this.ingredient, this.x, this.y);

    }
}