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

const cycle = (LL) => {
  let tortoise, hare
  let currentNode = LL
  while (currentNode.next !== null) {
    tortoise = currentNode.next
    hare = currentNode.next.next
    if (tortoise === hare) {
      return true
    }
    currentNode = currentNode.next
  }
  return false
}
console.log(cycle(test))