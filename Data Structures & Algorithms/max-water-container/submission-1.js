class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0
        let r = heights.length -1
        let l = 0
        while(l < r) {
            const min = Math.min(heights[l], heights[r])
            const  width = r - l
            max = Math.max(max, (min * width))
            if(heights[l] < heights[r]) {
                l++
            } else {
                r--
            }
        }
        return max
    }
}
