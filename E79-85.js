let myVar = "myCountry";
let user = {
  theName: "marwa",
  theAge: 34,
  color: "brown",
  sayHello: () => `hello`,
  myCountry: "Egypt",
};
console.log(user.theName);
console.log(user.theAge);
console.log(user.color);
console.log(user.sayHello());
console.log(user["theName"]);
console.log(user["theAge"]);
console.log(user["color"]);
console.log(user["sayHello()"]); // doesnt work with functions
console.log(user[myVar]);
console.log(myVar);

let user1 = {
  theName: "marwa",
  theAge: 34,
  skills: ["AutoCad", "Max", "Revit"],
  Adresses: {
    Jordan: "Amman",
    Egypt: {
      one: "Hurghada",
      two: "Alexandrea",
    },
  },
  availabilty: false,
  check: () => (this.available === true ? "available" : "not available "),
};
console.log(user1.theName);
console.log(user1["theAge"]);
console.log(user1.skills[1]);
console.log(user1.Adresses.Egypt.two);
console.log(user1.check());

user1.theName = "hassan"; // to update theName in user1
console.log(user1.theName);

let user2 = new Object({
  // creating object with (new) word
  theAge: 22,
  doubleAge: () => user2.theAge * 2,
});
console.log(user2.theAge);
console.log(user2.doubleAge());

let user3 = Object.create({
  //creating object with (create)
  a: 100,
});
console.log(user3.a);

let copyObj1 = Object.create(user2);
(copyObj1.theAge = 33), (copyObj1.doubleAge = () => copyObj1.theAge * 2);
console.log(copyObj1.theAge);
console.log(copyObj1.doubleAge());

let member = {
  name: "Elzero",
  age: 38,
  country: "Egypt",
  fullDetails: () =>
    `My Name Is ${member.name}, My Age Is ${member.age}, I Live in ${member.country}`,
};

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

// Method One
let objMethodOne = {
  property: "Method One",
};
console.log(objMethodOne.property); // "Method One"

// Method Two
// Creat
let objMethodTwo = ({}, { property: "Method two" });

console.log(objMethodTwo.property); // "Method Two"

// Method Three
let objMethodThree = new Object({
  property: "Method Three",
});

console.log(objMethodThree.property); // "Method Three"

// Method Four
let objMethodFour = Object.create({
  property: "Method Four",
});

console.log(objMethodFour.property); // "Method Four"

let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

let finalObject = Object.assign({}, { a }, threeNums, twoNums);
console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/

// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length;
console.log(objectLength);

console.log(Object.keys(myFavGames));

let newArray = Object.keys(myFavGames);

for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${newArray[i]}`);
  console.log(`The Publisher Is ${myFavGames[newArray[i]]["publisher"]}`);
  console.log(`The Price Is ${myFavGames[newArray[i]]["price"]}`);

  // Check If Nested Object Has Property (bestThree)
  if ((Object.hasOwn(myFavGames[newArray[i]]), "bestThree")) {
    console.log("- Game Has Releases");
    console.log(`First => ${myFavGames[newArray[i]]["bestThree"]["one"]}`);
    console.log(`Second => ${myFavGames[newArray[i]]["bestThree"]["two"]}`);
    console.log(`Third => ${myFavGames[newArray[i]]["bestThree"]["three"]}`);
  }
  console.log("#".repeat(20));
}
// Ouput

// "The Game Name Is Trinity Universe"
// "The Publisher Is NIS America"
// "The Price Is 40"
// "####################"
// "The Game Name Is Titan Quest"
// "The Publisher Is THQ"
// "The Price Is 50"
// "- Game Has Releases"
// "First => Immortal Throne"
// "Second => Ragnarök"
// "Third => Atlantis"
// "####################"
// "The Game Name Is YS"
// "The Publisher Is Falcom"
// "The Price Is 40"
// "- Game Has Releases"
// "First => Oath in Felghana"
// "Second => Ark Of Napishtim"
// "Third => origin"
// "####################"
