import fs from "fs";

// Ugly way of writing

const findSum = (n) => {
  let a = 0;
  for (let i = 0; i <= n; i++) {
    a += i;
  }
  return a;
};

const findSumTill100 = (x) => {
  return findSum(x);
};

console.log(findSumTill100(100));

// Cleaner way of writing

const fs = require("fs");

const satyajitsReadFile = () => {
  return new Promise((resolve) => {
    fs.readFile("a.txt", "utf-8", (err, data) => {
      resolve(data);
    });
  });
};

const onDone = (data) => {
  console.log(data);
};

satyajitsReadFile().then(onDone);
