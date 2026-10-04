class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let result = true
        let left = 0
        let right = s.length -1
        const isAlphanumericChar = (char) => {
            return /^[a-zA-Z0-9]$/.test(char)
        }
        while(left < right) {
            const leftChar = s[left]
            const rightChar = s[right]
            if(!isAlphanumericChar(leftChar)) {
                left++
                continue
            }
            if(!isAlphanumericChar(rightChar)) {
                right--
                continue
            }
            if(leftChar.toLowerCase() !== rightChar.toLowerCase()) {
                result = false
                break
            }
            left++
            right--
        }
        return result
        // const isAlphanumericChar = (char) => {
        //     return /^[a-zA-Z0-9]$/.test(char)
        // }
        // let str = ''
        // for(let i = 0; i < s.length; i++) {
        //     const normalized = s[i].toLowerCase()
        //     if(isAlphanumericChar(normalized)) {
        //         str += normalized
        //     }
        // }
        // const reversedStr = str.split('').reverse().join('')
        // return str === reversedStr
    }
}
