// 1. Using a for...in loop
// 2. Object.keys method
// 3. Object.values method
// 4. Object.entries method

// 1. for...in Loop
const user = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  age: 25,
  dob: '08/02/1989',
  active: true
};

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}


// 2. Object.keys()
const courses = {
  java: 10,
  javascript: 55,
  nodejs: 5,
  php: 15
};

const keys = Object.keys(courses);
// console.log(keys); // [ 'java', 'javascript', 'nodejs', 'php' ]

keys.forEach((key) => {
  console.log(`${key}: ${courses[key]}`);
});


// 3. Object.values method
const animals = {
  tiger: 1,
  cat: 2,
  monkey: 3,
  elephant: 4
};

// iterate over object values
Object.values(animals).forEach(val => console.log(val));

// 1, 2, 3, 4


// 4. Object.entries method
const newAnimals = {
  tiger: 1,
  cat: 2,
  monkey: 3,
  elephant: 4
};

const entries = Object.entries(newAnimals);
console.log(entries);

// [ [ 'tiger', 1 ],
//   [ 'cat', 2 ],
//   [ 'monkey', 3 ],
//   [ 'elephant', 4 ] ]

// // `for...of` loop
for (const [key, value] of Object.entries(animals)) {
  console.log(`${key}: ${value}`);
}

// // `forEach()` method
Object.entries(animals).forEach(([key, value]) => {
  console.log(`${key}: ${value}`)
});