class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const count = new Map()
        let left = 0
        let maxFreq = 0
        let result = 0
        for(let right = 0; right < s.length; right++) {
            const char = s[right]
            count.set(char, (count.get(char) ?? 0 )+ 1)
            maxFreq = Math.max(maxFreq, count.get(char))
            while(right - left + 1 - maxFreq > k) {
                const leftChar = s[left]
                count.set(leftChar, count.get(leftChar) -1)
                left++
            }
            result = Math.max(result, right -left +1)
        }
        return result
    }
}
