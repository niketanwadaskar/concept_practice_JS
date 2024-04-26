// // Primitive data types
// let name = "John"; // String
// let age = 30; // Number
// let isStudent = true; // Boolean
// let city; // Undefined
// let noValue = null; // Null
// let bigNumber = 123456789012345678901234567890n; // BigInt
// let uniqueSymbol = Symbol("mySymbol"); // Symbol
// let notANumber = NaN; // NaN

// const { resolve } = require("path");

// // Non-primitive data type (object)
// const person = {
//   firstName: "John",
//   lastName: "Doe"
// };

// // Array (also an object)
// const cars = ["Saab", "Volvo", "BMW"];

// // Date object
// const date = new Date("2022-03-25");

// console.log("name =", typeof (name), "date=", typeof (date), "age=", typeof (age), "isStudent=", typeof (isStudent), "city=", typeof (city), "noValue=", typeof (noValue), "bigNumber=", typeof (bigNumber), "uniqueSymbol=", typeof (uniqueSymbol), "notANumber=", typeof (notANumber), "personObject=", typeof (person), "carsArray=", typeof (cars));

// let x; // undefined
// // const y; // error
// const y = null; // null

// let a = {
//   name: "John",
//   age: 30
// };
// let b = a;
// b.age = 31;
// // console.log(a, b)

// (function () {
//   console.log("i am IIFE",this)
// }())

//? CALL APPLY BIND
// const ownerObject = {
//   name: "niketan"
// }
// function print(surname, age) {
//   console.log(this.name, surname, age)
// }

//? Prototype for bind

// Function.prototype.myBind =  function (ctx){
//     let fn = this;
//     return function (){
//         fn.apply(ctx,arguments)
//     }
// }

// print.call(ownerObject, "Wadaskar", "25")
// print.apply(ownerObject, ["Wadaskar", "25"])
// const boundFunction = print.bind(ownerObject)
// boundFunction("Wadaskar", "25")

//? Currying Function
/*
@Using closure
*/

// function multiply(a) {
//   return function (b) {
//     if (b) return multiply(b * a)
//     return a
//   }
// }

/*
@Using bind method 
*/
// function multiply_using_bind(a) {
//   return function (b) {
//     if (b) return multiply_using_bind.bind(null)(b * a)
//     return a
//   }
// }

// console.log(multiply_using_bind(1)(2)(3)(4)(5)(6)())

// ? Closures

// function closureFunction (){
//   let a = 10
//   return function (){
//     console.log(a)
//   }
// }

// const closure = closureFunction()
// closure()

//? Phototype
// function Person(name, age) {
//   this.name = name,
//     this.age = age
// }

// Person.prototype.getDetails = function () {
//   console.log(this.name, this.age)
// }
// let person = new Person("Niketan", 25);
// person.getDetails()

// const personPrototype = {
//   getDetails: function () {
//     console.log(this.name, this.age);
//   }
// }

// const person1 = Object.create(personPrototype, {
//   name: { value: "Niketan" },
//   age: { value: 25 }
// })

// person1.getDetails()

//? Memoization polyfill

// function heavyOperation(a) {
//   for (let i = 0; i < 100000; i++) {
//     a + a;
//   }
//   return a
// }

// function memoize(fn) {
//   const cache = {};
//   return function (...args) {
//     if (cache[args]) {
//       return cache[args]
//     } else {
//       const result = fn(args);
//       cache[args] = result;
//       return result;
//     }
//   }
// }

// const memoFun = memoize(heavyOperation);
// console.time()
// console.log(memoFun(10))
// console.timeEnd()
// console.time()
// console.log(memoFun(11))
// console.timeEnd()
// console.time()
// console.log(memoFun(10))
// console.timeEnd()

// ? Flat array

// let arr = [1, [2, [3], [4], 5]];

// function coupletFlat(arr) {
//   return arr.reduce((acc, val) => {
//     return acc.concat(Array.isArray(val) ? coupletFlat(val) : val);
//   }, [])
// }
// console.log(coupletFlat(arr))

// (function () {
//   const data = fetch("http://localhost:5000").then((e) => console.log(e))
// }())

// ? Remove Duplicate

// let say = [2, 4, 7, 1, 4, 6, 8, 1, 4, 9, 2, 5, 5, 8, 1, 2, 3, 4, 4, 5, 6, 6, 7, 7, 8, 8, 9]

// // this is long way and complexity is also high O(n^2)
// var output =say.filter((val,index)=>{
//   return say.indexOf(val)===index;
// })

// // this is short cut and complexity is O(n)
// var output = new Set(say)
// console.log(output)

//?  Binary Search
//? basic search
// let arr = [1,2,3,4,5,6,7,8];

