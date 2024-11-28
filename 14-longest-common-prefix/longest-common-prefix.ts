  function longestCommonPrefix(strs: string[]) {
    const string = strs.join()
    const occ = new Map()
    let comma = false
    let j = 0

    for (let i = 0; i < string.length; i++) {
      if (string[i] === ',') {
        comma = true
        j = 0
        continue
      }
      if (!comma) {
        const key = `${i}-${string[i]}`
        occ.set(key, 1)
      } else {
          const key = `${j++}-${string[i]}`
          if (occ.has(key)) {
            occ.set(key, occ.get(key) + 1)
          }
        }
      }

    let commonLetters = 0

    for (const [,value] of occ) {
      if (value === strs.length) commonLetters++
      else break
    }

    return string.slice(0, commonLetters)
  };