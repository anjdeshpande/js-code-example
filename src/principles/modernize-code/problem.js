/**
 * You've been tasked with modernizing the legacy code below that was
 * written prior to ES2015.
 */

function logUser(user) {
  var firstName = user.firstName;
  var lastName = user.lastName || "";
  var age = user.age;

  var formattedUser =
    "First Name: " +
    firstName +
    "\n" +
    "Last Name: " +
    lastName +
    "\n" +
    "Age: " +
    age;

  console.log(formattedUser);
}

/**
 * Example inputs
 */

logUser({ firstName: "Matt", lastName: "Smith", age: 52 });

logUser({ firstName: "Alice", lastName: "Weiss", age: 45 });

/**
 * Write your solution below
 */
