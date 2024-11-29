  function isValid(s: string) {
    const nextClosed = []

    function isOpenBracket(c: string) {
      if (c === '{' || c === '[' || c === '(') return true
      return false
    }

    function isCloseBracket(c: string) {
      if (c === '}' || c === ']' || c === ')') return true
      return false
    }

    const bracketsMap: Record<string, string> = {
      ')': '(',
      ']': '[',
      '}': '{'
    }

    for (const c of s) {
      if (isOpenBracket(c)) {
        nextClosed.push(c)
        continue
      }
      if (isCloseBracket(c) && (bracketsMap[c] === nextClosed[nextClosed.length - 1])) nextClosed.pop()
      else return false
    }

    if (nextClosed.length == 0) return true
    else return false
  }