// function binarySearch(arr, s, e, val) {
//   const check = Math.floor((s + e) / 2)
//   console.log(check)
//   if (arr[check] == val) {
//   console.log("aayen")
//     return check;
//   } else if (check != 0 && arr[check] > val) {
//     return binarySearch(arr, s, check, val)
//   } else if (check != arr.length-1 && arr[check] < val) {
//     return binarySearch(arr, check, e, val)
//   } else {
//     return -1
//   }
// }

// let val  = binarySearch(arr,0,arr.length,7)
// console.log(val,"val")

//?  Binary Search  (find left most corner occurrence and right most corner occurrence)
// let arr = [1, 2, 3, 4, 4, 4, 5, 6, 7, 8, 9];

// function findOccurrences(arr, target, start, end, isFirst) {
//   if (start > end) {
//     return -1;
//   }

//   let mid = Math.floor((start + end) / 2);

//   if (arr[mid] === target) {
//     if (isFirst) {
//       let leftIndex = findOccurrences(arr, target, start, mid - 1, isFirst);
//       return leftIndex !== -1 ? leftIndex : mid;
//     } else {
//       let rightIndex = findOccurrences(arr, target, mid + 1, end, isFirst);
//       return rightIndex !== -1 ? rightIndex : mid;
//     }
//   } else if (arr[mid] < target) {
//     return findOccurrences(arr, target, mid + 1, end, isFirst);
//   } else {
//     return findOccurrences(arr, target, start, mid - 1, isFirst);
//   }
// }

// function findFirstAndLastOccurrences(arr, target) {
//   let first = findOccurrences(arr, target, 0, arr.length - 1, true);
//   let last = findOccurrences(arr, target, 0, arr.length - 1, false);

//   return [first, last];
// }

// let target = 4;
// let occurrences = findFirstAndLastOccurrences(arr, target);

// console.log("First Occurrence:", occurrences);

// let sortedArray = removeDuplicate.sort().reverse()
// console.log(sortedArray)

// // Create a custom event
// let customEvent = new CustomEvent('myCustomEvent', { detail: { message: 'Hello from custom event!' } });

// // Add an event listener for the custom event
// document.addEventListener('myCustomEvent', function(event) {
//   console.log('Custom event triggered:', event.detail.message);
// });

// // Invoke the custom event
// document.dispatchEvent(customEvent);

// function flattenArray(arr) {
//   return arr.reduce((flat, item) => {
//     return flat.concat(Array.isArray(item) ? flattenArray(item) : item);
//   }, []);
// }

// const nestedArray = [1, [2, [3], [4], 5]];
// const flattenedArray = flattenArray(nestedArray);
// console.log(flattenedArray);

// for (var i = 1; i <= 5; i++) {
//   (function(index) {
//     setTimeout(function() {
//       console.log(index);
//     }, index * 1000);
//   })(i);
// }

// ? Promises  (race and all)
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('Promise 1 resolved'), 1000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('Promise 2 resolved'), 500);
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => reject(new Error('Promise 3 rejected')), 1500);
// });

// Promise.race([promise1, promise2, promise3])
//   .then(result => console.log(result))
//   .catch(error => console.error(error.message));

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('Promise 1 resolved'), 1000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('Promise 2 resolved'), 500);
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => reject(new Error('Promise 3 rejected')), 1500);
//// setTimeout(() => resolve('Promise 3 resolved'), 1500);
// });

// Promise.all([promise1, promise2, promise3])
//   .then(results => console.log(results))
//   .catch(error => console.error(error.message));

// const arr = ["eat", "tea", "tan", "ate", "nat", "bat"];

// function groupAnagrams(strs) {
//   const map = new Map();

//   for (const str of strs) {
//     const sortedStr = str.split("").sort().join("");
//     if (!map.has(sortedStr)) {
//       map.set(sortedStr, []);
//     }
//     map.get(sortedStr).push(str);
//   }
//   console.log(map)
//   return Array.from(map.values());
// }

// console.log(groupAnagrams(arr))

// const str = "The quick brown fox jumps over the lazy dog. The dog barks at the fox, but the fox keeps running."
// const map = new Map()

// str.split(" ").map((val) => {
//   if (map.has(val)) {
//     map.set(val, map.get(val) + 1)
//   } else {
//     map.set(val, 1)
//   }
// })
// // console.log(map)

// const arr = str.split(" ");
// let result = []
// for (let index = arr.length-1; index >=0; index--) {
//   result.push(arr[index])
// }

