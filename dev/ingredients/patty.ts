/// <reference path="../ingredients.ts"/>

class Patty extends Ingredients{

    protected ingredient:HTMLElement;
    public x:number;
    public y:number;
    public key:number = 6;

    constructor(){
        super();
        this.ingredient = document.createElement("patty");
        this.x = 600;
        this.y = 500;
        this.createDiv(this.ingredient, this.x, this.y, this.key);

    }
}