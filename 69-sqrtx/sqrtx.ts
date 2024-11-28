  function mySqrt(x: number) {
    if (x === 0) return 0
    if (x <= 3) return 1
    let lower = 0
    let higher = 0

    const limit = Math.floor(x / 2)
    
    for (let i = 2; i <= limit; i++) {
      lower = i * i
      higher = (i + 1) * (i + 1)
      if (lower === x) return i
      if (higher === x) return i + 1
      if (lower < x && higher > x) 
      return i
    }
  }