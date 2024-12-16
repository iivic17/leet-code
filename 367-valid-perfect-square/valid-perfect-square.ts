function isPerfectSquare(num: number): boolean {
  if (num < 2) return true

  let left = 2
  let right = Math.floor(num / 2)

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2)
    const square = mid * mid

    if (square === num) {
      return true
    } else if (square < num) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return false
}