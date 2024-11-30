  function merge(nums1: number[], m: number, nums2: number[], n: number) {
    if (n === 0) return
    if (m === 0) return nums1.splice(0, n, ...nums2)
  
    let i = m - 1
    let j = n - 1
    let pos = nums1.length - 1
  
    while (j >= 0) {
      if (i >= 0 && nums1[i] > nums2[j]) {
        nums1[pos--] = nums1[i--]
      } else {
        nums1[pos--] = nums2[j--]
      }
    }
  }
