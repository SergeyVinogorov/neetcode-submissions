class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const map = {
            ']': '[',
            '}' : '{',
            ')' : '('
        }
        let stack  = []
        for (let char of s) {
            const lastChar = stack[stack.length - 1]
            if(lastChar && map[char] === lastChar) {
                stack.pop()
            } else {
                stack.push(char)
            }
        }
        return stack.length ? false : true
    }
}
