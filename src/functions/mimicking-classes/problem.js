/**
 * Without using ES6 classes, create a user() function
 * that returns a 'user' object that has the following
 * properties and methods:
 *
 * user.name (string)
 * user.setName(name) - function that can update name
 * user.printName() - function that prints name
 */

function user() {}

const newUser = user();

newUser.printName(); // logs 'Not Set'

newUser.setName("Will Smith");

newUser.printName(); // logs 'Will Smith'

console.log(newUser.name); // logs 'Will Smith'
