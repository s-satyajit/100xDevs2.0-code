const user = {
  firstname: "Satyajit",
  lastname: "Samal",
  email: "satyajit@gmail.com",
  age: 23,
};

interface User {
  firstname: string;
  lastname: string;
  email: string;
  age: number;
}

const isLegal2 = (anything: User): boolean => {
  if (anything.age >= 18) return true;
  return false;
};

console.log(isLegal2(user));
