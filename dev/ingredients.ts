/// <reference path="createingredients.ts"/>

class Ingredients{
    public ingredient:HTMLElement;

    // size
    public width:number = 50;
    public height:number = 50;

    constructor(){

    }

    // creates div for all ingredients
    protected createDiv(ingredient, x, y){
        document.body.appendChild(ingredient);
        ingredient.style.transform ="translate("+x+"px,"+600+"px)";   
    }
}
