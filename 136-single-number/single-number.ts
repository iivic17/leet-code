  function singleNumber(nums: number[]) {
    if (nums.length === 1) return nums[0]
    const occ = new Map()
    for (const num of nums) {
      if (occ.has(num)) {
        occ.set(num, occ.get(num) + 1)
      } else {
        occ.set(num, 1)
      }
    }
    for (const [key, value] of occ.entries()) {
      if (value === 1)
        return key
    }
    return 0
  }