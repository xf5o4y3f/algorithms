//  Time complexity: O(n)
//  Space complexity: O(n)

function containsDuplicate(nums) {
  const seen = {}

  for (const num of nums) {
    if (num in seen) return true
    seen[num] = true
  }

  return false
}

console.log(containsDuplicate([1, 2, 3, 1]))  //  true
console.log(containsDuplicate([1, 2, 3, 4]))  //  false