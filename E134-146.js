let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let RegExp1 = /(\d+|\D+)+/gi;
console.log(ip.match(RegExp1));
console.log(RegExp1.test(ip));

//////////////////////////////////////////////////////
console.log("*".repeat(40));
//////////////////////////////////////////////////////
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let RegExp2 = /os\d*o/gi;
console.log(specialNames.match(RegExp2));
// Output
// ['Os10O', 'OsO', 'Os100O']
//////////////////////////////////////////////////////
console.log("*".repeat(40));
//////////////////////////////////////////////////////
let phone = "+(995)-123 (4567)";
let RegExp3 = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/gi;
console.log(phone.match(RegExp3));
//////////////////////////////////////////////////////
console.log("*".repeat(40));
//////////////////////////////////////////////////////
let RegExp4 = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
//http --> must be used letters and (s) can be exist or not
// (:) --> character
//(//) --> character with the escape \ sign
// (? --> whith or wthout (
// (:) --> character
//[-\w]--> dash then world character between brackets [a-z,A-Z,0-9 & _]
//(.) --> character
// )? --> whith or wthout )
//////////////////////////////////////////////////////
console.log("*".repeat(40));
//////////////////////////////////////////////////////
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";
let RegExp5 = /\d{2}\s?-?\s?\/?\d{2}\s?-?\s?\/?\d{0,}/; // Write Pattern Here
console.log(date1.match(RegExp5)); // "25/10/1982"
console.log(date2.match(RegExp5)); // "25 - 10 - 1982"
console.log(date3.match(RegExp5)); // "25 10 1982"
console.log(date4.match(RegExp5)); // "25 10 82"
//////////////////////////////////////////////////////
console.log("*".repeat(40));
//////////////////////////////////////////////////////
let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

let RegExp6 = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i; // Write Your Pattern Here
console.log(url1.match(RegExp6));
console.log(url2.match(RegExp6));
console.log(url3.match(RegExp6));
console.log(url4.match(RegExp6));
console.log(url5.match(RegExp6));
