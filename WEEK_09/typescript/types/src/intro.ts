type User = {
    firstname: string;
    lastname: string;
    age: number;
}

const isLegal = (user: User): boolean => {
    if(user.age>=18) return true;
    else return false;
}

const user = {
    firstname: "satyajit",
    lastname: "samal",
    age: 23
}

const value: boolean = isLegal(user);
console.log(value)