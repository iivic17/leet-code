  function convertToTitle(columnNumber: number) {
    const colToValue: Record<number, string> = {
      0: "Z",
      1: "A",
      2: "B",
      3: "C",
      4: "D",
      5: "E",
      6: "F",
      7: "G",
      8: "H",
      9: "I",
      10: "J",
      11: "K",
      12: "L",
      13: "M",
      14: "N",
      15: "O",
      16: "P",
      17: "Q",
      18: "R",
      19: "S",
      20: "T",
      21: "U",
      22: "V",
      23: "W",
      24: "X",
      25: "Y",
      26: "Z"
    }
    
    let columnTitle = ''
    let res

    while (columnNumber > 0) {
      console.log(columnNumber)
      res = columnNumber % 26
      columnTitle = colToValue[res].toString() + columnTitle
      if (res === 0) res = 26
      columnNumber -= res
      columnNumber /= 26
    }

    return columnTitle
  }