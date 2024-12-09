  function maxArea(height: number[]) {
    const { length } = height
    if (length < 2) return 0
  
    let left = 0
    let right = length - 1
    let maxArea = 0
  
    while (left < right) {
      const width = right - left
      const currentHeight = Math.min(height[left], height[right])
      const currentArea = width * currentHeight
  
      maxArea = Math.max(maxArea, currentArea)
  
      if (height[left] < height[right]) {
        left++
      } else {
        right--
      }
    }
  
    return maxArea
  }