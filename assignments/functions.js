// assignment starts
// const difference = function => (num1, num2) {
//   return num1 - num2;

// }
// difference(8,2);
// function name(params) {}

//  function writeArgs(arg1,arg2) {
//   console.log(...arguments);
// };

// writeArgs("First", "Second", "Third", "Fourth");

// difference
/*
function difference(a, b) {
  return a - b;
}
console.log(2, 2);
console.log(0, 2);

// product
function product(a, b) {
  return a * b;
}
console.log(2 * 2);
console.log(0 * 2);

// printDay
// TODO: finish this
function printDay(num) {
  let dates = {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday",
  };
  return dates[num];
}
console.log(printDay(1));
console.log(printDay(41));

//lastElement
function lastElement(arr) {
  return arr[arr.length - 1];
}
console.log(lastElement([1, 2, 3, 4]));
console.log(lastElement([]));

// numberCompare
function numberCompare(a, b) {
  if (a === b) {
    return "Numbers are equal";
  } else if (a > b) {
    return "First is greater";
  }
  return "Second is greater";
}
console.log(numberCompare(1, 1));
console.log(numberCompare(2, 1));
console.log(numberCompare(1, 2));

// singleLetterCount
function singleLetterCount(str1, letter) {
  let finalCount = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i].toLowerCase() === letter.toLowerCase()) {
      finalCount++;
    }
  }
  return finalCount;
}

console.log(singleLetterCount("amazing", "A")); // 2
console.log(singleLetterCount("Rithm School", "o")); // 2

// multipleLetterCount
function multipleLetterCount(str) {
  str = str.toLowerCase();
  let finalObj = {};
  for (let i = 0; i < str.length; i++) {
    if (finalObj[str[i]] === undefined) {
      finalObj[str[i]] = 1;
    } else {
      finalObj[str[i]]++;
    }
  }
  return finalObj;
}

//arrayManipulation
function arrayManipulation(arr, command, position, val) {
  if (command === "remove") {
    if (position === "end") {
      return arr.pop();
    }
    return arr.shift();
  } else if (command === "add") {
    if (position === "end") {
      arr.push(val);
      return arr;
    }
    arr.unshift(val);
    return arr;
  }
}

//isPalindrome
function isPalindrome(str) {
  return str.toLowerCase().split("").reverse().join("") === str.toLowerCase();

  // for(let i =0; i<str.length/2; i++){
  //   if(str[i].toLowerCase() !== str[str.length-1-i].toLowerCase()){
  //     return false;
  //   }
  // }
  // return true;
}
*/
//  *** BONUS ***
function RPS() {
  function determineComputer(num) {
    if (num <= 0.33) return "rock";
    else if (num <= 0.66) return "paper";
    return "scissor";
  }

  let userChoice = prompt("Choose rock / paper or scissor").toLowerCase();
  let computerChoice = determineComputer(Math.random());

  let answers = ["rock", "paper", "scissor"];

  if (!userChoice || answers.indexOf(userChoice) === -1) {
    alert ("Please select a valid option")
    return;
  }

  if (userChoice === computerChoice) 
  {
    return "Tie!";

  if (userChoice === "rock" && computerChoice === "paper") {
    return "You lose, computer picked " + computerChoice;
  }
  if (userChoice === "paper" && computerChoice === "scissor") {
    return "You lose, computer picked " + computerChoice;
  }
  if (userChoice === "scissor" && computerChoice === "rock") {
    return "You lose, computer picked " + computerChoice;
  }

  alert ("You win! Computer picked ") + computerChoice;
  return;
}

