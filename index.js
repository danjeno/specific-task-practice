//5. Write a function that takes two arrays as arguments
//Merge both arrays and remove duplicate values
//Sort the merge result in ascending order
//Return the resulting array

function mergeAndSort(arr1, arr2) {
  const merged = [...arr1, ...arr2];
  const sorted = merged.sort((a, b) => a - b);
  const result = sorted.filter((item, index) => sorted.indexOf(item) === index);
  return result;
}

console.log(mergeAndSort([1, 2, 3], [2, 4, 5]));

//6. Write a function that takes an object (a) and a string (b) as argument
//Return true if the object has a property with key 'b'
//Return false otherwise

function hasProperty(obj, str) {
  return obj.hasOwnProperty(str);
}

console.log(hasProperty({ name: "Jack", age: 22 }, "name")); //true
console.log(hasProperty({ name: "Jack", age: 22 }, "address")); //false