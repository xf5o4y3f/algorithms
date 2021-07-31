//  Time complexity: O(n)
//  Space complexity: O(n)

function singleNumber(nums) {
  const freqTable = nums.reduce((acc, x) => {
    if (x in acc) acc[x] += 1
    else acc[x] = 1
    return acc
  }, {})

   for (const num of nums) {
    if (freqTable[num] === 1) return num
   }

  return freqTable
}

console.log(singleNumber([2, 2, 1]))  //  1