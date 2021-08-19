//  Time complexity: O(n)
//  Space complexity: O(n)

function isValid(brackets) {
  if (brackets.length % 2 !== 0) return false

  const pairs = {
    "(": ")",
    "[": "]",
    "{": "}"
  }
  const stack = []

  for (const b of brackets) {
    if (b === "(" || b === "[" || b === "{") {
      stack.push(pairs[b])
    } else {
     if (stack.pop() !== b) return false
    }
  }

  return !stack.length
}

console.log(isValid("()"))      //  true
console.log(isValid("()[]{}"))  //  true
console.log(isValid("(]"))      //  false