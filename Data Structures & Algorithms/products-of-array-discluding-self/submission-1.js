class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
                const result = new Array(nums.length).fill(1)

        let prefix = 1

        for (let i = 0; i < nums.length; i++) {
            result[i] = prefix
            prefix *= nums[i]
        }

        let suffix = 1

        for (let i = nums.length - 1; i >= 0; i--) {
            result[i] *= suffix
            suffix *= nums[i]
        }

        return result

        // for(let i = 0; i < nums.length; i++) {
        //     let product = 1
        //     for(let j = 0; j < nums.length; j++) {
        //         const num = nums[j]
        //         if(j === i) {
        //             continue
        //         }
        //         product = product * num
        //     }
        //     result.push(product)
        // }
    }
}
