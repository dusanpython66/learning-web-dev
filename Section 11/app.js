let age = 32;
let userName = "Dušan";
let hobbies = ["Sports", "Cooking", "Reading"];
let job = {
  title: "Developer",
  place: "New York",
  salary: 50000,
};

let adultYears;

function calculateAdultYears() {
    adultYears = age - 18
}

calculateAdultYears()
alert(adultYears);

job.salary = 10000;
alert(job.salary);
