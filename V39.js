// let job = "Designer";
// let salary = 0;

// if (job === "Manger") {
//   salary = 8000;
//   console.log(salary);
// } else if (job === "It" || job === "Support") {
//   salary = 6000;
//   console.log(salary);
// } else if (job === "Developer" || job === "Designer") {
//   salary = 7000;
//   console.log(salary);
// } else {
//   salary = 4000;
//   console.log(salary);
// }

let job = "Support";
let salary = 0;
switch (job) {
  case "Manger":
    salary = 8000;
    console.log(salary);
    break;
  case "It":
  case "Support":
    salary = 6000;
    console.log(salary);
    break;
  case "Developer":
  case "Designer":
    salary = 7000;
    console.log(salary);
    break;
  default:
    salary = 4000;
    console.log(salary);
}

let holidays = 0;
let money = 0;
if (holidays == 0) {
  money = 5000;
  console.log(`my money is ${money}`);
} else if (holidays == 1 || holidays == 2) {
  money = 3000;
  console.log(`my money is ${money}`);
} else if (holidays == 3) {
  money = 2000;
  console.log(`my money is ${money}`);
} else if (holidays == 4) {
  money = 1000;
  console.log(`my money is ${money}`);
} else if (holidays == 5) {
  money = 0;
  console.log(`my money is ${money}`);
} else {
  money = 0;
  console.log(`my money is ${money}`);
}

let day = "   friday  ";
day = day.trim();
day = day.charAt(0).toUpperCase() + day.slice(1);
switch (day) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available");
    break;
  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM");
    break;
  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;
  default:
    console.log("Its Not A Valid Day");
    break;
}
