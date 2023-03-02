let mario = document.querySelector(".mario");
let coin = document.querySelector(".coin");
let score = document.querySelector(".score");
let title = document.querySelector("h1");
let background = document.querySelector("body");
let jumpButton = document.querySelector(".jump");
let jumpDownButton = document.querySelector(".jump-down");
let changeColorButton = document.querySelector(".change-color");
let endGameButton = document.querySelector(".end-game");
let updateScoreButton = document.querySelector(".update-score");
let growButton = document.querySelector(".grow");

jumpButton.onclick = function() {
    mario.style.bottom = "120px";
    coin.style.display = "none";
};



jumpDownButton.onclick = function() {
    mario.style = "bottom: 35px";
};


changeColorButton.onclick = function() {
    background.style.backgroundColor = "skyblue";
};


endGameButton.onclick = function() {
    title.innerHTML = "Game over.";
};


updateScoreButton.onclick = function() {
    score.innerHTML = 1;
};



growButton.onclick = function() {
	mario.style.width = "300px";
    mario.style.height = "300px";
};

