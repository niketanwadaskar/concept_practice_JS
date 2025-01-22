// const data = [
//     {
//       name: 'Bisleri',
//       value: 9,
//       performance: {
//         releases: [2005, 2008, 2012],
//         sales: 10000,
//         profit: 4000,
//       },
//     },
//     {
//       name: 'Parle-G',
//       value: 12,
//       performance: {
//         releases: [2003, 2006, 2009],
//         sales: 8450,
//         profit: 3654,
//       },
//     },
//     {
//       name: 'Samsung',
//       value: 23,
//       performance: {
//         releases: [2000, 2009, 2021],
//         sales: 11345,
//         profit: 3897,
//       },
//     },
//     {
//       name: 'Youtube',
//       value: 17,
//       performance: {
//         releases: [2005, 2010, 2019],
//         sales: 9576,
//         profit: 2598,
//       },
//     },
//     {
//       name: 'Tesla',
//       value: 29,
//       performance: {
//         releases: [2016, 2017, 2020, 2023],
//         sales: 14321,
//         profit: 6398,
//       },
//     },
//     {
//       name: 'LG',
//       value: 8,
//       performance: {
//         releases: [2011, 2014, 2019],
//         sales: 4953,
//         profit: 897,
//       },
//     },
//    ];

// //    const =

//   const filterArray = (year) => {
//     const result = [];
//     let timeFrame = year - 5;
//     let profit;
//     data.forEach(ele => {
//         profit = ele.performance.profit >= 3000
//         ele.performance.releases.forEach(curr => {
//             if ( curr <= year && curr >= timeFrame && profit) {
//                 result.push()
//             }

//         })
//     });

//   }

//   filterArray(2007);

const heading = document.querySelector(".heading");
const button = document.querySelector(".btn");
let count = 0;

button.addEventListener("click", function () {
  count++;
  if (count === 3) {
    heading.style.color = "purple";
    heading.style.fontSize = "100px";
  } else if (count < 3) {
    heading.style.color = "red";
    heading.style.fontSize = "50px";
  } else if (count > 3) {
    heading.style.color = "green";
    heading.style.fontSize = "150px";
  }
});

// Find Second Laggest Element In Array Using Array Pre-Built Method.
const points = [40, 100, 1, 5, 25, 10];
function findSecondLargest(arr) {
  // Sort the array in descending order
  const sortedArray = arr.sort((a, b) => b - a);
  // Access the second element in the sorted array
  return sortedArray[1];
}

const secondLargest = findSecondLargest(points);
console.log("Second largest element:", secondLargest);

// Find Second Laggest Element In Array **Without** Using Array Pre-Built Method.
function findSecondLargestWithoutUsingPreBuiltMethod(arr) {
  let max = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i];
    }
  }

  return secondMax;
}

const second_Largest_Without_Using_Pre_Built_Method =
  findSecondLargestWithoutUsingPreBuiltMethod(points);
console.log(
  "Second largest element:",
  second_Largest_Without_Using_Pre_Built_Method
);

// Missing Element in Series of Array
function missing(arr) {
  for (let i = 0; i < arr.length; i++) {
    let missingElement;
    if (arr[i] + 1 != arr[i + 1]) {
      missingElement = arr[i] + 1;
      return missingElement;
    }
  }
}

const arr = [11, 12, 13, 14, 15, 16, 18, 19, 20];
console.log(missing(arr));

// Find Longest word in the String. -
const str =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,";

