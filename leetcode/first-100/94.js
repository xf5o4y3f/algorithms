const TreeNode = require("../helpers/TreeNode")

const root = new TreeNode(50)
root.left = new TreeNode(30)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(41)
root.left.right.left = new TreeNode(33)
root.right = new TreeNode(99)
root.right.left = new TreeNode(73)
root.right.right = new TreeNode(160)

function inorderTraversal(root) {
  if (!root) return []
  const res = []

  res.push(...inorderTraversal(root.left))
  res.push(root.val)
  res.push(...inorderTraversal(root.right))

  return res
}


console.log(inorderTraversal(root))  //  [4, 30, 33, 41, 50, 73, 99, 160]