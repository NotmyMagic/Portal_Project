// Get the current date
let currentDate = new Date().toLocaleDateString();
let date = document.querySelector("#date");

date.textContent = currentDate;

// Get the current year
let currentYear = new Date().getFullYear();
let year = document.querySelector("#year");

year.textContent = currentYear;
