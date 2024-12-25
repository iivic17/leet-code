function checkPerfectNumber(num: number) {
    if (num <= 1) return false

    const root = Math.floor(Math.sqrt(num))
    let sum = 1

    for (let i = 2; i <= root; i++) {
        if (num % i === 0) {
            sum += i
            if (i !== num / i) {
                sum += num / i
            }
        }
    }

    return sum === num
}