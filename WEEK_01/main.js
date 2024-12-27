let a = 1
a = 2;
console.log(a)

let firstnanme = "Satyajit"
let age = 23;
let isMarried =  false;

console.log(`this person's name is ${firstnanme} and their age is ${age}`)

if (isMarried) 
    console.log(`${firstnanme} is married`)
else
    console.log(`${firstnanme} is not married`)


// for(let answer = 0; answer <= 100; answer++) {
//     console.log(answer + "")
// }

// let answer = 0
// for(let i = 0; i <= 10; i++) {
//     answer = answer + i;
//     console.log(answer)
// }
// console.log(answer)

const ages = [21, 22, 23, 24, 25];

// for(let i = 0; i < ages.length; i++)  {
//     if(ages[i] % 2 == 0)
//         console.log(ages[i])
// }

const personArray = ["harkirat", "raman", "priya"]
const genderArray = ["male", "male", "female"]

// for(let i = 0; i < personArray.length; i++) {
//     if(genderArray[i] == "male")
//         console.log(personArray[i])
// }

// const user1 = {
//     firstName: "Harkirat",
//     gender: "Male"
// }

// console.log(user1["firstName"])

const allUsers = [{
    firstName: "Harkirat",
    gender: "Male", 
    metadata: {
        age: 21,
        address: ""
    }
}, {
    firstName: "Raman",
    gender: "Male",
    metadata: { 
        age: 22,
        address: ""
    }
}, {
    firstName: "Priya",
    gender: "Female",
    metadata: {
        age: 23,
        address: ""
    }
}]

// for(let i = 0; i < allUsers.length; i++) {
//     if(allUsers[i]["metadata"]["age"] >= 22)
//         console.log(allUsers[i]["firstName"])
// }

// function sum(a, b) {
//     const sumValue = a + b
//     return sumValue
// }

// const value = sum(1, 2)
// console.log(value)

// function sum(a, b)  {
//     return a + b
// }

// function displayResult(data) {
//     console.log(`Result of the sum is: ${data}`)
// }
// function displayResultPassive(data) {
//     console.log(`Sum's result is: ${data}`)
// }

// const ans = sum(1, 2)
// console.log(displayResult(ans))
// console.log(displayResultPassive(ans))

// const sum = (num1, num2, fnToCall) => {
//     let result = num1 + num2;
//     fnToCall(result)
// }

// const displayResult = (data) => {
//     console.log(`Result of the sum is: ${data}`)
// }

// const displayResultPassive = (data) => {
//     console.log(`Sum's result is: ${data}`)
// }

// let ans = sum(1, 2, displayResult)
// console.log(ans)

// const calculateArithmetic = (a, b, type) => {
//     if(type == "sum")
//         return sum(a, b)
//     if(type == "sub")
//         return sub(a, b)
// }

// const sum = (a, b) => {
//     return a + b
// }

// const sub = (a, b) => {
//     return a - b
// }

// console.log(calculateArithmetic(5, 2, "sub"))

// function calculateArithmetic(a, b, arithmeticFinalFunction)  {
//     const ans = arithmeticFinalFunction(a, b)
//     return ans
// }
// function sum(a, b) {
//     return a + b
// }
// const value = calculateArithmetic(1, 3, sum)
// console.log(value)

function greet() {
    console.log("Hello world!")
}
// setTimeout(greet, 1000)
// setInterval(greet, 2000)

const user = {
    name: "Satyajit",
    age: 23,
    address: {
        houseNumber: "11",
        street: 1
    }
}

// console.log(user["address"]["houseNumber"])
const address = user["address"]
// console.log(address["houseNumber"])

// for(let i = 30;  i >= 0; i--) {
//     console.log(i)
// }


console.log(Date.now())