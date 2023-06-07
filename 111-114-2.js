let userName = document.querySelector("[name='userName']");
let age = document.querySelector("[name='userAge']");
let email = document.querySelector("[name='userEmail']");
let country = document.querySelector(".countryName");

userName.onblur = () =>
  window.sessionStorage.setItem("user name", userName.value);
age.onblur = () => window.sessionStorage.setItem("age", age.value);
email.onblur = () => window.sessionStorage.setItem("email", email.value);
country.onchange = () =>
  window.sessionStorage.setItem("country", country.value);

userName.value = window.sessionStorage.getItem("user name", userName.value);
age.value = window.sessionStorage.getItem("age", age.value);
email.value = window.sessionStorage.getItem("email", email.value);
country.value = window.sessionStorage.getItem("country", country.value);
