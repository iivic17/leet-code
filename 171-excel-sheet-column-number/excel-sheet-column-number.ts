  function titleToNumber(columnTitle: string) {
    if (columnTitle.length > 7 || columnTitle.length == 0)
      throw new Error("Bad input!")

    const colToValue: Record<string, number> = {
      A: 1,
      B: 2,
      C: 3,
      D: 4,
      E: 5,
      F: 6,
      G: 7,
      H: 8,
      I: 9,
      J: 10,
      K: 11,
      L: 12,
      M: 13,
      N: 14,
      O: 15,
      P: 16,
      Q: 17,
      R: 18,
      S: 19,
      T: 20,
      U: 21,
      V: 22,
      W: 23,
      X: 24,
      Y: 25,
      Z: 26,
    }

    switch (columnTitle.length) {
      case 1:
        return colToValue[columnTitle]
      case 2:
        return 26 * colToValue[columnTitle[0]] + colToValue[columnTitle[1]]
      case 3:
        return (
          Math.pow(26, 2) * colToValue[columnTitle[0]] +
          26 * colToValue[columnTitle[1]] +
          colToValue[columnTitle[2]]
        )
      case 4:
        return (
          Math.pow(26, 3) * colToValue[columnTitle[0]] +
          Math.pow(26, 2) * colToValue[columnTitle[1]] +
          26 * colToValue[columnTitle[2]] +
          colToValue[columnTitle[3]]
        )
      case 5:
        return (
          Math.pow(26, 4) * colToValue[columnTitle[0]] +
          Math.pow(26, 3) * colToValue[columnTitle[1]] +
          Math.pow(26, 2) * colToValue[columnTitle[2]] +
          26 * colToValue[columnTitle[3]] +
          colToValue[columnTitle[4]]
        )
      case 6:
        return (
          Math.pow(26, 5) * colToValue[columnTitle[0]] +
          Math.pow(26, 4) * colToValue[columnTitle[1]] +
          Math.pow(26, 3) * colToValue[columnTitle[2]] +
          Math.pow(26, 2) * colToValue[columnTitle[3]] +
          26 * colToValue[columnTitle[4]] +
          colToValue[columnTitle[5]]
        )
      case 7:
        return (
          Math.pow(26, 6) * colToValue[columnTitle[0]] +
          Math.pow(26, 5) * colToValue[columnTitle[1]] +
          Math.pow(26, 4) * colToValue[columnTitle[2]] +
          Math.pow(26, 3) * colToValue[columnTitle[3]] +
          Math.pow(26, 2) * colToValue[columnTitle[4]] +
          26 * colToValue[columnTitle[5]] +
          colToValue[columnTitle[6]]
        )
    }
  }