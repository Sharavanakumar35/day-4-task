// This JS File contains all the Anonymous functions

// 1.a Print Odd numbers in an array?
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let printOddNumbers = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
};
console.log("1. a) Print Odd numbers in an array?");
printOddNumbers(numbers);

// 1. b Convert all the strings to title caps in a string array
let stringArray = ['hello', 'world', 'madam'];

let convertToTitleCaps = function(arr) {
  return arr.map(function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  });
}

let titleCapsArray = convertToTitleCaps(stringArray);
console.log("1. b) Convert all the strings to title caps in a string array");
console.log(titleCapsArray);

// 1. c Sum of all numbers in an array

let sumOfAllNumbers = function (arr) {
  return arr.reduce((sum, num) => sum+num, 0);
}

let totalSum = sumOfAllNumbers(numbers);
console.log("1. c) Sum of all numbers in an array");
console.log(totalSum);

// 1.d Return all the prime numbers in an array

let isPrime = function(num) {
  for (let i=2; i*i<num; i++) {
    if (num%i === 0) {
      return false;
    }
  }
  return num > 1;
}

let printAllPrimeNumbers = numbers.filter(g => isPrime(g));
console.log("1. d) Return all the prime numbers in an array");
console.log(printAllPrimeNumbers);

// 1. e Return all the palindromes in an array

let isPalindrome = function(word) {
  return word === word.split('').reverse().join('');
}

let printAllPalindromes = stringArray.filter(g => isPalindrome(g));
console.log("1. e) Return all the palindromes in an array");
console.log(printAllPalindromes);

// 1. f Return median of two sorted arrays of the same size.

let oneToFive = [2, 5, 3, 1, 4];
let FiveToTen = [9, 8, 10, 7, 6];

const medianOfTwoArrays = function(arr1, arr2) {
  const mergedArray = [...arr1, ...arr2].sort((a,b) => a-b);
  const length = mergedArray.length;
  const mid = Math.floor(length/2);

  return length%2===0 ? (mergedArray[mid-1] + mergedArray[mid])/2: mergedArray[mid];
}

console.log("1. f) Return median of two sorted arrays of the same size.");
console.log(medianOfTwoArrays(oneToFive, FiveToTen));

// 1. g Remove duplicates from an array

let duplicateArray = [1,2,2,4,5,5];

let removeDuplicates = function(arr) {
  let uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (uniqueArray.indexOf(arr[i]) === -1) {
      uniqueArray.push(arr[i]);
    }
  }

  return uniqueArray;
}
console.log("1. g) Remove duplicates from an array");
console.log(removeDuplicates(duplicateArray));

// 1. h Rotate an array by k times

let rotateByKTimes = function(arr, k) {
  k = k % arr.length;
  return arr.slice(k).concat(arr.slice(0, k));
}
console.log("1. h) Rotate an array by k times");
console.log(rotateByKTimes(numbers, 4));