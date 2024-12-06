function containsDuplicate(nums: number[]) {
    return new Set<number>(nums).size !== nums.length
}