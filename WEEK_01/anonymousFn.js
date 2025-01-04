const sumOfSomething = (a, b, fn) => {
    const val1 = fn(a)
    const val2 = fn(b)
    return val1 + val2
}

console.log(sumOfSomething(1, 2, (n) => {
    return n * n;
}))