
class Ingredients{
    // div
    protected div:HTMLElement;



    // size
    public width:number = 50;
    public height:number = 50;

    constructor(){

    }

    // creates div for all ingredients
    protected createDiv(ingredient, x, y, key){
        document.body.appendChild(ingredient).innerHTML=key;
        ingredient.style.transform ="translate("+x+"px,"+y+"px)";   
    }
}