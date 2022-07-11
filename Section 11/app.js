let age = 32;
let userName = "Dušan";
let hobbies = ["Sports", "Cooking", "Reading"];
let job = {
  title: "Developer",
  place: "New York",
  salary: 50000,
};

let adultYears;

function calculateAdultYears(userAge = 18) {
  return userAge - 18;
}

adultYears = calculateAdultYears(age);
/* alert(adultYears); */
console.log(adultYears);

console.log(calculateAdultYears());

/* job.salary = 10000;
alert(job.salary); */

let person = {
  name: "Max", // Property
  greet() {
    // Method
    console.log("Hello!");
  },
};

person.greet();
