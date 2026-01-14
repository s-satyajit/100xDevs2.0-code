const getFirstElement = <mytype> (arg: mytype[]): mytype | undefined => {
    return arg[0];
}

const value = getFirstElement<string>(["satyajit", "samal"]);
console.log(value);
console.log(value?.toUpperCase());

const valueNum = getFirstElement<number>([1, 3, 4, 5, 6, 23]);
console.log(valueNum);