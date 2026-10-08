class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    /**
     * count = 0
     * itterate through the array 
     * if(item === 0) continue
     * else item  become left
     * create right = left +1  index
     * if right === left continue
     * while right < left || right === length
     * right++
     * if(right === length) { break }
     * slice left + 1 right
     * if arr === 1 = min(left, right)
     * else
     * max = min(left,right)
     * sliceCount = 0
     * itterrate through sliced arr
     * if(item = 0) =  sliceCount + max
     * else sliceCount + min(item, max)
     * result + = sliceCount
     * i = right -1
     */
    trap(height) {
        let left = 0
        let right = height.length - 1

        let leftMax = 0
        let rightMax = 0

        let result = 0
            while (left < right) {
      if (height[left] <= height[right]) {
        if (height[left] >= leftMax) {
          leftMax = height[left]
        } else {
          result += leftMax - height[left]
        }

        left++
      } else {
        if (height[right] >= rightMax) {
          rightMax = height[right]
        } else {
          result += rightMax - height[right]
        }

        right--
      }
    }

    return result
    }
}
