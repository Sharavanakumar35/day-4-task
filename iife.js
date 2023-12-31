// This JS File contains all the IIFE functions

// 1.a Print Odd numbers in an array?
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

(function(arr) {
    arr.forEach(function(num) {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
})(numbers);

// 1. b Convert all the strings to title caps in a string array
let stringArray = ['hello', 'world'];
const titleCapsArray = (function(arr) {
    return arr.map(function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
})(stringArray);

console.log(titleCapsArray);


// 1. c Sum of all numbers in an array

const arraySum = (function(arr) {
    return arr.reduce((sum, num) => sum + num, 0)
})(numbers);
console.log(arraySum);

// 1.d Return all the prime numbers in an array
const primeNumbers = (function(arr) {
    return arr.filter(function(num) {
      for (let i = 2; i*i < num; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return num > 1;
    });
  })(numbers);
console.log(primeNumbers);

// 1. e Return all the palindromes in an array
const palindromeArray = (function(arr) {
    return arr.filter(function(str) {
      const reversed = str.split('').reverse().join('');
      return str === reversed;
    });
})(stringArray);
  console.log(palindromeArray);

// 1. f Return median of two sorted arrays of the same size.
let oneToFive = [2, 5, 3, 1, 4];
let FiveToTen = [9, 8, 10, 7, 6];
const medianValue = (function(arr1, arr2) {
    const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
    const length = mergedArray.length;
    const mid = Math.floor(length / 2);
    
    return length%2===0 ? (mergedArray[mid-1] + mergedArray[mid])/2: mergedArray[mid];
})(oneToFive, FiveToTen);
console.log(medianValue);

// 1. g Remove duplicates from an array
let duplicateArray = [1,2,2,4,5,5];

const removeDuplicates = (function(arr) {
  let uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (uniqueArray.indexOf(arr[i]) === -1) {
      uniqueArray.push(arr[i]);
    }
  }

  return uniqueArray;
})(duplicateArray);

console.log(removeDuplicates);

// 1. h Rotate an array by k times

const rotateByKTimes = (function(arr, k) {
    let k = k % arr.length;
    return arr.slice(0, k).concat(arr.slice(k));
})(numbers);
  
console.log(rotateByKTimes);