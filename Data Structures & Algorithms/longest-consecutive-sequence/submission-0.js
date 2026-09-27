class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums)
        let maxLen = 0
        for(let num of set) {
            if(!set.has(num - 1)) {
                let current = num
                let currentLength = 1
                while (set.has(current +1)) {
                    currentLength++
                    current++
                }
            maxLen = Math.max(maxLen, currentLength)
            }
        }
        return maxLen
    }
}
