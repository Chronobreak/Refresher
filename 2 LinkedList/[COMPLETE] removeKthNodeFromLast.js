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

const remove = (LL, k) => {
  let pointer = LL
  let kPointer = LL
  let prev
  while (k > 0) {
    kPointer = kPointer.next
    k--
  }
  while (kPointer !== null) {
    prev = pointer
    pointer = pointer.next
    kPointer = kPointer.next
  }
  prev.next = pointer.next
  return LL
}

console.log(remove(test, 2))