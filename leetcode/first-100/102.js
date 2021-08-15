const TreeNode = require("../helpers/TreeNode")

const root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)

function levelOrder(root) {
  if (!root) return []

  const queue = [root]
  const res = []

  while (queue.length) {
    let n = queue.length
    let level = []

    for (let i = 0; i < n; i++) {
      let node = queue.shift()
      level.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    res.push(level)
  }

  return res
}


console.log(levelOrder(root))  //  [[3], [9, 20], [15, 7]]