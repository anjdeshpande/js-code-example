/**
 * Implement reduce(arr, fn, init), which matches the behavior
 * of Array.prototype.reduce() given an initial value
 */

function reduce(arr, fn, init) {
  let acc = init;

  for (const element of arr) {
    acc = fn(acc, element);
  }

  return acc;
}

const val = reduce([1, 2, 3], (sum, num) => sum + num, 0);

console.log(val); // 6

/**
 * Follow-up 1: implement Array.prototype.map() using reduce()
 */

function map(arr, fn) {
  return reduce(
    arr,
    (newArr, curr) => {
      return newArr.push(fn(curr));
    },
    []
  );
}

console.log(map([1, 2, 3], (num) => num * 2));
/**
 * Follow-up 2: implement Array.prototype.filter() using reduce()
 */

function filter(arr, fn) {
  return reduce(
    arr,
    (newArr, curr) => {
      if (fn(curr)) {
        newArr.push(curr);
      }
      return newArr;
    },
    []
  );
}

console.log(filter([1, 2, 3, 4], (num) => num % 2 === 0));
