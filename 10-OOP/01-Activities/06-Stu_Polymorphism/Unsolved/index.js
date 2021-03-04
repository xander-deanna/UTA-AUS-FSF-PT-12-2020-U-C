// Helper function to evaluate if a number is within a given range
const inRange = (x, min, max) => (x - min) * (x - max) <= 0;

function Student(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;

  // Method that will simulate method overloading in JavaScript
  this.displayGrade = function (grade) {
    const input = grade;
    if (!input) {
      throw new Error('no grade provided');
    }
    let response;
    // Return a letter grade if a number grade was passed
    // Ex. 95 => 'A'
    if (typeof input === 'number') {
    return response;
    }
    
    // Return a range if a letter grade was passed
    // Ex. 'A' => '90 - 100'
    if (typeof input === 'string') {
      switch (grade) {
        case 'A': 
          reponse = '90 - 100';
          break;
        case 'B': 
          reponse = '80 - 89';
          break;
        case 'C': 
          reponse = '70 - 79';
          break;
        case 'D': 
          reponse = '60 - 69';
          break;
        case 'F':
          response = '1 - 59'
        default:
          response = '0'
          break;
        }
      }
      return response;
    }
  };

const John = new Student('John', 'Appleseed', '30');
console.log('John.displayGrade():', John.displayGrade(95));
console.log('John.displayGrade():', John.displayGrade('B'));
