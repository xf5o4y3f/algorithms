//  Time complexity: O(n)
//  Space complexity: O(n)

function removeDuplicates(str) {
  const stack = []

  for (const x of str) {
    if (x === stack[stack.length - 1]) stack.pop()
    else stack.push(x)
  }

  return stack.join("")
}

console.log(removeDuplicates("abbaca"))  //  ca
console.log(removeDuplicates("azxxzy"))  //  ay