function arrayPairSum(nums: number[]): number {
    nums.sort((a, b) => a - b)
    let sum = 0

    for (let i = 1; i < nums.length; i += 2) {
        const curr = nums[i]
        const prev = nums [i - 1]
        sum += Math.min(curr,prev)
    }

    return sum
} 

