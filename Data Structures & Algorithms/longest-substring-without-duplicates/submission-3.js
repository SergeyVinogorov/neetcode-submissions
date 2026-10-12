class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxLength = 0
        // let subStr = ''
        // for(let char of s) {
        //     if(!subStr.includes(char)) {
        //         subStr += char
        //     } else {
        //         const index = subStr.indexOf(char)
        //         const sliced = subStr.slice(index + 1)
        //         subStr = sliced + char
        //     }
        //     maxLength = Math.max(maxLength,  subStr.length)
        // }
        const chars = new Set()
        let left = 0
        for (let right = 0; right < s.length; right++) {
            while(chars.has(s[right])) {
                chars.delete(s[left])
                left++
            }
            chars.add(s[right])
            maxLength = Math.max(
                maxLength,
                chars.size
            )
        }
        return maxLength
    }
}
