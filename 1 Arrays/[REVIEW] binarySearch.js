// Implement a simple binary search

const search = (array, target, start, end) => {
  if (start > end) {
    return -1
  }
  let midpoint = Math.floor((start+end)/2)

  if (array[midpoint] === target) {
    return "Target " + target + " found at index " + midpoint + "."
  } else if (array[midpoint] < target) {
    return search(array, target, midpoint+=1, end)
  } else if (array[midpoint] > target) {
    return search(array, target, start, midpoint-=1)
  }
}

let test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(search(test, 5, 0, test.length-1))
console.log(search(test, 13, 0, test.length-1))