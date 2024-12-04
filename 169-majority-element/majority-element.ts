  function majorityElement(nums: number[]) {
    nums.sort((a, b) => a - b)
    let highest = 0, streak = 0, major

    console.log(nums)

    nums.forEach((num, i) => {
      if (i === 0) return streak++
      const prev = nums[i - 1]
      if (num === prev) streak++
      else if (streak > highest) {
        highest = streak
        major = prev
        streak = 1
      }
      else streak = 1
    })

    if (streak > highest) {
      major = nums[nums.length - 1]
    }

    return major
  }