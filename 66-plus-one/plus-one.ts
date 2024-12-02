  function plusOne(digits: number[]) {
    let pointer = digits.length - 1

    do {
      if (digits[pointer] === 9) {
        digits[pointer] = 0

        if (digits[pointer - 1] && digits[pointer - 1] !== 9) {
          digits[pointer - 1]++
          break
        }

        if (pointer === 0) {
          digits.unshift(1)
        } 

        pointer--
      } else {
        digits[pointer]++
        break
      }
    } while (digits[pointer] === 9)

    return digits
  }