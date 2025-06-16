let x:number = 101
x = 202
console.log(x)

const greet = (firstName: string) => {
    console.log(`Hello ${firstName}`)
}

greet("Harkirat")

const sum = (a:number, b:string):string => {
    return a + b
}

console.log(sum(1, "2"))

const isLegal = (age: number):boolean => {
    if (age >= 18) return true
    return false
}

console.log(isLegal(18))

const delayedCall = (fn: () => void) => {
    setTimeout(fn, 2000)
}

delayedCall(() => {
    console.log(`2 seconds delayed call`)
})