// Stacks
// A stack is a linear data structure that follows the LIFO (Last-In First-Out) principle.
console.log(" Stacks ");


// Creating a stack
let Stack = function () {
  this.count = 0;
  this.storage = {};

  // add value to end of the stack
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  //remove and return the value at end of the stack
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  //returns the size of the stack
  this.size = function () {
    return this.count;
  };

  //returns the last item of the stack
  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

let myStack = new Stack();
myStack.push(1); // [1]
myStack.push(2); // [1,2]
console.log(myStack.pop()); // removes 2 from stack and return 2 -> [1]
console.log(myStack.peek()); // returns 2
console.log(myStack.size()); // returns 1
myStack.push("Aayush Lamichhane"); //adds to the stack
console.log(myStack.size()); // returns 2
console.log(myStack.peek()); //returns "Aayush Lamichhane"
console.log(myStack.pop()); // removes "Aayush Lamichhane" and returns it
console.log(myStack.size()); // returns 1




//Problem: to check whether the given word is palindrome using array
let letters = []; //this is our stack
// let originalWord = prompt("Enter word: ");
let originalWord = "racecar";
let reverseWord = "";

//put letters word in stack
for (let i = 0; i < originalWord.length; i++) {
  letters.push(originalWord[i]);
}

//pop off the stack
for (let i = 0; i < originalWord.length; i++) {
  reverseWord += letters.pop();
}

if (reverseWord === originalWord) {
  console.log(`${originalWord} is a palindrome`);
} else {
  console.log(`${originalWord} is not a palindrome`);
}