// console.log(result.join(" "),arr)

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Array.prototype.myMap = function (fun) {
//   const myArr = [];
//   for (let index = 0; index < this.length; index++) {
//     myArr.push(fun(this[index]));
//   }
//   return myArr;
// };

// console.log(arr.map((val) => val + 1))
// console.log(arr.myMap((val) => val + 1))

// Array.prototype.myReduce = function (fun, initialVal) {
//   let ans = initialVal;
//   for (let index = 0; index < this.length; index++) {
//     ans = fun(ans, this[index]);
//   }
//   return ans;
// };

// console.log(arr.reduce((acc, val) => {
//   return val + acc;
// }, 0), arr.myReduce((acc, val) => {
//   return val + acc;
// }, 0));

// Array.prototype.myFilter = function (fun) {
//   const arr = [];
//   for (let index = 0; index < this.length; index++) {
//     if (fun(this[index])) arr.push(this[index])
//   }
//   return arr;
// }

// console.log(
//   arr.filter((val) => 5 + val),
//   arr.myFilter((val) => 5 + val)
// )

// function debounce(fun, delay) {
//   let timer;
//   return (...args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fun.apply(this, args);
//     }, delay);
//   };
// }

// function throttle(fun, delay) {
//   let shouldCall = true;
//   return (...args) => {
//     if (shouldCall) {
//       fun.apply(this, args);
//       shouldCall = false
//       setTimeout(() => {
//         shouldCall = true;
//       }, delay);
//     }
//   };
// }

// window.foo = 'baz'

// const a = {
// 	foo: "bar"
// }

// function hello() {
// 	console.log(this.foo);
// }

// hello();
// hello.call(a)
// function looper() {
//   for (var i = 0; i < 5; i++) {
//     ((j) => {
//       setTimeout(() => {
//         console.log(j);
//       }, 5000);
//     })(i);
//   }
// }

// looper();

// Define a binary tree node structure
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// Function for recursive search in a binary tree
// function recursiveSearch(mNode, searchNode, path) {
//   // Base case: If current node is null, return false
//   if (mNode === null) {
//     return false;
//   }

//   // Append current node to the path
//   path.push(mNode.value);

//   // Check if the current node matches the search node
//   if (mNode.value === searchNode) {
//     // If found, return true (indicating the node is found)
//     return true;
//   }

//   // Recursively search the left and right child nodes
//   if (
//     recursiveSearch(mNode.left, searchNode, path) ||
//     recursiveSearch(mNode.right, searchNode, path)
//   ) {
//     // If the search node is found in the left or right subtree, return true
//     return true;
//   }

//   // If the search node is not found in the current subtree, remove the current node from the path
//   path.pop();

//   // Return false (indicating the node is not found)
//   return false;
// }

// // Create a binary tree
// const root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);
// root.left.left = new Node(4);
// root.left.right = new Node(5);
// root.right.left = new Node(6);
// root.right.right = new Node(7);
// root.right.right.left = new Node(8);

// // Define an empty array to store the path
// const path = [];

// // Call the recursiveSearch function to search for a node (e.g., node with value 6)
// const searchNode = 6;
// const isNodeFound = recursiveSearch(root, searchNode, path);

// // If the node is found, print the path to the node
// if (isNodeFound) {
//   console.log("Path to node", searchNode, ":", path);
// } else {
//   console.log("Node", searchNode, "not found in the binary tree.");
// }

// function Car(make, model) {
//     this.make = make;
//     this.model = model;
//   }

//   const myCar = new Car('Toyota', 'Camry');
//   console.log(myCar); // `this` refers to the newly created instance (`myCar`)

// class Person {
//   constructor(name) {
//     this._name = name; // Private property
//   }

//   // Getter method
//   get name() {
//     return this._name;
//   }

//   // Setter method
//   set name(newName) {
//     if (typeof newName === "string") {
//       this._name = newName;
//     } else {
//       console.error("Name must be a string.");
//     }
//   }
// }

// const person1 = new Person("John");
// console.log(person1.name); // Output: John

// person1.name = "Jane";
// console.log(person1.name); // Output: Jane

// person1.name = 123; // Error: Name must be a string.
// person1._name = 123; // Error: Name must be a string.
// console.log(person1.name); // Output: 123

// const arr = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4];

// // Function to filter array based on maximum duplicates allowed
// const filterMaxDuplicates = (arr, maxDuplicates) => {
//   const count = {};
//   const result = [];
//   for (num of arr) {
//     if (count[num] && count[num] >= maxDuplicates) {
//       continue;
//     } else if (count[num]) {
//       count[num]++;
//       result.push(num);
//     } else {
//       count[num] = 1;
//       result.push(num);
//     }
//   }
//   return result;
// };

// // Filter array based on maximum 2 duplicates allowed
// const result = filterMaxDuplicates(arr, 3);

// console.log(result); // Output: [1, 1, 2, 2, 3, 3, 4]

// const users = [
//   { firstName: "Suhas", lastName: "Rao", age: 20 },
//   { firstName: "Baji", lastName: "Rao", age: 30 },
//   { firstName: "Shreyas", lastName: "Iyer", age: 40 },
//   { firstName: "Anil", lastName: "Kumar", age: 20 },
// ];

// // expected output: { 20 : 2, 30: 1, 40: 1 }
// const result = users.reduce(function (acc, curr) {
//   if (acc[curr.age]) {
//     acc[curr.age] = ++acc[curr.age];
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {});
// console.log(result);

