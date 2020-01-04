var gemNumPurple;
var gemNumPink;
var gemNumBlue;
var gemNumYellow
var winNum = 0;
var loseNum = 0;
var totalScoreNum = 0;
var randomNum;
var gameStarted = false;


$(document).ready(function() {
  startGame();

  $("#pnkgem").on("click", function() {
    totalScoreNum += gemNumPink;
    $("#total-score-num").text(totalScoreNum);
    $("#win-lose-message").text(""); //to remove You Win or You Lose message
    setWinLose();
  });

  $("#prplgem").on("click", function() {
    totalScoreNum += gemNumPurple;
    $("#total-score-num").text(totalScoreNum);
    $("#win-lose-message").text("");
    setWinLose();
  });

  $("#blugem").on("click", function() {
    totalScoreNum += gemNumBlue;
    $("#total-score-num").text(totalScoreNum);
    $("#win-lose-message").text("");
    setWinLose();
  });

  $("#ylwgem").on("click", function() {
    totalScoreNum += gemNumYellow;
    $("#total-score-num").text(totalScoreNum);
    $("#win-lose-message").text("");
    setWinLose();
  });
});

//function to start the game
function startGame() {
  gameStarted = true;

  // At the start of the game, random number is generated

  randomNum = Math.floor(Math.random() * 121);
  while (randomNum < 19) {
    randomNum = Math.floor(Math.random() * 121);
  }
  $("#random-num-box").text(randomNum);

  //At the start of the game, the crystals are assigned with a random hidden value
  //Each crystal cannot generate the same hidden value
  while (
    gemNumPink === gemNumPurple ||
    gemNumPink === gemNumBlue ||
    gemNumPink === gemNumYellow ||
    gemNumPurple === gemNumBlue ||
    gemNumPurple === gemNumYellow ||
    gemNumBlue === gemNumYellow
  ) {
    gemNumPink = 1 + Math.floor(Math.random() * 12);
    gemNumPurple = 1 + Math.floor(Math.random() * 12);
    gemNumBlue = 1 + Math.floor(Math.random() * 12);
    gemNumYellow = 1 + Math.floor(Math.random() * 12);
  }
  //total score number is set to Zero
  totalScoreNum = 0;
  $("#total-score-num").text(totalScoreNum);
}

//Function to determine win or lose and then restart the game without changing the win or lose number(s)
function setWinLose() {
  if (totalScoreNum === randomNum) {
    winNum++;
    $("#win-num").text(winNum);
    $("#win-lose-message").text("You Win!!!");
    startGame();
  } else if (totalScoreNum > randomNum) {
    loseNum++;
    $("#lose-num").text(loseNum);
    $("#win-lose-message").text("You Lose!!!");
    startGame();
  }
}
// var gemNumPink;
// var gemNumPurple;
// var gemNumBlue;
// var gemNumYellow;
// var randomNum; 
// var win = 0;
// var lose = 0;
// var score = 0;
// var gameStarted = false;

// $(document).ready(function() {
//     startGame();

//     $("#pnkgem").on("click",function() {
//         score += gemNumPink;
//         $("#score").text(score);
//         $("#lose-win").text("");
//         setLoseWin();
//     });

//     $("#prplgem").on("click",function() {
//         score += gemNumPurple;
//         $("#score").text(score);
//         $("#lose-win").text("")
//         setLoseWin();
//     });

//     $("#blugem").on("click",function() {
//         score += gemNumBlue;
//         $("#score").text(score);
//         $("#lose-win").text("")
//         setLoseWin();
//     });

//     $("#ylwgem").on("click",function() {
//         score += gemNumYellow;
//         $("#score").text(score);
//         $("#lose-win").text("")
//         setLoseWin();
//     });
// });

// function startGame() {
//     gameStarted = true;

//     randomNum = Math.floor(Math.random() * 121);
//     while (randomNum < 19) {
//         randomNum = Math.floor(Math.random() * 121);
//     }
//     $("#random-num-box").text(randomNum);

//     gemNumPink === gemNumPurple ||
//     gemNumPink === gemNumBlue ||
//     gemNumPink === gemNumYellow ||

//     gemNumPurple === gemNumYellow ||
//     gemNumPurple === gemNumBlue ||
// }

// function setLoseWin() {
//     if (score === randomNum) {
//         win++;
//     }
// }