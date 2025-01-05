//https://www.hackerrank.com/challenges/three-month-preparation-kit-mini-max-sum/problem
// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example [1, 3, 5, 7, 9]
// Minimum sum = 1 + 3 + 5 + 7 = 16
// Maximum sum = 3 + 5 + 7 + 9 = 24

// Print a single line of two space-separated long integers.

let arr = [1, 5, 3, 7, 9]
function miniMaxSum(arr) {
    const ascendingArr = arr.sort((a, b) => a - b);
    const min = ascendingArr.slice(0, -1).reduce((acc, el) => acc + el, 0);
    const max = ascendingArr.slice(1).reduce((acc, el) => acc + el, 0);
    console.log(min, max);
}

miniMaxSum(arr);