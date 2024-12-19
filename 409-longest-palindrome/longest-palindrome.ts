function longestPalindrome(s: string) {
    if (s.length === 1) return 1

    const freq = new Map<string, number>()

    const incrementFreq = (key: string) => {
        if (freq.has(key)) {
            freq.set(key, (freq.get(key) as number) + 1)
        } else {
            freq.set(key, 1)
        }
    }
    
    for (const letter of s) {
        incrementFreq(letter)
    }

    let longest = 0

    for (const [, value] of freq) {
        if (value % 2 === 0) longest += value
        else longest += value - 1
    }

    if (s.length > longest) longest++
    
    return longest
}