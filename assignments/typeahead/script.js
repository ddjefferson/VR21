let names = [
  "David J.",
  "Sergio",
  "Chris",
  "David M.",
  "Sugey",
  "Chase",
  "Victoria",
  "Hitesh",
  "Joe",
  "John",
  "Donte",
  "Scott",
  "Michael",
  "Sarina",
  "Aeron",
  "Cindy",
  "Larry",
  "Stephanie",
  "Uyen",
  "Vlad",
];

// sort names in ascending order
let sortedNames = names.sort();
console.log(sortedNames);

// reference
let input = document.getElementById("input");

// Excecute function on keyup
input.addEventListener("keyup", (e) => {
  //loop through above array
  for (let i of sortedNames) {
    // convert input to lowerCase and compare with each string

    if (
      i.toLowerCase().startsWith(input.value.toLowerCase()) &&
      input.value != ""
    ) {
      //create li element
      let listItem = document.createElement("li");
      // One common class name
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "displayNames(' " + i + " ')");
      // display matched part in bold
      let word = "<b>" + i.substring(0, input.value.length) + "</b>";
      word += i.substring(input.value.length);
      // display the value in array
      listItem.innerHTML = word;
      document.querySelector(".list").appendChild(listItem);
    }
  }
});
function displayNames(value) {
  input.value = value;
}
