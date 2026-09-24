class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map()
        let result = []
        for (let num of nums) {
            if(!map.has(num)) {
                map.set(num, 0)
            }
            const value = map.get(num)
            map.set(num, value + 1)
        }
        const heap = new MinPriorityQueue((x) => x[1])
        for (const [num, frequency] of map) {
            heap.enqueue([num, frequency])
            if(heap.size() > k) {
                heap.dequeue()
            }
        }

        while (heap.size() > 0) {
            const [num] = heap.dequeue()
            result.push(num)
        }
        // const seen = new Set()
        // while (result.length < k) {
        //     let greatest = 0
        //     let greatestKey = ''
        //     for (const [key, value] of map) {
        //         if(seen.has(key)) {
        //             continue
        //         }
        //         if(value > greatest) {
        //             greatest = value
        //             greatestKey = key
        //         }
        //     }
        //      result.push(greatestKey);
        //     seen.add(greatestKey);
        // }
        return result
    }
}
