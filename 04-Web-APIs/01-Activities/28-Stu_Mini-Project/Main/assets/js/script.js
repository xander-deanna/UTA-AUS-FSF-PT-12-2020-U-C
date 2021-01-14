
var startBtn = document.querySelector(".start-button");
var wordBank = ["javascript", "coding", "developers"];
var timer = document.querySelector(".timer")
var wins = 0
var loses = 0
var secondsLeft = 10
var gameDisplay document.querySelector(".word-blanks")

function startGame() {
    console.log("Game Started")
}

funcation setTime(){
    var timerInterval = setInterval(funcation() {
        secondsLeft--;
        console.log(secondsLeft)
        timerEl.innerText = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }

    }

}
startB.addEventListener("click", startGame);
