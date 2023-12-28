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

printOddNumbers(numbers);

// 1. b Convert all the strings to title caps in a string array
let stringArray = ['hello', 'world'];

let convertToTitleCaps = function(arr) {
  return arr.map(function(str){
    return str.replace('/\b\w/g', function(char){
      return char.toUpperCase();
    })
  });
}

let titleCapsArray = convertToTitleCaps(stringArray);
console.log(titleCapsArray);

