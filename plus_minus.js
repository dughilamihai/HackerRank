
// https://www.hackerrank.com/challenges/three-month-preparation-kit-plus-minus/problem
//
// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
// Print the decimal value of each fraction on a new line with  places after the decimal.
//
// Note: This challenge introduces precision problems.
// The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

let arr = [1, 6, 9, -3, 0, -20]
function plusMinus(arr) {
    // Write your code here
    const arrLength = arr.length;

    let positiveNumbers = arr.filter(element => element > 0);
    const positiveNumbersCount = positiveNumbers.length / arrLength;

    let negativeNumbers = arr.filter(element => element < 0);
    const negativeNumbersCount = negativeNumbers.length / arrLength;

    const zeroNumbersCount = 1 - negativeNumbersCount - positiveNumbersCount;

    console.log(positiveNumbersCount.toFixed(6));
    console.log(negativeNumbersCount.toFixed(6));
    console.log(zeroNumbersCount.toFixed(6));
}
plusMinus(arr);