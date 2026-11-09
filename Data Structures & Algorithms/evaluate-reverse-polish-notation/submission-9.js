class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const mapFunc = {
            "*": (a,b)=>{
                return a*b
            },
            '+': (a,b)=>{
                return a+b
            },
            "-": (a,b)=>{
                return a-b
            },
            '/': (a,b)=>{
                return Math.trunc(a/b)
            },
        }
        let stack = []
        for(let item of tokens) {
            if(!mapFunc[item]) {
                stack.push(Number(item))
            } else {
                    const b = stack.pop()
                    const a = stack.pop()
                    const res = mapFunc[item](a, b)
                    stack.push(res)
                
            }
        }
        return stack[0]
    }
}
