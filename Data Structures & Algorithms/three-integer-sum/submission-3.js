class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    /**
     * create result arr
     * finded
     * sort
     * itterate 1 row
     * left next i
     * right next left 
     * while right < nums.length
     * if found sum 0 
     * create arr of this 3 elements
     * convert it in str put it in visited
     * if find similar not push it into result 
     * othervice push it into arr
     */
    threeSum(nums) {
        const result = []
        nums.sort((a,b) => a - b)
        for(let i = 0; i < nums.length - 2; i++) {
            if(i > 0 && nums[i] === nums[i - 1]){
                continue
            }
            let left = i + 1
            let right = nums.length - 1
            while(left < right) {
                const sum = nums[i] + nums[left] + nums[right]
                if(sum === 0) {
                   result.push([nums[i] , nums[left] ,nums[right]])
                   left++
                   right--
                   while(left < right && nums[left] === nums[left -1]) {
                    left++
                   }
                   while(left < right && nums[right] === nums[right +1]) {
                    right--
                   }
                } else if(sum < 0) {
                    left++
                } else {
                    right--
                }
            }
        }
        return result
    }
}
