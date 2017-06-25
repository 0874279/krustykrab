/// <reference path="startgame.ts"/>

class Question{

    public code:Array<number> = []
    private randnumber:number;
    private game:startGame;
    public div:HTMLElement;
    private stringIngredients:Array<string> = ["leeg","bread", "cheese", "ketchup", "lettuce", "mustard", "patty", "pickles", "tomatoes"]
    private question:string = "Make me a krabbypatty with: ";


    constructor(){
        this.codeGenerator();
    }

    // create a question in div
    private createDiv(question){
        this.div = document.createElement("question");
        document.body.appendChild(this.div).innerHTML = question; 

    }

    // generates a random 5 digit array into this.code
    private codeGenerator(){
        while (this.code.length < 5){
            this.randnumber = Math.ceil(Math.random()*8)
            if(this.code.indexOf(this.randnumber) > -1) continue;
            this.code[this.code.length] = this.randnumber;
        }  
        for (let i=0; i<5 ; i++){
        this.question = this.question + this.stringIngredients[this.code[i]] + ", ";
            if (i == 4){
                this.createDiv(this.question);
                
            }

        }

}
}
