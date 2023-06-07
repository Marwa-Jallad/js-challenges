let myString = "1,2,3,EE,l,z,e,r,o,_,w,e,b,_,s,c,h,o,o,l,2,0,z";
let solution = myString
  .split("")
  .filter(function (str) {
    return isNaN(str) && str !== ","; //[E,E,l,z,e,r,o,_,w,e,b,_,s,c,h,o,o,l,z];
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  })
  .slice(true, -isNaN(myString))
  .replaceAll("_", " ");

console.log(solution);
