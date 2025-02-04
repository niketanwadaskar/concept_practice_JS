// Selection sort
// bubble sort

const arr = [5, 3, 7, 9, 1, 4, 79, 3, 6, 8, 9, 3, 6, 8, 9, 21, 0];
// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let minIndex = i;
//     for (let j = i; j < arr.length; j++) {
//       if (arr[minIndex] > arr[j]) {
//         minIndex = j;
//       }
//     }
//     if (arr[minIndex] < arr[i]) {
//       [ arr[i],arr[minIndex]] = [ arr[minIndex],arr[i]];
//     }
//   }
//   return arr;
// }

// console.log(selectionSort(arr));
