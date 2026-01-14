const identity = <T>(arg: T): T => {
    return arg;
}

const value = identity<string>("satyajit samal");
console.log(value);