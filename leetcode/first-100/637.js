const TreeNode = require("../helpers/TreeNode")

const root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)

function averageOfLevels(root) {
  if (!root) return []

  const queue = [root]
  const res = []

  while (queue.length) {
    let n = queue.length
    let sum = 0

    for (let i = 0; i < n; i++) {
      let node = queue.shift()
      sum += node.val
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    res.push(sum / n).toFixed(5)
  }

  return res
}


console.log(averageOfLevels(root))  //  [3, 14.5, 11]