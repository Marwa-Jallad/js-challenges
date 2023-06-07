let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

let [a, b, c] = myFriends;
// let {
//   title: t1,
//   age: a1,
//   available: c1,
//   skills: [h1, cs],
// } = a;
// let {
//   title: t2,
//   age: a2,
//   available: c2,
//   skills: [p, d],
// } = b;
// let {
//   title: t3,
//   age: a3,
//   available: c3,
//   skills: [ph, l],
// } = c;

// if (chosen === 1) {
//   console.log(t1);
//   console.log(a1);
//   console.log(c1 ? "Available" : "Not available ");
//   console.log(cs);
// }
// if (chosen === 2) {
//   console.log(t2);
//   console.log(a2);
//   console.log(c2 ? "Available" : "Not available ");
//   console.log(d);
// }

// if (chosen === 3) {
//   console.log(t3);
//   console.log(a3);
//   console.log(c3 ? "Available" : "Not available ");
//   console.log(l);
// }
function friendsDetail(obj) {
  const {
    title: t,
    age: a,
    available: av,
    skills: [, s],
  } = obj;
  console.log(t);
  console.log(a);
  console.log(av ? "Available" : "Not available ");
  console.log(s);
}
if (chosen === 1) friendsDetail(a);
if (chosen === 2) friendsDetail(b);
if (chosen === 3) friendsDetail(c);
