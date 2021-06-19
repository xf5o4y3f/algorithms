const TreeNode = require("../helpers/TreeNode")

const root = new TreeNode(50)
root.left = new TreeNode(30)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(41)
root.left.right.left = new TreeNode(33)
root.right = new TreeNode(99)
root.right.left = new TreeNode(73)
root.right.right = new TreeNode(160)

function preorderTraversal(root) {
  if (!root) return []

  const res = [root.val]
  res.push(...preorderTraversal(root.left))
  res.push(...preorderTraversal(root.right))

  return res
}

console.log(preorderTraversal(root))  //  [50, 30, 4, 41, 33, 99, 73, 160]