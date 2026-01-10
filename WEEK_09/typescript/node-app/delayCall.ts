const greet = (firstname: string): string => {
    return `Hello, ${firstname}`;
}

const delayCall = (fn: () => void) => {
    setTimeout(fn, 1000);
}

const firstname: string = "satyajit";
const value = greet(firstname);

delayCall(() => {
    console.log(value);
})