var gemNumPink;
var gemNumPurple;
var gemNumBlue;
var gemNumYellow;
var randomNum; 
var win = 0;
var lose = 0;
var score = 0;
var gameStarted = false;

$(document).ready(function() {
    startGame();

    $("#pnkgem").on("click",function() {
        score += gemNumPink;
        $("#score").text(score);
        $("#lose-win").text("");
        setLoseWin();
    });

    $("#prplgem").on("click",function() {
        score += gemNumPurple;
        $("#score").text(score);
        $("#lose-win").text("")
        setLoseWin();
    });

    $("#blugem").on("click",function() {
        score += gemNumBlue;
        $("#score").text(score);
        $("#lose-win").text("")
        setLoseWin();
    });

    $("#ylwgem").on("click",function() {
        score += gemNumYellow;
        $("#score").text(score);
        $("#lose-win").text("")
        setLoseWin();
    });
});

function startGame() {
    gameStarted = true;

    randomNum = Math.floor(Math.random() * 121);
    while (randomNum < 19) {
        randomNum = Math.floor(Math.random() * 121);
    }
    $("#random-num-box").text(randomNum);

    gemNumPink === gemNumPurple ||
    gemNumPink === gemNumBlue ||
    gemNumPink === gemNumYellow ||

    gemNumPurple === gemNumYellow ||
    gemNumPurple === gemNumBlue ||
}

function setLoseWin() {
    if (score === randomNum) {
        win++;
    }
}