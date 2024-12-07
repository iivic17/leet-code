  function containsNearbyDuplicate(nums: number[], k: number) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      
      if (map.has(num)) {
        const prevIndex = map.get(num)
        if (Math.abs(i - prevIndex) <= k) return true
      }
      
      map.set(num, i)
    }

    return false
  }