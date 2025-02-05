// //? Selection Sort; by brute force method;

const arr = [3, 5, 1, 8, 2, 9, 6, 7, 4, 0];
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

console.log(bubbleSort(arr));
