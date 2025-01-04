const square = (n) => {
    return n * n;
}

const cube = (n) => {
    return n * n * n;
}

const sumOfSquare = (a, b) => {
    const val1 = square(a)
    const val2 = square(b)
    return val1 + val2
}

const sumOfCube = (a, b) => {
    const val1 = cube(a)
    const val2 = cube(b)
    return val1 + val2
}

console.log(sumOfSquare(1, 2))
console.log(sumOfCube(1, 2))