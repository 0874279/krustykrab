/// <reference path="../ingredients.ts"/>

class Bread extends Ingredients{

    protected ingredient:HTMLElement;
    public x:number;
    public y:number;
    public key:number = 1;

    constructor(){
        super();
        this.ingredient = document.createElement("bread");
        this.x = 100;
        this.y = 500;
        this.createDiv(this.ingredient, this.x, this.y, this.key);

    }
}