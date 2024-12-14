function missingNumber(nums: number[]) {
    let lengthFactorial = 1n

    for (let i = 2; i <= nums.length; i++) {
        lengthFactorial *= BigInt(i)
    }

    let perpetrator = 1n
    let hasZero = false

    for (const num of nums) {
        if (num !== 0) {
            perpetrator *= BigInt(num)
        } else {
            hasZero = true
        }
    }

    if (!hasZero) return 0

    const result = lengthFactorial / perpetrator

    if (result <= Number.MAX_SAFE_INTEGER) {
        return Number(result)
    } else {
        throw new Error("Result exceeds safe integer range.")
    }
}