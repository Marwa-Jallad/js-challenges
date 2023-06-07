let a = "Elzero Web School";
console.log(a.charAt(2).toUpperCase()+a.slice(3,6));

console.log(a.charAt(13).toUpperCase().repeat(8));

console.log(a.split(" ",1));

console.log(a.substr(0,7)+(a.substr(-6)));

console.log(a.charAt(0).toLowerCase()+a.slice(1,16)+a.charAt(16).toLowerCase());


let userName = "Elzero";
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName[0].toLowerCase()); // e
console.log(userName.slice(0,1).toLowerCase()); // e
console.log(userName.substr(0,1).toLowerCase()); // e
console.log(userName.substring(0,1).toLowerCase()); // e
console.log(userName.slice(-6,-5).toLowerCase().repeat(3)); // eee


let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True

console.log(10<"5");
console.log(10<="5");
console.log(typeof "marwa"===typeof"hassan");