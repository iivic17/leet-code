function moveZeroes(nums: number[]) {
    let freePos = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[freePos] = nums[i]

            if (i !== freePos) {
                nums[i] = 0;
            }
            
            freePos++
        }
    }
}