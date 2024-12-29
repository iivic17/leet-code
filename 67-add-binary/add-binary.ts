function addBinary(a: string, b: string) {
    let result: string[] = []
    let carry = 0
    let i = a.length - 1
    let j = b.length - 1

    while (i >= 0 || j >= 0 || carry) {
        let sum = carry

        if (i >= 0) {
            sum += a.charCodeAt(i) - 48
            i--
        }

        if (j >= 0) {
            sum += b.charCodeAt(j) - 48
            j--
        }

        carry = Math.floor(sum / 2)
        let currentBit = (sum % 2).toString()
        result.push(currentBit)
    }

    return result.reverse().join('')
}