function findMaxConsecutiveOnes(nums: number[]) {
    let max = 0
    let currentMax = 0
    nums.forEach(num => {
        if (num == 1) {
            currentMax++
        } else if (currentMax > max) {
            max = currentMax
            currentMax = 0
        } else {
            currentMax = 0
        }
    })
    return Math.max(currentMax, max)
}