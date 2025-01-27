// map, filter, arrow functions
// given an array, give me back a new array in which every value is multiplied by 2
// [1, 2, 3, 4, 5]
// [2, 4, 6, 8, 10]

const input = [1, 2, 3, 4, 5];

const newArray = [];

for(let i = 0; i < input.length; i++) {
    newArray.push(input[i] * 2)
}

console.log(newArray)

const transform = (i) => {
    return i * 2;
}

const ans = transform(2)
console.log(ans)

const ans2 = input.map((i) => (
    i * 2
))
console.log(ans2)

// filtering
// Given an array, give back all the even values from it

const arr = [1, 2, 3, 4, 5]

const newArr = []

for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0)
        newArr.push(arr[i])
}
console.log(newArr)

const filterArr = arr.filter((i) => (
    i % 2 == 0
))

console.log(filterArr)

const names = ["Satyajit", "Swati", "Lima", "Lipun"]

const filterNames = names.filter((n) => (
    n.startsWith("S")
))
console.log(filterNames)

// Assignment
// Create a map fn that takes an array and a transform fn as an input and returns the transformed array as an output




