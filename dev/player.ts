/// <reference path="startgame.ts"/>

class Player{

    private div:HTMLElement; // player div
    public score:Score; // score
    public lives:Lives; // lives
    public answer:Array<number> = []; // player answer

    // position
    public x:number = 0;
    public y:number = 0;
    public width:number = 50;
    public height:number = 50;

    // keyboard
    private leftSpeed:number = 0;
    private rightSpeed:number = 0;
    private downSpeed:number = 0;
    private upSpeed:number = 0;
    private leftKey:number = 65;
    private rightKey:number = 68;
    private upKey:number = 87;
    private downKey:number = 83;    

    constructor(g:startGame){
        this.createDiv();
        this.score = new Score(g);
        this.lives = new Lives;


        window.addEventListener("keydown", (e:KeyboardEvent) => this.onKeyDown(e));
        window.addEventListener("keyup", (e:KeyboardEvent) => this.onKeyUp(e));
    }

    private createDiv(){ // creates player div
        this.div = document.createElement("player");
        document.body.appendChild(this.div);
    }

        public move(){
        this.x = this.x - this.leftSpeed + this.rightSpeed;
        this.y = this.y - this.upSpeed + this.downSpeed;
        this.div.style.transform ="translate("+this.x+"px,"+this.y+"px)";
        
    }
    // stop moving
    private onKeyUp(event:KeyboardEvent):void {
        switch(event.keyCode){
            case this.upKey:
                this.upSpeed = 0;
                break;
            case this.downKey:
                this.downSpeed = 0;
                break;
            case this.leftKey:
                this.leftSpeed = 0;
                break;
            case this.rightKey:
                this.rightSpeed = 0;
                break;
        }
    }

    // move
    private onKeyDown(event:KeyboardEvent):void {
        switch(event.keyCode){
            case this.upKey:
                this.upSpeed = 5;
                break;
            case this.downKey:
                this.downSpeed = 5;
                break;
            case this.leftKey:
                this.leftSpeed = 5;
                break;
           case this.rightKey:
                this.rightSpeed = 5;
                break;
        }
    }


}
