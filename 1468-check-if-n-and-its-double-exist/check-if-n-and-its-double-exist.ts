  function checkIfExist(arr: number[]) {
    const indicates = new Map()

    for (const num of arr) {
      if (indicates.has(num)) {
        indicates.set(num, indicates.get(num) + 1)
      } else {
        indicates.set(num, 1)
      }
    }
    for (const num of arr) {
      if ((num === 0 || num === 1 || num === -1) && indicates.get(num) >= 2) return true 
      if (num < -1 && indicates.has(-Math.abs(num * 2))) return true
      if (num > 1 && indicates.has(num * 2)) return true
    }
    return false
  }