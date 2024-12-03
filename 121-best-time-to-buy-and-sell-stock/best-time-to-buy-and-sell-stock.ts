  function maxProfit(prices: number[]) {

    let highest = 0
    let maxgain = 0

    for (let i = prices.length - 1; i >= 0; i--) {
      const current = prices[i]

      if (current > highest) {
        highest = current
        continue
      }

      const gain = highest - current

      if (gain > maxgain) {
        maxgain = gain
      }
    }

    return maxgain
  }