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

const reverse = (LL) => {
  let prev = null;
  let next = null;
  let currentNode = LL;
  while (currentNode) {
    next = currentNode.next
    currentNode.next = prev
    prev = currentNode
    currentNode = next
  }
  return prev
}

/*
1 -> 2 -> 3 -> 4 -> 5 -> null

null <- 1 
*/
console.log(reverse(test))