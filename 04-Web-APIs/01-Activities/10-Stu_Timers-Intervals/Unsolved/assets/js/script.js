var timerEl = document.getElementById('countdown')
var mainEl = document.getElementById('main')

var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
var words = poem.split(' ');

var mainEl = document.getElementById("main");
var timerEl = document.getElementById("countdown");
var bodyEl = document.createElement("div");

var i = 0;

var secondsPerWord = prompt("How many seconds between words would you like?");

function prepareRead() {
  var timeLeft = secondsPerWord;

  var timeInterval = setInterval(function() {
    timerEl.textContent = timeLeft + " seconds remaining";
    timeLeft--;

    if (timeLeft === 0) {
      timerEl.textContent = "";
      speedRead();
      clearInterval(timeInterval);
    }

  }, 1000);
}

function speedRead() {
  //Add Your Code Here
}

prepareRead();
