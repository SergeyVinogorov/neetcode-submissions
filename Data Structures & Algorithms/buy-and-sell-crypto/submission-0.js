class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0
        let buy = []
        for(let item of prices) {
            if(buy.length === 0) {
                buy.push(item)
                continue
            }
            if (item < buy[0]) {
                buy.pop()
                buy.push(item)
                continue
            }
            const currProfit = item - buy[0]
            if(currProfit > profit) {
                profit = currProfit
            }
        }
        return profit
    }
}
