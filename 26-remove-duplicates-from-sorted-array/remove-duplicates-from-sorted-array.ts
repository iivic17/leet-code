  function removeDuplicates(nums: number[]) {

    let writeOnIndex = 0
    let currentNumber = -101

    for (let i = 0; i < nums.length; i++) {

      if (nums[i] !== currentNumber) {
        currentNumber = nums[i]
        nums[writeOnIndex] = currentNumber
        writeOnIndex++
      }

    }
    return writeOnIndex
    
  };