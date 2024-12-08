  function majorityElement(nums: number[]) {
    if (nums.length === 1) return nums

    const map = new Map()

    for (const num of nums) {
      if (map.has(num)) {
        map.set(num, map.get(num) + 1)
      } else {
        map.set(num, 1)
      }
    }

    const { length } = nums
    const matches = []

    for (const [key, value] of map) {
      if (value > length / 3) {
        matches.push(key)
      }
    }
    
    return matches
  }