  function addStrings(num1: string, num2: string) {
    let carry = false
    let sum = ''
    let digit1: number, digit2: number

    for (let j = 0; j < Math.max(num1.length, num2.length); j++) {
        if (num1.length - j - 1 >= 0) {
            digit1 = +num1[num1.length - j - 1]
        } else {
            digit1 = 0
        }

        if (num2.length - j - 1>= 0) {
            digit2 = +num2[num2.length - j - 1]
        } else {
            digit2 = 0
        }

        let currentSum = digit1 + digit2

        if (carry) {
            currentSum++
            carry = false
        }
        
        if (currentSum >= 10) {
            currentSum %= 10
            carry = true
        }

        sum = currentSum + sum
    }

    if (carry) return 1 + sum
    return sum
}