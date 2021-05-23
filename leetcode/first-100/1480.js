//  Time complexity: O(n)
//  Space complexity: O(1)

function runningSum(nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1]
  }

  return nums
}

console.log(runningSum([1, 1, 1, 1, 1]))  //  [1, 2, 3, 4, 5]
console.log(runningSum([1, 2, 3, 4]))     //  [1, 3, 6, 10]