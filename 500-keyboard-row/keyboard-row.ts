function findWords(words: string[]) {
    const rowPatterns = [
        /^[QWERTYUIOP]+$/i,
        /^[ASDFGHJKL]+$/i,
        /^[ZXCVBNM]+$/i,
    ];

    return words.filter(word => rowPatterns.some(pattern => pattern.test(word)))
}