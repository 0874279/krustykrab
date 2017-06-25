var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var createIngredients = (function () {
    function createIngredients(g) {
        this.breadB = true;
        this.cheeseB = true;
        this.ketchupB = true;
        this.lettuceB = true;
        this.mustardB = true;
        this.pattyB = true;
        this.picklesB = true;
        this.tomatoesB = true;
        this.game = g;
        this.createDivs();
    }
    createIngredients.prototype.takeBread = function () {
        if (this.game.player.x < this.bread.x + this.bread.width &&
            this.game.player.x + this.game.player.width > this.bread.x &&
            this.game.player.y < this.bread.y + this.bread.height &&
            this.game.player.height + this.game.player.y > this.bread.y && this.breadB == true) {
            this.breadB = false;
            this.game.player.answer.push(this.bread.key);
            this.bread.ingredient.remove();
        }
    };
    createIngredients.prototype.takeCheese = function () {
        if (this.game.player.x < this.cheese.x + this.cheese.width &&
            this.game.player.x + this.game.player.width > this.cheese.x &&
            this.game.player.y < this.cheese.y + this.cheese.height &&
            this.game.player.height + this.game.player.y > this.cheese.y && this.cheeseB == true) {
            this.cheeseB = false;
            this.game.player.answer.push(this.cheese.key);
            this.cheese.ingredient.remove();
        }
    };
    createIngredients.prototype.takeKetchup = function () {
        if (this.game.player.x < this.ketchup.x + this.ketchup.width &&
            this.game.player.x + this.game.player.width > this.ketchup.x &&
            this.game.player.y < this.ketchup.y + this.ketchup.height &&
            this.game.player.height + this.game.player.y > this.ketchup.y && this.ketchupB == true) {
            this.ketchupB = false;
            this.game.player.answer.push(this.ketchup.key);
            this.ketchup.ingredient.remove();
        }
    };
    createIngredients.prototype.takeLettuce = function () {
        if (this.game.player.x < this.lettuce.x + this.lettuce.width &&
            this.game.player.x + this.game.player.width > this.lettuce.x &&
            this.game.player.y < this.lettuce.y + this.lettuce.height &&
            this.game.player.height + this.game.player.y > this.lettuce.y && this.lettuceB == true) {
            this.lettuceB = false;
            this.game.player.answer.push(this.lettuce.key);
            this.lettuce.ingredient.remove();
        }
    };
    createIngredients.prototype.takeMustard = function () {
        if (this.game.player.x < this.mustard.x + this.mustard.width &&
            this.game.player.x + this.game.player.width > this.mustard.x &&
            this.game.player.y < this.mustard.y + this.mustard.height &&
            this.game.player.height + this.game.player.y > this.mustard.y && this.mustardB == true) {
            this.mustardB = false;
            this.game.player.answer.push(this.mustard.key);
            this.mustard.ingredient.remove();
        }
    };
    createIngredients.prototype.takePatty = function () {
        if (this.game.player.x < this.patty.x + this.patty.width &&
            this.game.player.x + this.game.player.width > this.patty.x &&
            this.game.player.y < this.patty.y + this.patty.height &&
            this.game.player.height + this.game.player.y > this.patty.y && this.pattyB == true) {
            this.pattyB = false;
            this.game.player.answer.push(this.patty.key);
            this.patty.ingredient.remove();
        }
    };
    createIngredients.prototype.takePickles = function () {
        if (this.game.player.x < this.pickles.x + this.pickles.width &&
            this.game.player.x + this.game.player.width > this.pickles.x &&
            this.game.player.y < this.pickles.y + this.pickles.height &&
            this.game.player.height + this.game.player.y > this.pickles.y && this.picklesB == true) {
            this.picklesB = false;
            this.game.player.answer.push(this.pickles.key);
            this.pickles.ingredient.remove();
        }
    };
    createIngredients.prototype.takeTomatoes = function () {
        if (this.game.player.x < this.tomatoes.x + this.tomatoes.width &&
            this.game.player.x + this.game.player.width > this.tomatoes.x &&
            this.game.player.y < this.tomatoes.y + this.tomatoes.height &&
            this.game.player.height + this.game.player.y > this.tomatoes.y && this.tomatoesB == true) {
            this.tomatoesB = false;
            this.game.player.answer.push(this.tomatoes.key);
            this.tomatoes.ingredient.remove();
        }
    };
    createIngredients.prototype.resetIngredients = function () {
        this.setTrue();
        this.removeDivs();
        this.createDivs();
    };
    createIngredients.prototype.setTrue = function () {
        this.breadB = true;
        this.cheeseB = true;
        this.ketchupB = true;
        this.lettuceB = true;
        this.mustardB = true;
        this.pattyB = true;
        this.picklesB = true;
        this.tomatoesB = true;
    };
    createIngredients.prototype.removeDivs = function () {
        this.bread.ingredient.remove();
        this.cheese.ingredient.remove();
        this.ketchup.ingredient.remove();
        this.lettuce.ingredient.remove();
        this.mustard.ingredient.remove();
        this.patty.ingredient.remove();
        this.pickles.ingredient.remove();
        this.tomatoes.ingredient.remove();
    };
    createIngredients.prototype.createDivs = function () {
        this.bread = new Bread;
        this.cheese = new Cheese;
        this.ketchup = new Ketchup;
        this.lettuce = new Lettuce;
        this.mustard = new Mustard;
        this.patty = new Patty;
        this.pickles = new Pickles;
        this.tomatoes = new Tomatoes;
    };
    return createIngredients;
}());
window.addEventListener("load", function () {
    new Game();
});
var Game = (function () {
    function Game() {
        this.createDiv();
    }
    Game.prototype.createDiv = function () {
        var _this = this;
        this.div = document.createElement("startBtn");
        document.body.appendChild(this.div).addEventListener("click", function () { return _this.createGame(); });
        this.help = document.createElement("help");
        document.body.appendChild(this.help).innerHTML = "Hey Spongebob, you have to make some krabbypatties today. Move with WASD to grab the ingredients and make sure to follow the orders from Squidward. Good luck!";
    };
    Game.prototype.createGame = function () {
        this.div.remove();
        this.div = undefined;
        this.help.remove();
        this.help = undefined;
        this.startGame = new startGame;
    };
    return Game;
}());
var startGame = (function () {
    function startGame() {
        this.createIngredients = new createIngredients(this);
        this.player = new Player(this);
        this.question = new Question;
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    startGame.prototype.gameLoop = function () {
        this.player.move();
        this.player.score.checkAnswer();
        this.createIngredients.takeBread();
        this.createIngredients.takeCheese();
        this.createIngredients.takeKetchup();
        this.createIngredients.takeLettuce();
        this.createIngredients.takeMustard();
        this.createIngredients.takePatty();
        this.createIngredients.takePickles();
        this.createIngredients.takeTomatoes();
        if (this.player.lives.roundOver == true) {
            if (this.player.lives.live > 0) {
                this.question.code = [];
                this.player.answer = [];
                this.player.lives.roundOver = false;
                this.question.div.remove();
                this.question = new Question;
                this.createIngredients.resetIngredients();
                this.player.x = 0;
                this.player.y = 0;
                requestAnimationFrame(this.gameLoop.bind(this));
            }
            else {
                this.gameover = new gameOver(this);
            }
        }
        else {
            requestAnimationFrame(this.gameLoop.bind(this));
        }
    };
    return startGame;
}());
var gameOver = (function () {
    function gameOver(g) {
        var _this = this;
        this.game = g;
        this.game.question.div.remove();
        this.game.player.div.remove();
        this.game.player.lives.div.remove();
        this.game.player.score.div.remove();
        this.game.createIngredients.bread.ingredient.remove();
        this.game.createIngredients.cheese.ingredient.remove();
        this.game.createIngredients.ketchup.ingredient.remove();
        this.game.createIngredients.lettuce.ingredient.remove();
        this.game.createIngredients.mustard.ingredient.remove();
        this.game.createIngredients.patty.ingredient.remove();
        this.game.createIngredients.pickles.ingredient.remove();
        this.game.createIngredients.tomatoes.ingredient.remove();
        this.div = document.createElement("gameover");
        document.body.appendChild(this.div).innerHTML = "SPONGEBOB, YOU'RE FIRED! your score is: " + this.game.player.score.score + ".";
        this.playAgain = document.createElement("startBtn");
        document.body.appendChild(this.playAgain).addEventListener("click", function () { return _this.createGame(); });
    }
    gameOver.prototype.createGame = function () {
        this.div.remove();
        this.div = undefined;
        this.playAgain.remove();
        this.playAgain = undefined;
        this.game = new startGame;
    };
    return gameOver;
}());
var Ingredients = (function () {
    function Ingredients() {
        this.width = 50;
        this.height = 50;
    }
    Ingredients.prototype.createDiv = function (ingredient, x, y) {
        document.body.appendChild(ingredient);
        ingredient.style.transform = "translate(" + x + "px," + 600 + "px)";
    };
    return Ingredients;
}());
var Player = (function () {
    function Player(g) {
        var _this = this;
        this.answer = [];
        this.x = 0;
        this.y = 0;
        this.width = 50;
        this.height = 50;
        this.leftSpeed = 0;
        this.rightSpeed = 0;
        this.downSpeed = 0;
        this.upSpeed = 0;
        this.leftKey = 65;
        this.rightKey = 68;
        this.upKey = 87;
        this.downKey = 83;
        this.createDiv();
        this.score = new Score(g);
        this.lives = new Lives;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
    }
    Player.prototype.createDiv = function () {
        this.div = document.createElement("player");
        document.body.appendChild(this.div);
    };
    Player.prototype.move = function () {
        this.x = this.x - this.leftSpeed + this.rightSpeed;
        this.y = this.y - this.upSpeed + this.downSpeed;
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    Player.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
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
    };
    Player.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
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
    };
    return Player;
}());
var Question = (function () {
    function Question() {
        this.code = [];
        this.stringIngredients = ["leeg", "bread", "cheese", "ketchup", "lettuce", "mustard", "patty", "pickles", "tomatoes"];
        this.question = "Make me a krabbypatty with: ";
        this.codeGenerator();
    }
    Question.prototype.createDiv = function (question) {
        this.div = document.createElement("question");
        document.body.appendChild(this.div).innerHTML = question;
    };
    Question.prototype.codeGenerator = function () {
        while (this.code.length < 5) {
            this.randnumber = Math.ceil(Math.random() * 8);
            if (this.code.indexOf(this.randnumber) > -1)
                continue;
            this.code[this.code.length] = this.randnumber;
        }
        for (var i = 0; i < 5; i++) {
            this.question = this.question + this.stringIngredients[this.code[i]] + ", ";
            if (i == 4) {
                this.createDiv(this.question);
            }
        }
    };
    return Question;
}());
var Bread = (function (_super) {
    __extends(Bread, _super);
    function Bread() {
        var _this = _super.call(this) || this;
        _this.key = 1;
        _this.ingredient = document.createElement("bread");
        _this.x = 100;
        _this.y = 600;
        _this.createDiv(_this.ingredient, _this.x, _this.y);
        return _this;
    }
    return Bread;
}(Ingredients));
var Cheese = (function (_super) {
    __extends(Cheese, _super);
    function Cheese() {
        var _this = _super.call(this) || this;
        _this.key = 2;
        _this.ingredient = document.createElement("cheese");
        _this.x = 200;
        _this.y = 600;
        _this.createDiv(_this.ingredient, _this.x, _this.y);
        return _this;
    }
    return Cheese;
}(Ingredients));
var Ketchup = (function (_super) {
    __extends(Ketchup, _super);
    function Ketchup() {
        var _this = _super.call(this) || this;
        _this.key = 3;
        _this.ingredient = document.createElement("ketchup");
        _this.x = 300;
        _this.y = 600;
        _this.createDiv(_this.ingredient, _this.x, _this.y);
        return _this;
    }
    return Ketchup;
}(Ingredients));
var Lettuce = (function (_super) {
    __extends(Lettuce, _super);
    function Lettuce() {
        var _this = _super.call(this) || this;
        _this.key = 4;
        _this.ingredient = document.createElement("lettuce");
        _this.x = 400;
        _this.y = 600;
        _this.createDiv(_this.ingredient, _this.x, _this.y);
        return _this;
    }
    return Lettuce;
}(Ingredients));
var Mustard = (function (_super) {
    __extends(Mustard, _super);
    function Mustard() {
        var _this = _super.call(this) || this;
        _this.key = 5;
        _this.ingredient = document.createElement("mustard");
        _this.x = 500;
        _this.y = 600;
        _this.createDiv(_this.ingredient, _this.x, _this.y);
        return _this;
    }
    return Mustard;
}(Ingredients));
var Patty = (function (_super) {
    __extends(Patty, _super);
    function Patty() {
        var _this = _super.call(this) || this;
        _this.key = 6;
        _this.ingredient = document.createElement("patty");
        _this.x = 600;
        _this.y = 600;
        _this.createDiv(_this.ingredient, _this.x, _this.y);
        return _this;
    }
    return Patty;
}(Ingredients));
var Pickles = (function (_super) {
    __extends(Pickles, _super);
    function Pickles() {
        var _this = _super.call(this) || this;
        _this.key = 7;
        _this.ingredient = document.createElement("pickles");
        _this.x = 700;
        _this.y = 600;
        _this.createDiv(_this.ingredient, _this.x, _this.y);
        return _this;
    }
    return Pickles;
}(Ingredients));
var Tomatoes = (function (_super) {
    __extends(Tomatoes, _super);
    function Tomatoes() {
        var _this = _super.call(this) || this;
        _this.key = 8;
        _this.ingredient = document.createElement("tomatoes");
        _this.x = 800;
        _this.y = 600;
        _this.createDiv(_this.ingredient, _this.x, _this.y);
        return _this;
    }
    return Tomatoes;
}(Ingredients));
var Lives = (function () {
    function Lives() {
        this.live = 3;
        this.roundOver = false;
        this.createDiv();
    }
    Lives.prototype.createDiv = function () {
        this.div = document.createElement("lives3");
        document.body.appendChild(this.div);
    };
    Lives.prototype.loseLives = function () {
        this.live -= 1;
        if (this.live == 2) {
            this.div.remove();
            this.div = document.createElement("lives2");
        }
        else {
            this.div.remove();
            this.div = document.createElement("lives1");
        }
        document.body.appendChild(this.div);
        this.roundOver = true;
    };
    Lives.prototype.gameOver = function () {
    };
    return Lives;
}());
var Score = (function () {
    function Score(g) {
        this.score = 0;
        this.game = g;
        this.createDiv(this.score);
    }
    Score.prototype.createDiv = function (score) {
        this.div = document.createElement("score");
        document.body.appendChild(this.div).innerHTML = "Score: " + score;
    };
    Score.prototype.hidequestion = function () {
        if (this.game.player.answer.length == 1) {
            this.game.question.div.remove();
        }
    };
    Score.prototype.checkAnswer = function () {
        this.hidequestion();
        if (this.game.question.code.length == this.game.player.answer.length) {
            if (this.game.question.code.toString() == this.game.player.answer.toString()) {
                this.roundWon();
            }
            else {
                this.game.player.lives.loseLives();
            }
        }
    };
    Score.prototype.roundWon = function () {
        this.game.player.lives.roundOver = true;
        this.score += 10;
        this.updateScore(this.score);
    };
    Score.prototype.updateScore = function (score) {
        this.div.remove();
        this.div = document.createElement("score");
        document.body.appendChild(this.div).innerHTML = "Score: " + score;
    };
    return Score;
}());
//# sourceMappingURL=main.js.map