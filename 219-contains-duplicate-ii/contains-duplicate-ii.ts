  function containsNearbyDuplicate(nums: number[], k: number) {
    const map = new Map()

    for (let index = 0; index < nums.length; index++) {
      const num = nums[index]
      
      if (map.has(num)) {
        const prevIndex = map.get(num)
        if (Math.abs(index - prevIndex) <= k) return true
      }

      map.set(num, index)
    }

    return false
  }