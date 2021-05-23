//  Time complexity: O(n)
//  Space complexity: O(n)

const defangIPaddr = address => address.replace(/\./g, "[.]")

console.log(defangIPaddr("1.1.1.1"))  //  "1[.]1[.]1[.]1"