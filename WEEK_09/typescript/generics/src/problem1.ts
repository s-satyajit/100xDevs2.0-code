// function that needs to return the first element of an array. Array can be of type either string or integer

const firstEl = <T>(arg: T[]): T | undefined => {
    return arg[0];
}

const value = firstEl(["satyajit", "samal"]);
console.log(value);
console.log(value?.toUpperCase());

const valueNum = firstEl([1, 2, 4, 5]);
console.log(valueNum);