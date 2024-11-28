  function climbStairs(n: number) {
    if (n === 1) return 1
    if (n === 2) return 2
    let prev = 1
    let cur = 2
    for (let i = 3; i < n; i++) {
      const temp = prev
      prev = cur
      cur = temp + cur
    }
    return prev + cur
  }