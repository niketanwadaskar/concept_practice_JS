const points = [25, 40, 1, 5, 100, 10];
function findSecondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  arr.map((num, index) => {
    if(num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
        secondLargest = num;
    }
});
console.log(largest , secondLargest, "");
  // ----------------
  //   let max = -Infinity;
  //   let secondMax = -Infinity;

  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] > max) {
  //       secondMax = max;
  //       max = arr[i];
  //     } else if (arr[i] > secondMax && arr[i] !== max) {
  //       secondMax = arr[i];
  //     }
  //   }

  //   console.log(secondMax);
}

findSecondLargest(points);
