//  Time complexity: O(n)
//  Space complexity: O(1)

function missingNumber(nums) {
  let curSum = 0
  nums.forEach(x => curSum += x)

  const n = nums.length
  const expectedSum = n * (n + 1) / 2

  return expectedSum - curSum
}

console.log(missingNumber([3, 0, 1])) //  2