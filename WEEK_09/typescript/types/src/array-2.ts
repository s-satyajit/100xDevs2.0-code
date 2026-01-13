// Given a list of users, filter out the users that are legal (greater than 18 years of age)

interface User {
    firstname: string;
    age: number;
}

type UserArray = User[];

const filteredUsers = (user: UserArray): UserArray => {
    return user.filter(x => x.age>=18);
}

const user: UserArray = [{
    firstname: "satyajit",
    age: 23
}, {
    firstname: "lipun",
    age: 3
}]

const value: UserArray = filteredUsers(user);
console.log(value);

