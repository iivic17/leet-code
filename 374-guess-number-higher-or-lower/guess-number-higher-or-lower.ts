function guessNumber(n: number) {
    let lower = 0
    let upper = n
    const limit =  Math.floor(Math.log2(n))

    for (let i = 0; i <= limit; i++) {
        const middle = Math.round((lower + upper) / 2)
        const res = guess(middle)

        if (res === 0) return middle
        if (res === 1) lower = middle
        if (res === -1) upper = middle
    }

    return -1
}