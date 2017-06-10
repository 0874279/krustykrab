/// <reference path="startgame.ts"/>

class Question{

    public code:Array<number> = []
    private randnumber:number;
    private game:startGame;


    constructor(){
        this.codeGenerator();
    }

    // generates a random 5 digit array into this.code
    codeGenerator(){
        while (this.code.length < 5){
            this.randnumber = Math.ceil(Math.random()*8)
            if(this.code.indexOf(this.randnumber) > -1) continue;
            this.code[this.code.length] = this.randnumber;
        }
        console.log(this.code)
    }
}    
