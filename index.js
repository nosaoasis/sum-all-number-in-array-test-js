function sumItems(array) {
  // Sum all the numbers in the array
  
  /* // non-nested array
  if (array.length === 0) return 0
  return array.shift() + sumItems(array)
  */ 

  // nested array
  let sum = 0;
  array.forEach((item) => {
    if(Array.isArray(item)) {
      sum += sumItems(item);
    } else {
    sum += item;
    }
  })
  return sum;

}

console.log("sum of array items value is", sumItems([1, 2, 3, 4, 5]))
console.log("sum of array items value is", sumItems([[1, 2, [[3], 4]], 5, []]))
console.log("sum of array items value is", sumItems([[[[[[[[[[[[[1]]]]]]]]]]]]]))

module.exports = sumItems;