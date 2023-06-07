let theName = "Marwa";
let theGender = "Female";
let theAge = 30;

// way no.1 (if condetion long version)
if (theGender === "male") {
console.log("Mr");
} else {
console.log("Mrs"); 
}

// way no.2 (if condetion short version)
// condetion ? if True : if False 

theGender === "male" ? console.log("Mr") : console.log("Mrs");

let result = theGender === "male" ? "Mr" : "Mrs";
// document.write(result);

console.log(theGender === "male" ? "Mr" : "Mrs");

console.log(`Hello ${theGender === "male" ? "Mr" : "Mrs"} ${theName}`);


theAge < 20 ? console.log ("the age under 20 =" + theAge) : theAge > 20 && theAge < 60 ? console.log ("the age =" + theAge) : theAge > 60 ? console.log ("the age larger than 60 =" + theAge) : console.log ("unknown");
