class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        // const map1 = new Map()
        // const map2 = new Map()
        // for(let char of s1) {
        //     map1.set(char, (map1.get(char) ?? 0) + 1)
        // }
        // for (let i = 0; i < s2.length; i++) {
        //     const char = s2[i]
        //     if(map1.has(char)) {
        //         let left = i
        //         let right = i + s1.length
        //         while(left < right) {
        //             let wChar = s2[left]
        //             map2.set(wChar, (map2.get(wChar) ?? 0) + 1)
        //             left++
        //         }
        
        //         let even = true
        //         for(let [key, value] of map2) {
        //             if (map1.get(key) !== value){
        //                 even = false
        //             }
        //         }
        //         if(even) {
        //             return true
        //         } else {
        //             map2.clear()
        //         }
        //     }
        // }
        
        // return false
        if(s1.length > s2.length) {
            return false
        }
        const count1 = new Array(26).fill(0)
        const count2 = new Array(26).fill(0)
        const getIndex = (char) => {
            return char.charCodeAt(0) - 'a'.charCodeAt(0)
        }
        const isEqual = (one,two) => {
            for(let i = 0; i <26; i++) {
                if (one[i] !== two[i]) {
                    return false
                }
            }
            return true
        }
        for(let i = 0; i < s1.length; i++) {
            count1[getIndex(s1[i])]++
            count2[getIndex(s2[i])]++
        }
        if(isEqual(count1,count2)) {
            return true
        }
        let left = 0
        for(let right = s1.length; right < s2.length; right++) {
            count2[getIndex(s2[right])]++
            count2[getIndex(s2[left])]--
            left++
            if(isEqual(count1, count2)) {
                return true
            }
        }
        return false
    }
}
