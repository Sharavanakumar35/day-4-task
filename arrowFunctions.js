// This JS File contains all the Arrow Functions

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let stringArray = ['hello', 'world', 'level'];
// 2. a Print odd numbers in an array

const printOddNumbers = (arr) => {
    arr.forEach((num) => {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
};
printOddNumbers([1, 2, 3, 4, 5])

// 2. b Convert all the strings to title caps in a string array
const titleCaps = (arr) => {
    return arr.map((str) => {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
};

console.log(titleCaps(numbers));

// 2. c Sum of all numbers in an array
const sumArray = (arr) => {
    return arr.reduce((sum, num) => sum + num, 0);
};

console.log(sumArray(numbers));

// 2. d Return all the prime numbers in an array
const getPrimes = (arr) => {
    return arr.filter((num) => {
      for (let i = 2; i*i < num; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return num > 1;
    });
  };
  
console.log(getPrimes(numbers));
  
// 2. e Return all the palindromes in an array
  
const getPalindromes = (arr) => {
return arr.filter((str) => {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
});
};

  console.log(getPalindromes(stringArray));
  

  