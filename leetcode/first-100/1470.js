//  Time complexity: O(n)
//  Space complexity: O(n)

function shuffle(nums, n) {
  const res = []

  for (let i = 0; i < n; i++) {
     res.push(nums[i], nums[n + i])
  }

  return res
}

console.log(shuffle([2, 5, 1, 3, 4, 7], 3))  //  [2, 3, 5, 4, 1, 7]