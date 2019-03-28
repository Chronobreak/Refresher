const sort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[j]
        array[j] = array[i]
        array[i] = temp
      }
    }
  }
  return array
}

let test = [4, 3, 1, 8, 9, 7, 3]
console.log(sort(test));