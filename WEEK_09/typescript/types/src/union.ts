type StringOrNumber = string | number;

const StringNumArg = (id: StringOrNumber): string => {
    return `ID, ${id}`;
}

const value: string = StringNumArg("1");
console.log(value)