function isPerfectSquare(num: number) {
  if (num === 1) return true

  let upperlimit = Math.floor(num / 2)
  let lowerlimit = 2

  while (lowerlimit <= upperlimit) {
    const lowerTarget = lowerlimit * lowerlimit
    const upperTarget = upperlimit * upperlimit

    if (lowerTarget === num || upperTarget === num) return true

    upperlimit--
    lowerlimit++
  }

  return false
}