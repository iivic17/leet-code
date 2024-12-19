function thirdMax(nums: number[]) {
    if (nums.length === 1) return nums[0]
    if (nums.length === 2) return nums[0] > nums[1] ? nums[0] : nums[1]

    let first = -Infinity, second = -Infinity, third = -Infinity

    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i]
        const min = Math.min(first, second, third)

        if (curr > first && first === min && second !== curr && third !== curr) first = curr
        else if (curr > second && second === min  && first !== curr && third !== curr) second = curr
        else if (curr > third && third === min  && second !== curr && first !== curr) third = curr
    }

    if (first === -Infinity || second === -Infinity || third === -Infinity) return Math.max(first, second, third)
    if (first !== second && first !== third && second !== third) return Math.min(first, second, third)
    return Math.max(first, second, third)
}