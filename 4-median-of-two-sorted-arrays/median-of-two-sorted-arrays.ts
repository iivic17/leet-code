function findMedianSortedArrays(nums1: number[], nums2: number[]) {
  const mergedLength = nums1.length + nums2.length
  const isEven = mergedLength % 2 === 0
  const medianIndex = Math.floor(mergedLength / 2)

  let i = 0
  let j = 0
  let current = 0
  let previous = 0

  for (let k = 0; k <= medianIndex; k++) {
    previous = current

    if (i < nums1.length && (j >= nums2.length || nums1[i] <= nums2[j])) current = nums1[i++]
    else current = nums2[j++]
  }

  return isEven ? (current + previous) / 2 : current
}