let myNums = [1, 2, 3, 4, 5, 6];
let newArray = [];
for (i = 0; i < myNums.length; i++) {
  newArray.push(myNums[i] + myNums[i]);
}
console.log(newArray);

let addSelf = myNums.map((element) => element + element, 10);
console.log(addSelf);

const addetion = (a) => a + a;

let add = myNums.map(addetion);
console.log(add);

let swappingCasses = "eLZERo";
let sw = swappingCasses
  .split("")
  .map(function (ele) {
    return ele === ele.toLocaleUpperCase()
      ? ele.toLocaleLowerCase()
      : ele.toLocaleUpperCase();
  })
  .join("");
console.log(sw);

let invertedNumbers = [1, -10, -20, 15, 100, -30];
let inv = invertedNumbers.map((ele) => -ele);
console.log(inv);

let ignoreNumbers = "ELz123er4o";

let ig = ignoreNumbers
  .split("")
  .map(function (elem) {
    return isNaN(elem) ? elem : "";
  })
  .join("");
console.log(ig);

let friends = ["Ahmad", "Sameh", "Sayed", "Asmaa", "Amjad", "Israa"];

let myFriends = friends.filter(function (elem) {
  return elem.startsWith("A");
});
console.log(myFriends);

let numbers = [11, 20, 25, 17, 10];
let evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});
console.log(evenNumbers);

let sentence = "i love foood code playing too much ";

let newSentence = sentence
  .split(" ")
  .filter(function (wo) {
    return wo.length <= 4;
  })
  .join(" ");
console.log(newSentence);

let mix = "A13BS2ZX";
let nmix = mix
  .split("")
  .filter(function (no) {
    return isNaN(no) === false;
  })
  .map(function (no) {
    return no * no;
  });

console.log(nmix);

let thebiggest = ["bla", "propaganda", "other", "AAA", "Battery", "Test"];
let biggest = thebiggest.reduce(function (acc, current) {
  return acc.length > current.length ? acc : current;
});
console.log(biggest);

// let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];
// let letter = removeChars
//   .filter(function (char) {
//     return char !== "@";
//   })
//   .join("");
// console.log(letter);

let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];
let letter = removeChars
  .filter(function (char) {
    return char !== "@";
  })
  .reduce(function (acc1, current1) {
    return `${acc1}${current1}`;
  });
console.log(letter);

let Mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let lettersOnly = Mix.map(function (lett) {
  return isNaN(lett) ? lett : "";
}).reduce(function (acc, crrent) {
  return `${acc}${crrent}`;
});
console.log(lettersOnly);

console.log("*".repeat(40));

let myString = "EElllzzzzzzzeroo";
let onlyString = myString
  .split("")
  .filter(function (ele, index) {
    return myString.indexOf(ele) === index;
  })
  .join("");
console.log(onlyString);

console.log("*".repeat(40));

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let newArr = myArray
  .join("")
  .split("")
  .filter(function (ele) {
    return ele !== ",";
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  });
console.log(newArr);

console.log("*".repeat(40));

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let negativNo = numsAndStrings
  .filter(function (nom) {
    return isNaN(nom) === false;
  })
  .map(function (nom) {
    return -`${nom}`;
  });
console.log(negativNo);

let nums = [2, 12, 11, 5, 10, 1, 99];
let sumOfnums = nums.reduce(function (acc, current) {
  if (current % 2 === 0) return acc * current;
  else return acc + current;
}, 1);
console.log(sumOfnums);

// 500