function findLongestWord(str) {
  let words = str.split(" ");
  let longestWord = "";
  console.log(words);

  for (let i = 0; i < words.length; i++) {
    let word = words[i].trim(); // Remove leading/trailing spaces
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

const longestWord = findLongestWord(str);
console.log("Longest word:", longestWord);
console.log("Longest word:", longestWord.length);

// Find fibonacci Sequence.
function fibonacci(n) {
  if (n === 1 || n === 0) {
    console.log("result");
    return false;
  }
  let result = [];
  for (let i = 0; i < n; i++) {
    if (result.length < 2) {
      result[i] = i;
      //   console.log(result.length)
      //   console.log(result)
    } else {
      let prev = result[i - 1];
      let curr = result[i - 2];

      result[i] = prev + curr;
    }
    //   console.log("result", i);
  }
  return result;
}
console.log(fibonacci(7));

// Find the Factorial
// Factorial means - The Factorial of 3 = 3 * 2 * 1 = 6
function factorial(n) {
  if (n < 0) {
    return false;
  }
  if (n === 1 || n === 0) {
    return 1;
  }

  let fact;
  for (let i = n; i > 0; i--) {
    fact = i * (i - 1);

    return fact;
  }
}

const n = 3;
console.log(`The Factorial of the ${n} is`, factorial(n));

// Find out the number is Prime Number or Not;
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
// More optimal Solution Reduce the Number of Loop.
function isPrimeOptimized(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
 
console.log(`It is`, isPrime(95));
console.log(`It is`, isPrimeOptimized(95));

// Find out the number is power of two or Not.
function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

console.log("The Power of 2 is", isPowerOfTwo(14));

// Linear Search
const arr1 = [-5, 2, 10, 4, 5];

function linearSearch(n) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === n) {
      return i;
    } else if (i === arr1.length - 1) {
      return -1;
    }
  }
}

console.log(linearSearch(6));

// Binary Search with Recursive Solution.
const arr2 = [-5, 2, 4, 5, 6, 7];

function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[middleIndex]) {
    return middleIndex;
  }

  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
}

console.log(recursiveBinarySearch(arr2, 7));

// Bubble Sort
const arr3 = [-5, 5, 6, 7, 2, 4];

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}
bubbleSort(arr3);
console.log(arr3);

// Quick Sort
const a = [4, 7, 6, 2, -5, 9];
function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(a));
console.log(a[0]);


// Write a function that takes an array of integers and returns the largest difference between any two numbers in the array. 
function largestDifference(arr) {
  if (arr.length < 2) {
      throw new Error("Array must contain at least two elements.");
  }

  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
          min = arr[i];
      }
      if (arr[i] > max) {
          max = arr[i];
      }
  }

  return max - min;
}

// Example usage
const exampleArray1 = [3, 10, 5, 6, 2, 20];
const exampleArray2 = [-10, -5, -3, -20, 0];
console.log(largestDifference(exampleArray1)); // Output: 18 (20 - 2)
console.log(largestDifference(exampleArray2)); // Output: 20 (0 - (-20))


// Reverse String
// Input: str = "geeks quiz practice code"
// Output: str = "“code practice quiz geeks"
const s = "geeks quiz practice code";
function reverseString(str) {
  // Split the string into an array of characters
  const chars = str.split(" ");
  console.log(chars);
  // Reverse the array
  const reversedChars = chars.reverse();
  // Join the array back into a string
  const reversedString = reversedChars.join(" ");
  return reversedString;
}

const reversed = reverseString(s);
console.log("Reversed string:", reversed);

// Write a function that reverses the order of words in a sentence without using the built-in reverse() method. 
function reverseWords(sentence) {
  const words = sentence.split(' ');
  const reversedWords = [];
  
  for (let i = words.length - 1; i >= 0; i--) {
      reversedWords.push(words[i]);
  }
  
  return reversedWords.join(' ');
}

// Example usage
const sentence = "The quick brown fox jumps over the lazy dog";
const reversedSentence = reverseWords(sentence);
console.log(reversedSentence); // Output: "dog lazy the over jumps fox brown quick The"


// Find the minimum distance between the given two words
const S = ["the", "quick", "brown", "fox", "quick"];
const word1 = "the";
const word2 = "fox";

function minDistance(S, word1, word2) {
  let index1 = -1;
  let index2 = -1;
  let minDist = Infinity;

  // Iterate through the array and update the indices of the occurrences of word1 and word2
  for (let i = 0; i < S.length; i++) {
    if (S[i] === word1) {
      index1 = i;
    } else if (S[i] === word2) {
      index2 = i;
    }

    // Calculate the distance between the current occurrences of word1 and word2
    if (index1 !== -1 && index2 !== -1) {
      minDist = Math.min(minDist, Math.abs(index1 - index2));
    }
  }

  return minDist;
}

