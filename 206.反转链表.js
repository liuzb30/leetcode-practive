/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let curr = head;
  let pre = null;

  while (curr) {
    let next = curr.next;
    curr.next = pre;
    pre = curr;
    curr = next;
  }
  return pre;
};
// @lc code=end
