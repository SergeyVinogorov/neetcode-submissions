class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = []
        const result = new Array(temperatures.length).fill(0)
        for(let i = 0; i < temperatures.length; i++) {
            const last = stack[stack.length - 1]
            const curr = temperatures[i]
            while(stack.length && curr > temperatures[stack[stack.length - 1]]) {
                const removedIndex = stack.pop()
                result[removedIndex] = i - removedIndex
            }
            stack.push(i)
        }
        return result
    }
}
