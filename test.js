const f = require('./longestValidParentheses');
const assert = require('assert');

assert.strictEqual(f('(()'), 2);
assert.strictEqual(f(')()())'), 4);
assert.strictEqual(f(''), 0);
assert.strictEqual(f('()(())'), 6);
assert.strictEqual(f('))(('), 0);
assert.strictEqual(f('()(()'), 2);
assert.strictEqual(f('(()())'), 6);

console.log('All tests passed');
