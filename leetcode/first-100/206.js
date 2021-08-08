const ListNode = require("../helpers/ListNode")

//  1 -> 2 -> 3 -> 4 -> 5

const node1 = new ListNode(1)
node1.next = new ListNode(2)
node1.next.next = new ListNode(3)
node1.next.next.next = new ListNode(4)
node1.next.next.next.next = new ListNode(5)

//  Time complexity: O(n)
//  Space complexity: O(1)

function reverseList(head) {
  let prev = next = null
  let cur = head

  while(cur) {
    next = cur.next //  4 -> 3 -> 2 -> 1
    cur.next = prev //  null <- 5
    prev = cur
    cur = next
  }

  return prev
}

console.log(reverseList(node1))  //  5 -> 4 -> 3 -> 2 -> 1