const TreeNode = require("../helpers/TreeNode")

const root = new TreeNode(4)
root.left = new TreeNode(2)
root.right = new TreeNode(7)
root.left.left = new TreeNode(1)
root.left.right = new TreeNode(3)

//  Time complexity: O(log(n))
//  Space complexity: O(h)

function insertIntoBST(root, val) {
  if (!root) return new TreeNode(val)

  if (val < root.val) {
    if (root.left) insertIntoBST(root.left, val)
    else root.left = new TreeNode(val)
  } else {
    if (root.right) insertIntoBST(root.right, val)
    else root.right = new TreeNode(val)
  }

  return root
}

console.log(insertIntoBST(root, 5))