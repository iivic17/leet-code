function thirdMax(nums: number[]) {
    const uniqueNums = Array.from(new Set(nums))
    if (uniqueNums.length < 3) return Math.max(...uniqueNums)

    let [first, second, third] = [-Infinity, -Infinity, -Infinity]

    for (const num of uniqueNums) {
        if (num > first) {
            [first, second, third] = [num, first, second]
        } else if (num > second) {
            [second, third] = [num, second]
        } else if (num > third) {
            third = num
        }
    }

    return third
}