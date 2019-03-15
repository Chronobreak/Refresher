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

// Implement the iterative approach below

const iterative = (array, target) => {
  let start = 0;
  let end = array.length-1;

  while (start < end) {
    let mid = Math.floor((start+end)/2)
    if (array[mid] === target) {
      return "Target " + target + " found at index " + mid + "."
    } else if (array[mid] < target) {
      start = mid+1;
    } else if (array[mid] > target) {
      end = mid;
    }
  }
  return -1;
}

console.log(iterative(test, 5))
console.log(iterative(test, 11))
console.log(iterative(test, 15))