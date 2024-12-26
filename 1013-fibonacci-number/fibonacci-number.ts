function fib(n: number) {
    if (n == 0) return 0
    if (n <= 2) return 1
    let lesser = 1, higher = 1

    for(let i = 0; i < n - 2; i++) {
        const temp = higher
        higher += lesser
        lesser = temp
    }

    return higher
}