const distance = minDistance(S, word1, word2);
console.log("Minimum distance:", distance);

// write programme for How to replace a substring of a string using javascript.
let str1 = "The quick brown fox jumps over the lazy dog";
let substringToReplace = "brown";
let replacementSubstring = "red";

// Using replace() method
let newStr = str1.replace(substringToReplace, replacementSubstring);
console.log(newStr); // Output: "The quick red fox jumps over the lazy dog"

// Using string manipulation
let index = str1.indexOf(substringToReplace);
if (index !== -1) {
  let newStr =
    str1.substring(0, index) +
    replacementSubstring +
    str1.substring(index + substringToReplace.length);
  console.log(newStr); // Output: "The quick red fox jumps over the lazy dog"
} else {
  console.log("Substring not found");
}

// Longest Common Prefix using Sorting
// Input: [“geeksforgeeks”, “geeks”, “geek”, “geezer”];
// Output: “gee”
const input = ["saurabh", "sabh", "sabhk", "sabh"];

function longestCommonPrefix(strs) {
  console.log(strs.length);
  if (strs.length === 0) return "";

  // Sort the array
  strs.sort();
  console.log(strs);

  // Take the first and the last string in the sorted array
  const first = strs[0];
  const last = strs[strs.length - 1];

  let i = 0;
  // Compare characters of the first and last string
  while (i < first.length && i < last.length && first[i] === last[i]) {
    i++;
  }

  // The longest common prefix
  return first.substring(0, i);
}

const commonPrefix = longestCommonPrefix(input);
console.log("Longest common prefix:", commonPrefix);

// Write Programme for Sorting String using sort In-Built function.
// Input: "saurabh"
// Output: "aabhrsu"
function sortString(str) {
  // Convert the string to an array of characters
  let charArray = str.split("");
  console.log(charArray);
  // Sort the array of characters
  charArray.sort();

  // Join the sorted characters back into a string
  let sortedStr = charArray.join("");

  return sortedStr;
}

// Example usage
const originalString = "saurabh";
const sortedString = sortString(originalString);
console.log("Sorted string:", sortedString);

// Write Programme for Sorting String.
// Input: "saurabh"
// Output: "aabhrsu"

function sortFunction(inputArray) {
  // Implementing bubble sort algorithm
  for (let i = 0; i < inputArray.length - 1; i++) {
    for (let j = 0; j < inputArray.length - 1 - i; j++) {
      if (inputArray[j] > inputArray[j + 1]) {
        // Swap the characters if they are in the wrong order
        let temp = inputArray[j];
        inputArray[j] = inputArray[j + 1];
        inputArray[j + 1] = temp;
      }
    }
  }
  return inputArray;
}

function sortString(str) {
  // Convert the string to an array of characters
  let charArray = str.split("");
  console.log(charArray);
  // Sort the array of characters using Custom function made by me.
  sortFunction(charArray);

  // Join the sorted characters back into a string
  let sortedStr = charArray.join("");

  return sortedStr;
}

// Example usage
const originalString1 = "saurabh";
const sortedString1 = sortString(originalString1);
console.log("Sorted string:", sortedString1);

// Find an equal point in a string of brackets
// Input: str = “(())))(“
//   Output:   4
function findEqualPoint(brackets) {
  let leftCount = 0;
  let rightCount = 0;
  const length = brackets.length;

  // First, count the total number of closing brackets
  for (let i = 0; i < length; i++) {
    if (brackets[i] === ")") {
      rightCount++;
    }
  }
  // Iterate through the string and find the balance point
  for (let i = 0; i < length; i++) {
    if (brackets[i] === "(") {
      leftCount++;
    } else if (brackets[i] === ")") {
      rightCount--;
    }

    // Check if the counts are equal at this point
    if (leftCount === rightCount) {
      return i;
    }
  }

  // If no balance point is found
  return -1;
}

