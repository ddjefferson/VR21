console.log("Is this working");

const myName = "David";
const age = 31;
// use string literal or concatination

// console.log("My name: ", myName);
// console.log('My name is  ${myName}');

const num3 = 49;
const num4 = 41;
console.log("57 + 43 = ${num3+num4}");

const number = 9;
console.log("Type of number: ", typeof number);

const isLoggedIn = true;
console.log("Is logged in: ", isLoggedIn);

// favFood = "seaFood";
// favRestaurant = "TruLucks";
// console.log("I love " + favRestaurant + " they have the best " + favFood + "!");

console.log("6" == 6);

const firstName = "David";
const interest = "traveling";
const hobby = "read";
const awesomeMessage =
  "Hi, my name is " +
  firstName +
  ". " +
  "I love " +
  interest +
  "." +
  " In my spare time, I like to " +
  hobby +
  ".";
console.log(awesomeMessage);

// sqrt Whiskey/me == true;

let randomQuestion = "If i wrote you a love letter, would you write back?";
console.log(randomQuestion);

const number2 = 69;

console.log(
  "The square root of " +
    number2 +
    " is " +
    Math.sqrt(69) +
    " " +
    " cause i've been trying to work it out"
);

console.log(3 * 12 + 10 - 4);

const totalAfterTax = 53.03;
const tip = 8;
const total = totalAfterTax + tip;
console.log(total);

const celsius = 12;
const fahrenheit = celsius * 1.8 + 32;
console.log(fahrenheit);

const answer =
  "allegedly ALL are CrEaTeD equal" ==
  "allegedly ALL Strings are CrEaTeD equal";
console.log(answer);

const joke =
  'why couldn\'t the shoes go out and play?\n They were all "tied" up!';
console.log(joke);

0 == false;

"1" == 1;

const thingOne = "purple";
const thingTwo = "gold";
console.log(thingOne + " " + thingTwo);

for (i = 0; i < 17; i++) {
  console.log(i);
}

const firstName2 = " Slim ";
const lastName = " Shady";
const favFood = " Mom's Spaghetti";

console.log(
  `Hi, my name is ${firstName2} ${lastName}, ${favFood} is on my sweater already.`
);

const sentence = "I am new to learning Javascript";

// using slice method -> "I am new"
sentence.slice(0, 7);
console.log(sentence.slice(0, 8));

sentence.slice(0, 20);
console.log(sentence.slice(0, 20));

sentence.slice(12);
console.log(sentence.slice(12));

// const hasID = prompt("Do you have and ID?");
// const userAge = prompt("How old are you?");
// if (userAge > 21) {
//   console.log("You can enter the club and pop bottles");
// } else {
//   console.log("Go home!");
// }

if (true) {
  console.log("This was true");
} else {
  console.log("This was false"); // this would print true
}

//
if (true) {
  // print it was true
} else {
  // print it was false
}

//
let inputPassword = "secret1";

if (secret1 === dbPassword) {
  // authenticate the user
} else {
  // print your password was incorrect
}

let x = 10;

// only one of the branches below will run

if (x > 10) {
  console.log("x is greater than 10");
} else if (x === 10) {
  console.log("x is equal to 10");
} else {
  console.log("x is less than 10");
}
