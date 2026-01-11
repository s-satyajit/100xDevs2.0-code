interface User{
    firstname: string;
    lastname: string;
    email: string;
    age: number;
}

const user = {
    firstname: "satyajit",
    lastname: "samal",
    email: "satyajitsamal.workmail@gmail.com",
    age: 23
}

const isLegal = (user: User): boolean => {
    if(user.age>=18) return true;
    else return false;
}

const show = (user: User): string => {
    return user.firstname;
}

const value: boolean = isLegal(user)
const name: string = show(user)
console.log(value)
console.log(name)