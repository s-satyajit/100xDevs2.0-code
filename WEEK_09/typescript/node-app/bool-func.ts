const isLegal = (age: number): boolean => {
    if(age>=18) return true;
    else return false;
}

const age: number = 23;
const value: boolean = isLegal(age);
console.log(value);