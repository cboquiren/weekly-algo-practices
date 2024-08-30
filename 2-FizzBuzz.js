// Prompt: Write a function that prints numbers from 1 to 100. For multiples of three, print "Fizz" instead of the number, and for multiples of five, print "Buzz".
// For numbers which are multiples of both three and five, print "FizzBuzz".

// Extension: Modify the function to take two additional parameters fizzNumber and buzzNumber to generalize the FizzBuzz logic to any two numbers.

const fizzBuzz = () => {
  for (let x = 1; x <= 100; x++) {
    if (x % 5 === 0 && x % 3 === 0) {
      console.log("FizzBuzz");
    } else if (x % 5 === 0) {
      console.log("Buzz");
    } else if (x % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(x);
    }
  }
};

const fizzBuzzExtended = (a, b) => {
  for (let x = 1; x <= 100; x++) {
    if (x % a === 0 && x % b === 0) {
      console.log("FizzBuzz");
    } else if (x % a === 0) {
      console.log("Fizz");
    } else if (x % b === 0) {
      console.log("Buzz");
    } else {
      console.log(x);
    }
  }
};

fizzBuzz();
fizzBuzzExtended(4, 9);
