class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // const map = new Map()
        // for(let i = 0; i < numbers.length; i++) {
        //     map.set(numbers[i], i + 1)
        //     const diff = target - numbers[i]
        //     if(map.get(diff) && numbers[i] !== diff) {
        //         return [map.get(diff), i +1]
        //     }
        // }
        // return []
         let left = 0
         let right = numbers.length - 1
         let iterTarget = 0
        while(left < right || iterTarget === target) {
           iterTarget = numbers[left] + numbers[right]
            if(iterTarget === target) {
                return [left + 1, right + 1]
            }
            if(iterTarget > target) {
                right--
            }
            if(iterTarget < target) {
                left++
            }
        }
        return []
    }
}
