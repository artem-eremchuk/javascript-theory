const _ = require('lodash');

// ----- SHALLOW COPY OBJECTS -----

// 1. Using Spread
const spread = {
  firstName: 'Artem',
  lastName: 'Eremchuk'
}

const spread_clone = {...spread};

// console.log(spread_clone);
// console.log(spread === spread_clone); // false

// 2. Using Object.assign
const object_assing = {
  firstName: 'Artem',
  lastName: 'Eremchuk'
}

const object_assing_clone = Object.assign({}, object_assing);

// console.log(object_assing_clone);
// console.log(object_assing == object_assing_clone); // false

// 3. Using Object.assign
/* 
  The _.clone() method is used to create a shallow copy of the value. This method supports cloning arrays, array buffers, booleans, date objects, maps, numbers, Object objects, regexes, sets, strings, symbols, and typed arrays. It is loosely based on the structured clone algorithm.
*/


  
const lodash_obj = {
  firstName: 'Artem',
  lastName: 'Eremchuk'
};
  
// Shallow copy
const shallow_copy_lodash_obj = _.clone(lodash_obj);
// console.log(shallow_copy_lodash_obj);

// 4. for ... in 
const for_in_method= {
  firstName: 'Artem',
  lastName: 'Eremchuk'
};

const for_in_clone = {};

for (let key in for_in_method) {
  if (for_in_method.hasOwnProperty(key)) {
    for_in_clone[key] = for_in_method[key];
 }
}

// for_in_clone.firstName = 'Ivan';
// console.log(for_in_method);


// ----- DEPP CORY OBJECTS -----

// 1. JSON.parse(JSON.stringify(myObj)
// JSON.parse(JSON.stringify()) is a bad practice to clone an object in JavaScript

const person = {
  firstName: 'Artem',
  lastName: 'Eremchuk',
  address: {
    city: 'Kazan',
    country: 'Russia'
  }
}


const personDeepCopy = JSON.parse(JSON.stringify(person));
personDeepCopy.address.city = 'Moscow';

// console.log(person);

// 2. _.cloneDeep lodash 
const my_person = {
  firstName: 'Artem',
  lastName: 'Eremchuk',
  address: {
    city: 'Kazan',
    country: 'Russia'
  }
}

const deepCopy_person = _.cloneDeep(my_person)
deepCopy_person.address.city = 'Moscow';

console.log(my_person);
console.log(deepCopy_person);


// 3. Native deep cloning
// const v8 = require('v8');

// const structuredClone = obj => {
//   return v8.deserialize(v8.serialize(obj));
// };

// ??? ->>> const myDeepCopy = structuredClone(myOriginal);
