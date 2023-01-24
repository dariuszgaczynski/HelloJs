function sayHelloWorld() {
  window.alert("Hello World - Alert");
  console.log("Hello World - Console")
}
sayHelloWorld();

function writeTheHour() {
  let currentDate = new Date();
  console.log(currentDate.getHours())
}
writeTheHour();

let firstNumber;
let secondNumber;

function sum2Numbers() {
  do {
    firstNumber = window.prompt("Please enter first number");
    if (isNaN(firstNumber)) {
      window.alert("error for the first input");
      continue;
    }
    secondNumber = window.prompt("Please enter second number")
    if (isNaN(secondNumber)) {
      window.alert("error for the second input");
      continue;
    }
    let thirdNumber = Number(firstNumber) + Number(secondNumber);
    console.log(thirdNumber);
  } while (isNaN(firstNumber) || isNaN(secondNumber))
}
sum2Numbers();

function writeEachLetterOfAWord() {
  let word = window.prompt("Please enter a word");
  let splitWord = word.split("");
  splitWord.forEach(letter => console.log(letter));
}
writeEachLetterOfAWord();

function getTheNumberOfLettersInAWord() {
  let word = window.prompt("Please enter a word");
  word = word.replaceAll(" ", "");
  let splitWord = word.split("")
  console.log(splitWord.length);
  console.log(splitWord);
}
getTheNumberOfLettersInAWord();

function writeTheReverseOfWord() {
  let word = window.prompt("Please enter a word");
  let splitWord = word.split("").reverse();
  splitWord.forEach(letter => console.log(letter));
}
writeTheReverseOfWord();

let number;

function isOdd(number) {
  return Boolean(number % 2);
}

function sumOfOddNumbers() {
  do {
    number = window.prompt("Please enter a number");
    if (isNaN(number)) {
      window.alert("error for the first input");
    }
  } while (isNaN(number))

   let sum = 0;

  for (let i = 0; i < number; i++) {
    if (isOdd(i)) {
      sum += i;
    }
  }
  console.log(sum);
}
sumOfOddNumbers();
