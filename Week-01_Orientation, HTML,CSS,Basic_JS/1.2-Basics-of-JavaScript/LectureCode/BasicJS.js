let firstName = "Muskan";
console.log(firstName);

const age = 21;
console.log(age);

var isStudent = true;
console.log(isStudent);

console.log("firstName");
console.log("Muskan");

const user = {
  name: "Muskan",
  age: 21,
  address: {
    city: "Samastipur",
    country: "India",
    address: "xyz abc",
  },
};

console.log(user.name);
console.log(user.age);
console.log(user.address);
console.log(user.address.city);
console.log(user.address.country);
console.log(user.address.address);

// Create a function that takes an array of objects as input, and returns the users whose age > 18 and are male
let users = [
  {
    name: "Muskan",
    age: 21,
    gender: "Female",
  },
  {
    name: "Priya",
    age: 22,
    gender: "female",
  },
  {
    name: "Rani",
    age: 15,
    gender: "female",
  },
  {
    name: "Deepak",
    age: 24,
    gender: "male",
  },
  {
    name: "Rahul",
    age: 17,
    gender: "male",
  },
];

function getUsers(users) {
  let ans = [];

  for (let i = 0; i < users.length; i++) {
    if (users[i].age > 18 && users[i].gender === "male") {
      ans.push(users[i]);
    }
  }

  return ans;
}

let allUsers = getUsers(users);
console.log(allUsers);

isStudent = "Deepak";
console.log(isStudent);

isStudent = 10;
console.log(isStudent);
