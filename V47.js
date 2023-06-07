let zero = 0;
let counter = 3;
let my = ["Ahmad", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
console.log(my.slice(zero, ++counter).reverse());

my.shift();
console.log(my.slice(zero, my.length - --counter).reverse());
my.unshift("Ahmad");

console.log(
  my[--counter].slice(zero, counter) + my[++zero].slice(counter, ++my.length)
);
// console.log(my[zero].slice(counter + counter, my.length));
console.log(
  my[zero][counter + counter] + my[zero][counter + counter + zero].toUpperCase()
);

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.slice(myFriends.indexOf("Ahmed"), num)); // ["Ahmed", "Elham", "Osama"];

// Ex   2   0000000000000000
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.shift();
friends.pop();
console.log(friends); // ["Eman", "Osama"]

// Ex   3   0000000000000000

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = arrOne.concat(arrTwo);

// Write One Single Line Of Code

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// Ex   4   0000000000000000

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[2][0].slice(2, 6).toUpperCase()); // ZERO

// Ex   5   0000000000000000

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

console.log(haystack.includes(needle));
console.log(haystack.includes("JS"));
console.log(haystack[1] === needle);
console.log(haystack.indexOf(needle) === 1);

if (haystack.includes(needle) || haystack[1] === needle) {
  console.log("found");
} else {
  console.log("not found");
}

// Ex   6   0000000000000000

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [
  arr2.slice(arr2.indexOf("F"), arr2.indexOf("Y")) +
    arr1.slice(arr1.indexOf("X")) +
    arr2.slice(arr2.indexOf("Y")),
];

// Your Code Here

// Ex   7   0000000000000000

console.log(allArrs); // fxy

for (i = 1; i <= 10; i++) {
  console.log(i);
}

// Ex   8  0000000000000000

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
let colors = ["Red", "Green", "Black"];
let models = ["2020", "2021"];

for (i = 0; i < products.length; i++) {
  console.log("products=");
  console.log(`# ${products[i]}`);
  console.log("colors =");
  for (j = 0; j < colors.length; j++) {
    console.log(`* ${colors[j]}`);
  }
  console.log("models=");
  for (k = 0; k < models.length; k++) {
    console.log(` @ ${models[k]}`);
  }
}
