function isPowerOfTwo(n: number) {
    if (n <= 0) return false
    if (n <= 2) return true

    let curr = 2
    const limit = Math.ceil(Math.log2(n))

    for (let i = 0; i < limit; i++) {
        const curSqrt = curr * 2
        
        if (curSqrt === n) return true
        if (curSqrt > n) return false
        if (curSqrt < n) curr *= 2
    }

    return false
}