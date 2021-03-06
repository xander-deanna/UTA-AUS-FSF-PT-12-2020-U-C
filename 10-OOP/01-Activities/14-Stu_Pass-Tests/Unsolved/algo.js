function Algo() {}

Algo.prototype.reverse = function(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");

    return joinArray;
};

Algo.prototype.isPalindrome = function(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");

    console.log(str === joinArray)

    return str === joinArray
};

Algo.prototype.capitalize = function(str) {
  var splitSentence = str.split(" ");
  var capWord = "";
  for (var i = 0; i < splitSentence.length; i ++){
      var word = splitSentence[i]
      capWord += word.charAt(0).toUpperCase() + word.slice(1) + " ";
  }
  return capWord.slice(0,capWord.length-1);
};

var testing = new Algo()
testing.capitalize("deanna alexander")

module.exports = Algo;
