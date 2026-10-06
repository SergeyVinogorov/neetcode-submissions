class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // const set = new Set(nums)
        // return set.size !== nums.length

        const map = new Map
        for (let i = 0; i < nums.length; i++) {
            if(map.has(nums[i])) {return true} else{
                map.set(nums[i], 1)
            }
        }
        return false
    }
}
