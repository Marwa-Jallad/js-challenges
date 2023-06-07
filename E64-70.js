function getDetails(zName, zAge, zCountry) {
  function namePattern() {
    return `${zName.slice(0, zName.indexOf(" "))}${zName
      .substr(zName.indexOf(" "), 2)
      .toUpperCase()}.`;
  }
  namePattern();
  function ageWithMessage() {
    return `your Age Is ${parseInt(zAge)}`;
  }
  ageWithMessage();
  function countryTwoLetters() {
    return `You Live In ${zCountry.slice(0, 2).toUpperCase()} `;
  }
  countryTwoLetters();
  function fullDetails() {
    return `Hello ${namePattern()}, ${ageWithMessage()}, ${countryTwoLetters()}`;
  }
  return fullDetails();
}
console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));

console.log("*".repeat(45));

itsMe = () => `Iam A Normal Function`;

console.log(itsMe()); // Iam A Normal Function

console.log("*".repeat(45));

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

console.log("*".repeat(45));

let checker = (zName) => (status) => (salary) =>
  status === "Available"
    ? `${zName}, My Salary Is ${salary}`
    : `Iam Not Avaialble`;
console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

console.log("*".repeat(45));

function specialMix(...data) {
  let result = 0;
  for (i = 0; i < data.length; i++) {
    if (isNaN(parseInt(data[i])) === false) {
      result += parseInt(data[i]);
    }
  }
  if (result === 0) {
    return `All Is Strings`;
  }
  return result;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
