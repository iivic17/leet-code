function missingNumber(nums: number[]) {
    let lengthFactorial = 1

    for (let i = 2; i <= nums.length; i++) {
        lengthFactorial += i
    }

    let perpetrator = 0
    let hasZero = false

    for (const num of nums) {
        if (num !== 0) {
            perpetrator += num
        } else {
            hasZero = true
        }
    }

    if (!hasZero) return 0
    return lengthFactorial - perpetrator
}