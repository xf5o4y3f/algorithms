const ListNode = require("../helpers/ListNode")

//  1 -> 2 -> 3 -> 4 -> 5

const node1 = new ListNode(1)
node1.next = new ListNode(2)
node1.next.next = new ListNode(3)
node1.next.next.next = new ListNode(4)
node1.next.next.next.next = new ListNode(5)

//  Time complexity: O(n)
//  Space complexity: O(1)

function middleNode(head) {
  let slow = fast = head

  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }

  return slow
}

console.log(middleNode(node1))  //  3 -> 4 -> 5