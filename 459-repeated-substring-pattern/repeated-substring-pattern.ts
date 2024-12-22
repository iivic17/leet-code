function repeatedSubstringPattern(s: string) {
    const { length } = s

    for (let subLength = 1; subLength <= Math.floor(length / 2); subLength++) {
        if (length % subLength === 0) {
            const pattern = s.substring(0, subLength)
            const repeated = pattern.repeat(length / subLength)

            if (repeated === s) return true
        }
    }

    return false
}