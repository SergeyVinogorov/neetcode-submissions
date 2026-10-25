class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
    const result = []
    const deque = []

    let left = 0

    for (let right = 0; right < nums.length; right++) {
      // Удаляем с конца элементы,
      // которые меньше нового
      while (
        deque.length &&
        nums[deque[deque.length - 1]] <= nums[right]
        ) {
        deque.pop()
      }

      deque.push(right)

      // Удаляем максимум, если он вышел из окна
      if (deque[0] < left) {
        deque.shift()
      }

      // Окно достигло размера k
      if (right - left + 1 === k) {
        result.push(nums[deque[0]])
        left++
      }
    }

    return result
    }
}
