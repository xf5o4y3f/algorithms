const TreeNode = require("../helpers/TreeNode")

//     3
//    / \
//   9   20
//      /  \
//    15    7

const root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)

//  Time complexity: O(n)
//  Space complexity: O(1)

function maxDepth(root) {
  if (!root) return 0

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}

console.log(maxDepth(root)) //  3
