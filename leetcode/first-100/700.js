const TreeNode = require("../helpers/TreeNode")

const root = new TreeNode(4)
root.left = new TreeNode(2)
root.right = new TreeNode(7)
root.left.left = new TreeNode(1)
root.left.right = new TreeNode(3)

//  Time complexity: O(h)
//  Space complexity: O(h)

function searchBST(root, target) {
  if (!root) return null

  if (target === root.val) return root
  else if (target < root.val) return searchBST(root.left, target)
  else return searchBST(root.right, target)
}

console.log(searchBST(root, 2)) //  [2, 1, 3]