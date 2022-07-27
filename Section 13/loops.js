for (let i = 5; i < 10; i++) {
  console.log(i);
}

const users = ["Max", "Dušan", "Jana"];

for (const user of users) {
  console.log(user);
}

const loggedInUser = {
  name: "Max",
  age: 32,
  isAdmin: true,
};

for (const key in loggedInUser) {
  console.log(loggedInUser[key]);
}

let isFinished = false;

while (!isFinished) {
    isFinished = confirm("Chcete skončit?");
}

console.log("Hotovo!")