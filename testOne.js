let say = [
  2, 4, 7, 1, 4, 6, 8, 1, 4, 9, 2, 5, 5, 8, 1, 2, 3, 4, 4, 5, 6, 6, 7, 7, 8, 8,
  9,
];

const ab = say.filter((val, index) => {
  return say.indexOf(val) === index;
});
console.log(ab);


function removeDuplicate(say){
 const set = new Set(say);
 return [...set];
}

console.log(removeDuplicate(ab))