const sentence = "I am new to learning Javascript";

// using slice method -> "I am new"
sentence.slice(0, 7);
console.log(sentence.slice(0, 8));

sentence.slice(0, 20);
console.log(sentence.slice(0, 20));

sentence.slice(12);
console.log(sentence.slice(12));

const myString = "my string";

const myName = "David";
myName.indexOf("d");
myName.indexOf("D");
myName.indexOf("v");

const username = "brad";

if (username.indexOf("b") === -1) {
  console.log("Your name must contain a B");
} else {
  console.log("Youre all good");
}

const str = "The quick brown fox jumps over the lazy dog.";
const words = str.split(" ");
console.log(words[3]);

const myDog = "Dior";
myDog.replace("i", "o"); // Door

let today = "Monday Tuesday Happy Days";
console.log(today.replace("Tuesday", "Wednesday"));

const instructorName = "David";
instructorName.concat(" Jefferson");

const age = 31;
instructorName`My name is ${instructorName} and I am ${age} years old`;
