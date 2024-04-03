/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode(0, head);
    let currNode = dummy;
    let secondNode = dummy;

    for (let i = 0; i <= n; i++) {
        currNode = currNode.next
    }

    while (currNode != null) {
        currNode = currNode.next
        secondNode = secondNode.next
    }
    secondNode.next = secondNode.next.next

    return dummy.next
};