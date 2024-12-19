function fizzBuzz(n: number) {
    const fizzBuzz = []
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            fizzBuzz[i - 1] = 'FizzBuzz'
        } else if (i % 5 === 0) {
            fizzBuzz[i - 1] = 'Buzz'
        } else if (i % 3 === 0) {
            fizzBuzz[i - 1] = 'Fizz'
        } else {
            fizzBuzz[i - 1] = String(i)
        }
    }
    return fizzBuzz
}