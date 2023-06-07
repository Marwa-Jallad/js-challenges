let myData = [1, 1, 1, 2, 3];
let myUniqueData = new Set(myData);

console.log(myUniqueData);
console.log(myData[0]);
console.log(myUniqueData[0]);

myUniqueData.add(5);
console.log(myUniqueData);

myUniqueData.delete(2);
console.log(myUniqueData);

myUniqueData.add("A");

console.log(myUniqueData.has("A"));

let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);
console.log(mySet);
console.log(`the size of this set ${mySet.size}`);

let key = mySet.keys();
console.log(key.next().value);
console.log(key.next().value);
console.log(key.next().value); //to get the values of the keys
console.log(key.next().value);

let mws = new WeakSet([{ A: 1, B: 2 }]);
console.log(mws);

let myObj = {};
let myEmptyObj = Object.create({ a: 1, b: 2 });
let myMap = new Map();
myMap.set(10, "Number");
myMap.set("10", "string");

console.log(myObj);
console.log(myMap.get(10));
console.log(myEmptyObj);

let setOfNumbers = new Set([10]);

setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
console.log(Array.from(setOfNumbers)[2]);

console.log(
  "***************************************************************************"
);

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
console.log(Array.from(new Set(myFriends)).sort());

// Needed Output
// (4)[("Ahmed", "Mahmoud", "Osama", "Sayed")];

console.log(
  "***************************************************************************"
);
let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};
let infoMap = new Map(Object.entries(myInfo));
console.log(infoMap);
console.log(infoMap.size);
console.log(infoMap.has("role"));

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true

console.log(
  "***************************************************************************"
);

let theNumber = 100020003000;
console.log([...new Set(theNumber.toString())].sort().slice(true).join(""));

// Needed Output
// 123

console.log(
  "***************************************************************************"
);
let theName = "Elzero";
console.log(Array.from(theName));
console.log([...theName]);
console.log([..."Elzero"]);
let name1 = [];
for (i = 0; i < theName.length; i++) {
  name1.push(theName[i]);
}
console.log(name1);
console.log(theName.split(""));
console.log([...new Set(theName)]);
console.log(Object.assign([], theName));

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']

console.log(
  "***************************************************************************"
);
// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
let chars = ["Z", "Y", "A", "D", "E", 10, 1];
let num = [];
let string = [];
// let final;

for (i = 0; i < chars.length; i++) {
  if (typeof chars[i] === "number") {
    num.push(chars[i]);
  } else {
    string.push(chars[i]);
  }
}
chars = [...num, ...string];
console.log(chars.copyWithin(0, num.length, num.length * 2));

// let result = [];
// for (i = 0; i < num.length; i++) {
//   if (num.length <= string.length) {
//     const char = string[i];
//     result.push(char);
//     chars = [...result, ...string];
//   }
// }

// console.log("num", num.length);
// console.log("string", string);
// console.log("chars", chars);

// console.log(chars.copyWithin(num.length));
// Needed Output
//   ("A", "B", "C", "A", "B", "C", "D", "E")
// ;

console.log(
  "***************************************************************************"
);
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log(numsOne.concat(numsTwo));
console.log([...numsOne, ...numsTwo]);

numsOne.push(...numsTwo);
console.log(numsOne);
// Needed Output
// [1, 2, 3, 4, 5, 6]

console.log(
  "***************************************************************************"
);
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(Math.max(...n1) * n1.concat(n2).length);

// Needed Output
210;

let notNum = "12345678910";
let notNsRe = /[^0-2]/;
console.log(notNum.match(notNsRe));