// Example usage
const brackets = "(()))(()";
const equalPoint = findEqualPoint(brackets);
if (equalPoint !== -1) {
  console.log("Equal point at index:", equalPoint);
} else {
  console.log("No equal point found");
}

function areIsomorphic(str1, str2) {
  if (str1.length !== str2.length) {
    return false; // If lengths are not equal, they cannot be isomorphic
  }

  const map1 = {};
  const map2 = {};

  for (let i = 0; i < str1.length; i++) {
    let char1 = str1[i];
    let char2 = str2[i];

    // Check if there's a mapping for char1 in map1
    if (!map1[char1]) {
      map1[char1] = char2;
    } else if (map1[char1] !== char2) {
      return false; // Existing mapping does not match current character
    }

    // Check if there's a mapping for char2 in map2
    if (!map2[char2]) {
      map2[char2] = char1;
    } else if (map2[char2] !== char1) {
      return false; // Existing mapping does not match current character
    }
  }

  return true;
}

// Example usage
const str_1 = "egg";
const str_2 = "add";
const result = areIsomorphic(str_1, str_2);
console.log("Are the strings isomorphic?", result); // Output: true

const str3 = "foo";
const str4 = "bar";
const result2 = areIsomorphic(str3, str4);
console.log("Are the strings isomorphic?", result2); // Output: false


// Check if given String is Pangram or not
function isPangram(str) {
  // Convert the string to lowercase to ensure case insensitivity
  str = str.toLowerCase();

  // Create a set to track the unique letters found
  const alphabetSet = new Set();

  // Iterate through the string and add each letter to the set
  for (let char of str) {
    if (char >= "a" && char <= "z") {
      alphabetSet.add(char);
    }
  }

  // Check if the set contains 26 letters (the size of the English alphabet)
  return alphabetSet.size === 26;
}

// Example usage
const sentence1 = "The quick brown fox jumps over the lazy dog";
const sentence2 = "Hello, world!";

console.log(isPangram(sentence1)); // Output: true
console.log(isPangram(sentence2)); // Output: false

// License Key Formatting
// Input: S = “5F3Z-2e-9-w”, K = 4
// Output: “5F3Z-2E9W”
// Explanation: The string S has been split into two parts,  
// each part has 4 characters. 
// Note that two extra dashes are not needed and can be removed.

// Input: S = “2-5g-3-J”, K = 2
// Output: “2-5G-3J”
// Explanation: The string s has been split into three parts,  
// each part has 2 characters except the first part 
// as it could be shorter as mentioned above
function licenseKeyFormatting(S, K) {
  // Step 1: Remove all dashes and convert to uppercase
  let cleaned = S.replace(/-/g, '').toUpperCase();
  
  let formatted = [];
  let count = 0;
  
  // Step 2: Traverse the string in reverse and format
  for (let i = cleaned.length - 1; i >= 0; i--) {
      formatted.push(cleaned[i]);
      count++;
      
      // Insert a dash after every K characters, except for the last group
      if (count === K && i !== 0) {
          formatted.push('-');
          count = 0;
      }
  }
  
  // Step 3: Reverse the array and join to form the formatted string
  return formatted.reverse().join('');
}

// Example usage
const input_key = "5F3Z-2e-9-w";
const K = 4;
const formattedKey = licenseKeyFormatting(input_key, K);
console.log("Formatted license key:", formattedKey); // Output: "5F3Z-2E9W"


// Program to add two binary strings
// const binary1 = "1101";
// const binary2 = "1011";
// outpu: 11000
function addBinary(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = [];

  while (i >= 0 || j >= 0 || carry > 0) {
      let sum = carry;
      
      if (i >= 0) {
          sum += a[i] - '0';
          i--;
      }
      
      if (j >= 0) {
          sum += b[j] - '0';
          j--;
      }

      carry = Math.floor(sum / 2);
      result.push(sum % 2);
  }

  return result.reverse().join('');
}

// Example usage
const binary1 = "1101";
const binary2 = "1011";
console.log("Sum of binary strings:", addBinary(binary1, binary2)); // Output: "11000"
