/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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

var detectCycle2 = function (head) {
  let cache = new Set();
  let curr = head;
  while (curr) {
    if (cache.has(curr)) {
      return curr;
    } else {
      cache.add(curr);
    }
    curr = curr.next;
  }
  return null;
};
var detectCycle = function (head) {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      let start = head;
      while (start) {
        if (start === fast) {
          return start;
        }
        start = start.next;
        fast = fast.next;
      }
    }
  }
  return null;
};
// @lc code=end