// Attempting to perform primitive operations on undefined
// let undefinedValue;

// Adding undefined to a number
// console.log(5 + undefinedValue); // Results in NaN (Not a Number)

// // Subtracting undefined from a number
// console.log(10 - undefinedValue); // Results in NaN

// // Multiplying undefined by a number
// console.log(3 * undefinedValue); // Results in NaN

// // Dividing a number by undefined
// console.log(20 / undefinedValue); // Results in Infinity

// // Concatenating undefined with a string
// console.log("Hello" + undefinedValue); // Results in "Helloundefined"

// const sleep = async (time) => {
//   // write code
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, time * 1000);
//   });
// };
// const sayHello = async () => {
//   console.log("Start");
//   await sleep(2);
//   console.log("Hello there");
// };
// sayHello();

// //! POLYFILL
// const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];

// Array.prototype.myMap = function (fn) {
//   const result = [];
//   for (let index = 0; index < this.length; index++) {
//     result.push(fn(this[index]));
//   }
//   return result;
// };

// Array.prototype.myFilter = function (fn) {
//   const result = [];
//   for (let index = 0; index < this.length; index++) {
//     if (fn(this[index])) {
//       result.push(this[index]);
//     }
//   }
//   return result;
// };

// Array.prototype.myFlat = function (d) {
//   let arr = this;
//   for (let index = 0; index < d; index++) {
//     arr = arr.reduce((acc, val) => {
//       return acc.concat(val);
//     }, []);
//   }
//   return arr;
// };

// const mn = [
//   [1, [1, 1, 1], 6, 8],
//   [[1, 3, 1, [1, 4, 1, 3, 1, 1], 5, 1], 5, 1, 1, 8],
// ];

// console.log(mn.myFlat(3), mn);

// const result = arr.myFilter((val) => {
//   return val < 5;
// });
// const result1 = arr.filter((val) => {
//   return val < 5;
// });

// console.log(result, result1);

// function MyPromise(exec) {
//   let onResolve;
//   let onReject;

//   function resolve(val) {
//     onResolve(val);
//   }
//   function reject(val) {
//     onReject(val);
//   }

//   this.then = function (fn) {
//     onResolve = fn;
//     return this;
//   };
//   this.catch = function (fn) {
//     onReject = fn;
//     return this;
//   };
//   exec(resolve, reject);
// }

// async function Name() {
//   return new MyPromise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("aayen");
//     }, 1000);
//   });
// }

// Name()
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// ? Promise.all

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("Promise 1 resolved"), 1000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("Promise 2 resolved"), 500);
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("Promise 3 rejected"), 100);
// });

// Promise.myAll = function (promises) {
//   return new Promise((resolve, reject) => {
//     const result = [];
//     promises.forEach((element, index) => {
//       element
//         .then((val) => {
//           result.push(val);
//           if (promises.length - 1 == index) resolve(result);
//         })
//         .catch((val) => {
//           reject(val);
//         });
//     });
//   });
// };

// // ? Promise.race

// Promise.myRace = function (promises) {
//   return new Promise((resolve, reject) => {
//     let settled = false;
//     promises.forEach((element) => {
//       element
//         .then((val) => {
//           if (!settled) {
//             settled = true;
//             resolve(val);
//           }
//         })
//         .catch((val) => {
//           if (!settled) {
//             settled = true;
//             reject(val);
//           }
//         });
//     });
//   });
// };

// Promise.myRace([promise1, promise2, promise3])
//   .then((val) => {
//     console.log("Resolved values:", val);
//   })
//   .catch((val) => {
//     console.log("Error:", val);
//   });

// const arr = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4];

// function removeDuplicate(arr, num) {
//   const obj = {};
//   const result = [];
//   arr.map((elem) => {
//     obj[elem] = obj[elem] ? 1 + obj[elem] : 1;
//     if (obj[elem] <= num) {
//       result.push(elem);
//     }
//   });
//   console.log(obj);
//   return result;
// }

// console.log(removeDuplicate(arr, 1));

// const person = {
//   name: "niketan ",
// };

// function printName() {
//   console.log(this.name);
// }

// printName.call(person);

// const arr = [11, 12, 13, 15, 16, 17, 20];

// const res = [];

// let j = arr[0];
// for (let index = 0; index < arr.length; ) {
//   if (arr[index] && arr[index] !== j) {
//     res.push(j);
//     j++;
//   } else {
//     j++;
//     index++;
//   }
// }
// console.log(res);

// const arr = [11, 12, 13, 15, 16, 17, 20];
// const res = [];

// for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
//   if (!arr.includes(i)) {
//     res.push(i);
//   }
// }

// console.log(res);
