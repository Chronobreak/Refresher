// Given a BST and a target, return the target or the value closest to target

const closest = (bst, target) => {
  let result = [];
  let max;
  let distance = Infinity;
  let closest = 0;

  const dfs = (node) => {
    result.push(node.val)
    if (node.left) {
      dfs(node.left)
    }
    if (node.right) {
      dfs(node.right)
    }
  }
  dfs(bst)

  for (let i = 0; i < result.length; i++) {
    if (target > result[i]) {
      max = target-result[i]
      if (max < distance) {
        distance = max
      }
    } else if (target < result[i]) {
      max = result[i]-target
      if (max < distance) {
        distance = max;
      }
    } else {
      return result[i]
    }
  }
  return distance;
}