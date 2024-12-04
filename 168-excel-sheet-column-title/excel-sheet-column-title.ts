  function convertToTitle(columnNumber: number) {
    let columnTitle = ''

    while (columnNumber > 0) {
      console.log(columnNumber)
      let res = columnNumber % 26
      if (res === 0) res = 26
      columnTitle = String.fromCharCode(65 + res - 1) + columnTitle
      columnNumber -= res
      columnNumber /= 26
    }

    return columnTitle
  }