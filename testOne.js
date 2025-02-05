// // Selection sort
// // bubble sort

const arr = [5, 3, 7, 9, 1, 4, 79, 6, 8, 36, 28, 89, 21, 0];
const sortedArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const sortedArr = [0, 1, 3, 4, 5, 6, 7, 8, 9, 21, 28, 36, 79, 89];

function binarySearch(arr, k) {
  let n = arr.length;
  let left = 0;
  let right = n - 1;
  while (left <= right) {
    const mid = left + Math.round((right - left) / 2);
    if (arr[mid] == k) {
      return true;
    } else if (arr[mid] < k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch(sortedArr, 9));
