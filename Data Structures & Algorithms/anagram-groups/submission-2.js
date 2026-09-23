class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if(strs.length === 1) {
            return [[strs[0]]]
        }
        const res = {}
        for (let s of strs) {
            const count = new Array(26).fill(0)
            for (let c of s) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] +=1
            }
            const key = count.join(',')
            if(!res[key]) {
                res[key] = []
            }
            res[key].push(s)
        }
        // const seenMap = new Map()
        // for(let i = 0; i < strs.length; i++) {
        //     const str = strs[i]
        //     const normalizeStr = str.split('').sort().join()
        //     const hasKey = seenMap.has(normalizeStr)
        //     seenMap.set(normalizeStr, hasKey ? [...seenMap.get(normalizeStr), str] : [str])
        // }
        // for (const[key, value] of seenMap){
        //     result.push(value)
        // }
        return Object.values(res)
    }
}
