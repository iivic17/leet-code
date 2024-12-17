function firstUniqChar(s: string) {
    const characterMap = new Map<string, number>()

    function incrementMapValue(key: string) {
        if (characterMap.has(key)) {
            characterMap.set(key, (characterMap.get(key) as number) + 1)
        } else {
            characterMap.set(key, 1)
        }
    }

    for (let i = 0; i < s.length; i++) {
        incrementMapValue(s[i])
    }

    for (const [key, value] of characterMap) {
        if (value === 1) return s.indexOf(key)
    }

    return -1
}