interface User {
    name: string;
}

const getFirstEl = <T> (arg: T[]): T | undefined => {
    return arg[0];
}
const userObj = [{name: "satyajit"}, {name: "samal"}];
const userObjNum = [{name: 1}, {name: 2}];

const value = getFirstEl<User>(userObj);
console.log(value);