/// <reference path="../ingredients.ts"/>

class Tomatoes extends Ingredients{

    public x:number;
    public y:number;
    public key:number = 8;

    constructor(){
        super();
        this.ingredient = document.createElement("tomatoes");
        this.x = 800;
        this.y = 600;
        this.createDiv(this.ingredient, this.x, this.y);

    }
}