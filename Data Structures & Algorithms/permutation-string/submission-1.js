class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const map1 = new Map()
        const map2 = new Map()
        for(let char of s1) {
            map1.set(char, (map1.get(char) ?? 0) + 1)
        }
        for (let i = 0; i < s2.length; i++) {
            const char = s2[i]
            if(map1.has(char)) {
                let left = i
                let right = i + s1.length
                while(left < right) {
                    let wChar = s2[left]
                    map2.set(wChar, (map2.get(wChar) ?? 0) + 1)
                    left++
                }
        
                let even = true
                for(let [key, value] of map2) {
                    if (map1.get(key) !== value){
                        even = false
                    }
                }
                if(even) {
                    return true
                } else {
                    map2.clear()
                }
            }
        }
        
        return false
    }
}
