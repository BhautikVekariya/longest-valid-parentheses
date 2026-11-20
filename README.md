# Longest Valid Parentheses

Given a string of `(` and `)`, return the length of the longest valid (well-formed) parentheses substring.

| Input | Output |
|-------|--------|
| `(()` | 2 |
| `)()())` | 4 |
| `` (empty) | 0 |

## Approach (stack of indices)

- Start stack with `-1` as base.
- `(` -> push index.
- `)` -> pop. If stack empty, push current index as new base. Else length = `i - stack.top`; update max.

**Time:** O(n) **Space:** O(n)

## Run

```bash
node test.js
python3 longest_valid_parentheses.py
```
