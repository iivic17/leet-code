function isSubsequence(s: string, t: string) {
    if (s.length > t.length) return false
    if (s.length === t.length) return s === t
    if (t.length === 1) return s[0] === t[0]

    let j = 0
    for (let i = 0; i < t.length; i++) {
        if (t[i] === s[j]) j++
    }

    if (j >= s.length) return true
    return false
};