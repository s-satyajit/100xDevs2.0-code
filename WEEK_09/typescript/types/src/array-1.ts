// Given an array of positive integers as input, return the maximum value in the array

type NumsArray = number[];

const maxValue = (nums: NumsArray): number => {
    let maxNum: number = 0;
    for (let i: number = 0; i < nums.length; i++) {
        const currentNum: any = nums[i];
        if(currentNum !== undefined && currentNum > maxNum)
            maxNum = currentNum;
    }
    return maxNum;
}

const nums = [1, 345, 34, 23, 4, 35, 53];

const value: number = maxValue(nums);
console.log(value);
