const ListNode = require("../helpers/ListNode")

//  3 -> 2 -> 0 -> -4

const node1 = new ListNode(3)
node1.next = new ListNode(2)
node1.next.next = new ListNode(0)
node1.next.next.next = new ListNode(-4)
node1.next.next.next.next = node1

//  Time complexity: O(n)
//  Space complexity: O(1)

function hasCycle(head) {
  if (!head) return false
  let slow = fast = head

  while(fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) return true
  }

  return false
}

console.log(hasCycle(node1))  //  true