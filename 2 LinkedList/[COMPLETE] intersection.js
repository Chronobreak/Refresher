// loop through each linked list to get the length
  // sync up the distance and check values


// or loop through each linked list and build a hash
  // compare hash values

  class LLNode {
    constructor(val, next) {
      this.val = val;
      this.next =  next || null
    }
  }
  
  let five = new LLNode(5)
  let four = new LLNode(4, five)
  let three = new LLNode(3, four)
  let two = new LLNode(2, three)
  let test = new LLNode(1, two)
  console.log(test)

  const intersection = (one, two) => {
    let hash = {}
    while (one) {
      hash[one.val] = 1
      one = one.next
    }
    while (two) {
      if (hash[two.val]) {
        return two.val
      }
      two = two.next
    }
    return "No matches"
  }

  let test2 = new LLNode(2, two)
  console.log(intersection(test, test2))
