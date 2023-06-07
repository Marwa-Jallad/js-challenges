// function name(...Names) {
//   return `String [${Names.join("],[")}]=> Done !`;
// }
// console.log(name("osama", "Mohammad", "Ali"));

let name = (...Names) => `String [${Names.join("],[")}]=> Done !`;

console.log(name("osama", "Mohammad", "Ali"));

let myNumbers = [20, 50, 10, 60];
let calc = (one, two, ...nums) => one + two + nums[0];

console.log(calc(10, 50, 20, 60));

// function calc(one, two, ...nums) {
//   return one + two + Number(nums.slice(0, 1));
// }
// console.log(calc(10, 50, 20, 60));

console.log(typeof null);

console.log("marwa" + "jallad");
console.log(Math.trunc("100.56"));

let a = 10;
let b = 20;
let c = "40";
let d = true;

console.log(c + a + d);
console.log(Number.isInteger(d));
const array = ["hassan", "marwa", "baba", "mama"];

console.log(
  array.map((a) => {
    return a;
  })
);
document.write(
  `<ul>
    ${array.map((a) => `<li>${a}</li>`)}
  </ul>`
);
