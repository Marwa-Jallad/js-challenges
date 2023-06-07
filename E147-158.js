// class User {
//   static count = 0;
//   constructor(id, userName, salary) {
//     this.i = id;
//     this.u = userName || "enter your name";
//     this.s = salary < 6000 ? salary + 500 : salary;
//     this.msg = function () {
//       return `Hello ${this.u} your salary is ${this.s}`;
//     };
//   }
//   writeMsg() {
//     return `Hello ${this.u} your salary is ${this.s}`;
//   }
//   updateName(newName) {
//     this.u = newName;
//   }
//   static sayHello() {
//     return `hello from static class`;
//   }
//   static countMembers() {
//     return `${this.count} Mmbers Created `;
//   }
// }

// class Admin extends User {
//   constructor(id, userName, permession) {
//     super(id, userName);
//     this.p = permession;
//   }
// }

// let userOne = new User(100, "Elzero", 5000);
// let adminOne = new Admin(110, "", true);
// let userTwo = new User(101, "Hassan", 6000);
// let userThree = new User(102, "", 7000);

// console.log(adminOne.i);
// console.log(adminOne.u);
// console.log(adminOne.p);
// console.log(adminOne.writeMsg());

// console.log(userOne.count);
// userOne.updateName("Marwa");
// console.log(User.count);

// console.log(User.sayHello());
// //////////////////////////////////////////////////////////
// console.log("*".repeat(20));

// class User1 {
//   #e;
//   constructor(id, username, esalary) {
//     this.i = id;
//     this.u = username;
//     this.#e = esalary;
//   }
//   getSalary() {
//     return parseInt(this.#e) * 2;
//   }
// }
// let userOne1 = new User1(100, "Marwa", "5000 gneh");
// console.log(userOne1.i);
// console.log(userOne1.u);
// console.log(userOne1.getSalary() * 0.3);

// class Admin1 extends User1 {
//   constructor(id, username, esalary, email) {
//     super(id, username, esalary);
//     this.m = email;
//   }
// }
// let AdminOne1 = new Admin1(100, "Marwa", "5000 gneh", "marwa@gmial.com");
// console.log(AdminOne1.getSalary() * 0.3);

// console.log(User1.prototype);
// User1.prototype.sayWelcome = function () {
//   return `welcome ${this.u}`;
// };
// console.log(userOne1.sayWelcome());
// // Object.prototype.love = "MEME";
// // console.log(User1.love);

// String.prototype.addDotBeforeAndAfter = function (val) {
//   return `.${this}.`;
// };
// let mystring = "Marwa";
// console.log(mystring.addDotBeforeAndAfter());

//////////////////////////////////////////////////////////////////////////
console.log("*".repeat(20));
//////////////////////////////////////////////////////////////////////////
class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }
  run() {
    return `Car is running now`;
  }
  stop() {
    return `Car is stopped`;
  }
}
let carOne = new Car("MG", 2022, 420000);
let carTwo = new Car("Auto", 2021, 450000);
let carThree = new Car("Mrc", 2020, 500000);

console.log(`Car One Name Is ${carOne.n} And Model Is ${carOne.m} And Price Is ${carOne.p}`);
console.log(carOne.run());
//////////////////////////////////////////////////////////////////////////
console.log("*".repeat(20));
//////////////////////////////////////////////////////////////////////////

class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}

class Tablet extends Phone {
  constructor(name, serial, price, size) {
    super(name, serial, price);
    this.s = size || "known";
  }
  fullDetails() {
    return `${this.name} Serial is ${this.serial} price is ${this.price} Size Is ${this.s}`;
  }
}

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown

//////////////////////////////////////////////////////////////////////////
console.log("*".repeat(20));
//////////////////////////////////////////////////////////////////////////
// Edit The Class
class User2 {
  #c;
  constructor(username, card) {
    this.u = username;
    this.#c = card;
  }
  get cardNum(){
    return this.#c.toString().match(/\d{4}/ig).join("-")
  }
  showData() {
    return `Hello ${this.u} Your Credit Card Number Is ${this.cardNum}`;
  }
}
// = /\d{4}\-\d{4}-\d{4}\d{4}/ig
// Do Not Edit Anything Below

let userOne2 = new User2("Osama", "1234-5678-1234-5678");
let userTwo2 = new User2("Ahmed", "1234567812345678");
let userThree2 = new User2("Ghareeb", 1234567812345678);

console.log(userOne2.showData());
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo2.showData());
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree2.showData());
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne2.c); // Prevent Accessing To Card Property Here
// Undefined
//////////////////////////////////////////////////////////////////////////
console.log("*".repeat(20));
//////////////////////////////////////////////////////////////////////////
// Write Your Code Here
String.prototype.addLove = function (str){
  return `I Love ${this} Web School`
}
// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School
//////////////////////////////////////////////////////////////////////////
console.log("*".repeat(20));
//////////////////////////////////////////////////////////////////////////
const myObj22 = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

Object.defineProperties(myObj22, { 
  score:{
  writable: false,
  value : 1000,
},
id :{
    enumerable : false
  }
})
delete myObj22.country
myObj22.score = 500;

for (let prop in myObj22) {
  console.log(`${prop} => ${myObj22[prop]}`);
}
console.log(myObj22);

// Needed Output

// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}
