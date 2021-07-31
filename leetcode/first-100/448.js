//  Time complexity: O(n)
//  Space complexity: O(n)

function findDisappearedNumbers(nums) {
  const numsMap = nums.reduce((acc, x) => {
    acc[x] = true
    return acc
  }, {})

  const res = []
  for (let i = 1; i <= nums.length; i++) {
    if (!(i in numsMap)) res.push(i)
  }
  return res
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])) //  [5, 6]
console.log(findDisappearedNumbers([1, 1])) //  [2]