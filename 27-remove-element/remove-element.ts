  function removeElement(nums: number[], val: number) {
    let added = 0

    for (let i = nums.length - 1; i >= 0 + added; i--) {
      if (nums[i] !== val) {
        nums.unshift(nums[i])
        i++
        added++
      }
    }
    return added
  };