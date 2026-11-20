/**
 * Longest Valid Parentheses
 * Time: O(n), Space: O(n)
 * @param {string} s
 * @return {number}
 */
function longestValidParentheses(s) {
  const stack = [-1]; // base index before string start
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i); // new base
      } else {
        max = Math.max(max, i - stack[stack.length - 1]);
      }
    }
  }
  return max;
}

module.exports = longestValidParentheses;
