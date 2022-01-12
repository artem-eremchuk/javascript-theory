// Shallow Copy Objects

// 1. Using Spread
const spread = {
  firstName: 'Artem',
  lastName: 'Eremchuk'
}

const spread_clone = {...spread};

// console.log(spread_clone);
// console.log(spread === spread_clone); // false

// Using Object.assign
const object_assing = {
  firstName: 'Artem',
  lastName: 'Eremchuk'
}

const object_assing_clone = Object.assign({}, object_assing);

// console.log(object_assing_clone);
// console.log(object_assing == object_assing_clone); // false