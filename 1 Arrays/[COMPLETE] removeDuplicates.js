/*
Remove duplicates from an array

Example: [1, 1, 2, 3, 4, 5, 5, 5, 6, 7]
Output: [1, 2, 3, 4, 5, 6, 7]
*/

const remove = array => {
  for (let i = 0; i < array.length; i++) {
    if (array[i+1] && array[i] === array[i+1]) {
      array.splice(i, 1)
      i--
    }
  }
  return array
}

let test = [1, 1, 2, 3, 4, 5, 5, 5, 6, 7]
console.log(remove(test))