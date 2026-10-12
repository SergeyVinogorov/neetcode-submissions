class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxLength = 0
        let subStr = ''
        for(let char of s) {
            if(!subStr.includes(char)) {
                subStr += char
            } else {
                const index = subStr.indexOf(char)
                const sliced = subStr.slice(index + 1)
                subStr = sliced + char
            }
            maxLength = Math.max(maxLength,  subStr.length)
        }
        return maxLength
    }
}
