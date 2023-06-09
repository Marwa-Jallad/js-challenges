let dateNow = new Date();
console.log(dateNow)
console.log(Date.now())
let second = Date.now() / 1000 
console.log(`second is ${second}`)
let birthday = new Date("Oct 25, 82")
console.log (birthday)
let dateDiff = dateNow - birthday;
console.log(dateDiff)
///////////////////////////////////////////////////
console.log("#".repeat(40))
//////////////////////////////////////////////////
let dateOne = new Date();
let birthDate = new Date("Jan 16 1989");
let myBirthday= dateOne - birthDate;
let sec = myBirthday / 1000;
let min = sec / 60;
let hours = min/60;
let days = hours/24;
let mon = days/30;
let years = mon/12;
console.log(dateOne)
console.log(birthDate)
console.log(myBirthday);
console.log(sec ,"Seconds");
console.log(min,"Minutes");
console.log(hours ,"Hours");
console.log(days, "Days");
console.log(mon ,"Monthes")
console.log(years,"years")
///////////////////////////////////////////////////
console.log("#".repeat(40))
//////////////////////////////////////////////////
let oldDate = new Date()
oldDate.setTime(0);
oldDate.setFullYear(1980)
oldDate.setTime(1000)
oldDate.setHours(0)
console.log(oldDate);
///////////////////////////////////////////////////
console.log("#".repeat(40))
//////////////////////////////////////////////////
let monthes = ["Jan" , "Feb" , "March" , "April" , "May" , "June" , "July", "Augest" , "september","October" , "November" , "December"]
let myDate = new Date()
myDate.setDate(0);
console.log(myDate);
console.log(`Previous Month is ${monthes[myDate.getMonth()]} and last day Is ${myDate.getDate()}`)
///////////////////////////////////////////////////
console.log("#".repeat(40))
//////////////////////////////////////////////////
let dateOfbirth = new Date ("Jan 16 1989");
let dateOfbirth1 = new Date ("89 ,01 ,16");
let dateOfbirth2 = new Date ("1989-01-16T06:10:00Z");
console.log(dateOfbirth);
console.log(dateOfbirth1);
console.log(dateOfbirth2);
///////////////////////////////////////////////////
console.log("#".repeat(40))
///////////////////////////////////////////////////
let t0 = performance.now()
for ( i = 0 ; i<=9; i++){
    console.log(i)
}
let t1 = performance.now()
console.log(parseInt((t1-t0)/1000));
///////////////////////////////////////////////////
console.log("#".repeat(40))
///////////////////////////////////////////////////
function* gen(){
    let index = 14;
    let num = 140;
    let sum = index + num
    while(true){
        yield sum;
        sum += num += 200 ; 
    }
}
let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}
///////////////////////////////////////////////////
console.log("#".repeat(40))
///////////////////////////////////////////////////
function* genNumbers() {
    yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
    yield* ["A", "B", "B", "B", "C", "D"];
}

function* genAll() { 
    yield* genNumbers();
    yield* genLetters();
}
let generator1 = genAll();

  console.log(generator1.next()); // {value: 1, done: false}
  console.log(generator1.next()); // {value: 2, done: false}
  console.log(generator1.next()); // {value: 3, done: false}
  console.log(generator1.next()); // {value: 4, done: false}
  console.log(generator1.next()); // {value: 5, done: false}
  console.log(generator1.next()); // {value: "A", done: false}
  console.log(generator1.next()); // {value: "B", done: false}
  console.log(generator1.next()); // {value: "C", done: false}
  console.log(generator1.next()); // {value: "D", done: false}
///////////////////////////////////////////////////
console.log("#".repeat(40))
//////////////////////////////////////////////////
import calc from "./modOne"
import * as modOne from "./modTwo.js" 
console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree));