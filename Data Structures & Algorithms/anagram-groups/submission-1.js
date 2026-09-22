class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if(strs.length === 1) {
            return [[strs[0]]]
        }
        const result = []
        const seenMap = new Map()
        for(let i = 0; i < strs.length; i++) {
            const str = strs[i]
            const normalizeStr = str.split('').sort().join()
            const hasKey = seenMap.has(normalizeStr)
            seenMap.set(normalizeStr, hasKey ? [...seenMap.get(normalizeStr), str] : [str])
        }
        for (const[key, value] of seenMap){
            result.push(value)
        }
        return result
    }
}
