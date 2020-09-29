/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  let cache = [];
  if (N === 0) return 0;
  if (N === 1 || N === 2) return 1;
  let pre = 1,
    curr = 1;
  let sum;
  for (let i = 3; i <= N; i++) {
    sum = pre + curr;
    pre = curr;
    curr = sum;
  }
  return sum;
};
// @lc code=end
