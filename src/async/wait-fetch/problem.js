/**
 * Implement wait(delayMs), which returns a promise that
 * resolves after delayMs milliseconds have passed
 */

function wait(delayMs) {}

wait(2000).then(() => console.log("2s have passed"));

/**
 * Implement fetch(url), which returns a promise that resolves
 * when an HTTP request to url is complete
 */

function fetch(url) {}

fetch("https://jsonplaceholder.typicode.com/todos/1").then((json) =>
  console.log(json)
);
