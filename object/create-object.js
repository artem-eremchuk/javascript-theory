// 1. Creating objects using object literal syntax
const person = {
  firstName: 'Artem',
  lastName: 'Eremchuk'
}

// console.log(person);

// 2. Creating objects using the ‘new’ keyword
const new_person = new Object();

new_person.firstName = 'Artem';
new_person.lastName = 'Eremchuk';

// console.log(new_person);

// b) Using ‘new’ with user defined constructor function
function Person(fname, lname) {
  this.firstName = fname;
  this.lastName = lname;
}

const artem_eremchuk = new Person('Artem', 'Eremhcuk');

// console.log(artem_eremchuk);

// 3. Using Object.create() to create new objects
const full_name = {
  firstName: 'Artem',
  lastName: 'Eremchuk'
}

const full_data = Object.create(full_name, {age: {value: 35}});

// console.log(full_data); // {}
// console.log(full_data.firstName);
// console.log(full_data.lastName);
// console.log(full_data.age);


// 4. Using Object.assign() to create new objects
const fName = {firstName: 'Artem'};
const lName = {lastName: 'Eremchuk'};

const full = Object.assign({}, fName, lName);

// console.log(full);

// 5. Using ES6 classes to create objects
class MyPerson {
  constructor(fName, lName){
    this.firstName = fName;
    this.lastName = lName;
  }
}

const my_person = new MyPerson('Artem', 'Eremchuk');

// console.log(my_person);