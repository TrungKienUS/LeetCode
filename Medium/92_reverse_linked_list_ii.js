/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    let dummy = new ListNode(0, head);
    let leftPrev = dummy;
    let currNode = head;
    for(let i = 0; i < left - 1; i++){
     leftPrev = leftPrev.next
     currNode = currNode.next
    }

    let prevNode = null;
    let subListHead = currNode;
     for(let i = 0; i <= right - left; i++){
         let nextNode = currNode.next;
         currNode.next = prevNode
         prevNode = currNode;
         currNode = nextNode;
    }
    leftPrev.next = prevNode
    subListHead.next = currNode
    return dummy.next
 };