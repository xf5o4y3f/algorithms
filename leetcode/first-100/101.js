const TreeNode = require("../lib/TreeNode")

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.left.left = new TreeNode(3)
root.left.right = new TreeNode(4)
root.right = new TreeNode(2)
root.right.left = new TreeNode(4)
root.right.right = new TreeNode(3)

//  Time complexity: O(n)
//  Space complexity: O(h)

function isSymmetric(root) {
  if (!root) return false

  return isMirror(root.left, root.right)
}

function isMirror(tree1, tree2) {
  if (!tree1 && !tree2) return true
  if (!tree1 || !tree2) return false

  return tree1.val === tree2.val && isMirror(tree1.left, tree2.right) && isMirror(tree1.right, tree2.left)
}

console.log(isSymmetric(root))  //  true