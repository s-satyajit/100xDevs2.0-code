interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

class Employee implements Person {
    name: string;
    age: number;

    constructor(a: string, b: number) {
        this.name = a;
        this.age =  b;
    }

    greet = (phrase: string): string => {
        return `Hello ${phrase}, your firstname is ${this.name}, and your age is ${this.age}`;
    }
}

const e = new Employee("satyajit", 23);
console.log(e.name, e.age);
const message = e.greet("You are a Research Scientist");
console.log(message);