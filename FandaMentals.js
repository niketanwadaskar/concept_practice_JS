// //? Selection Sort; by brute force method;

const arr = [3, 5, 1, 8, 2, 9, 6, 7, 4, 0];
const sortedArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let minIndex = i; // consider min is first
//     for (let j = i; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     if (minIndex != i) {
//       [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//     }
//   }
//   return arr;
// }

// //? Bubble sort
// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
// }
// return arr;
// }

// console.log(insertionSort(arr));

// //?Insertion Sort // brute force

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let key = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > key) {
//       arr[j + 1] = arr[j];
//       j--
//     }
//     arr[j + 1] = key;
//   }
//   return arr;
// }

// //? Linear Search

// function linearSearch(arr, k) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == k) {
//       return i;
//     }
//   }
//   return -1;
// }

// //? Binary Search

// function binarySearch(arr, k) {
//   let n = arr.length;
//   let left = 0;
//   let right = n - 1;
//   while (left <= right) {
//     let mid =left + Math.round((right-left ) / 2);
//     if (arr[mid] == k) {
//       return mid;
//     } else if (arr[mid] < k) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return -1;
// }

// console.log(binarySearch(sortedArr, 83));
