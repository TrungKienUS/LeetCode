/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function (l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let total = 0, carry = 0;
    while (l1 || l2 || carry) {
        total = 0 + carry;
        if (l1) {
            total += l1.val
            l1 = l1.next
        }
        if (l2) {
            total += l2.val
            l2 = l2.next
        }

        carry = Math.floor(total / 10);
        total = total % 10
        current.next = new ListNode(total)
        current = current.next;
    }

    if (carry == 1) current.next = new ListNode(1);
    return dummyHead.next
};
