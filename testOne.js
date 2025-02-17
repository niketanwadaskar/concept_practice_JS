// Creating a function using the Function constructor
const greet = new Function('name', 'return "Hello, " + name;');

console.log(greet("Bob")); // Output: Hello, Bob

const sum = new Function('a', 'b', 'return a + b;');

console.log(sum(1, 2)); // Output: 3
// this is a way to create a function, but it's not recommended, as it's not a standard way to create a function , and it's not a standard way to create a function
// thr main difference between the above and the below is that the above is a function constructor, and the below is a function object
// function cunstructor is used to create a function
function greet(name) {
    return "Hello, " + name;
}
