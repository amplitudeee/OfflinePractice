// Problem 1
const multiply = (a,b) => a * b

console.log(multiply(10,12));

// Problem 2
const square = num => num * num

console.log(square(10));

// Problem 3
const createUser = (username, age) => ({username, age});

console.log(createUser('Alice', 25));

// Problem 4
const prices = [10, 20, 30, 40];

const taxedPrice = prices.map(price => price * 1.1)

console.log(taxedPrice)

// Problem 5
const numbers = [5, 12, 8, 130, 44, 3];

const filtered = numbers.filter(number => number > 10)

console.log(filtered)

// Problem 5.1
const names = ['alice', 'bob']
const capitalNames = names.map(name => name.toUpperCase())

console.log(capitalNames)

// Problem 6

const checkAge = age => age > 17 ? 'Access Granted' : 'Access Denied';

console.log(checkAge(20))
