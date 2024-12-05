  function isHappy(n: number) {
    if (n === 1) return true

    const results: Record<number, number> = {
      0: 0,
      1: 1,
      2: 4,
      3: 9,
      4: 16,
      5: 25,
      6: 36,
      7: 49,
      8: 64,
      9: 81
    }

    let sum = n
    while (sum !== 2 && sum !== 3 && sum !== 4) {
      sum = sum.toString().split('').map(Number).reduce((prev, cur) => prev + results[cur], 0)
      if (sum === 1) return true
    }
    return false
  }