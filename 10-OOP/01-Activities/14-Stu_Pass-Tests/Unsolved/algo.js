function Algo() {}

Algo.prototype.reverse = function(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");

    return joinArray;
};

// Algo.prototype.isPalindrome = function(str) {
//   // TODO: Your code here
// };

// Algo.prototype.capitalize = function(str) {
//   // TODO: Your code here 
// };

module.exports = Algo;
