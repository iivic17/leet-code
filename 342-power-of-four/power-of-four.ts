  function isPowerOfFour(n: number) {
    if (n === 1 || n === 4) return true
    if (n % 4 !== 0) return false
    
    let sum = 4
    const limit = n / 4
    while(sum <= limit) {
      if (sum === limit) return true
      sum *= 4
    }
    return false
  }