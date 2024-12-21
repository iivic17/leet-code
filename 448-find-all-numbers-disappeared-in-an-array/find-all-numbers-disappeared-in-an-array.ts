function findDisappearedNumbers(nums: number[]) {
    const unique = new Set(nums)
    return Array.from({length: nums.length}, (_, i) => i + 1).filter(num => !unique.has(num))
}
