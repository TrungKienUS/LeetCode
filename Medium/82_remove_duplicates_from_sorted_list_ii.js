/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function (head) {
    //special case
    if (head == null || head.next == null) return head;

    let dummy = new ListNode(0, head);
    let currNode = dummy;

    while (currNode.next !== null && currNode.next.next != null) {
        if (currNode.next.val == currNode.next.next.val) {
            let duplicateValue = currNode.next.val;
            while (currNode.next != null && currNode.next.val == duplicateValue) {
                currNode.next = currNode.next.next
            }
        } else {
            currNode = currNode.next
        }
    }

    return dummy.next
};