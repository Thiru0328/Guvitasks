//THIRUGNANAM K
//DAY3 SESSION TASK
//1)Print odd numbers in an array
let res=[1,2,3,4,5,6];
//Anonymous Func
(function(){
   for(i=0; i<res.length; i++){
                        if(res[i]%2 !==0){
                           console.log(res[i])
                        } 
                   }
                  })();
//IIFE -Immediately invoked function expression
(function(){
   for(i=0; i<res.length; i++){
                        if(res[i]%2 !==0){
                           console.log(res[i])
                        } 
                   }
                  })();
//Arrow func-
myFunc= () => {
   for(i=0; i<res.length; i++){
                        if(res[i]%2 !==0){
                           return(res[i])
                        } 
                   }
                  }
                  let arrw1= myFunc();
                console.log(arrw1);

//2)Convert all the strings to title caps in a string array
//Anonymous func-
//let str = ["Hi guvi"];
/*(function() {
    str = str.split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
  )("Hi guvi");   
//IIFE
                  (function(str) {
                    str = str.toLowerCase().split(' ');
                    for (var i = 0; i < str.length; i++) {
                      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
                    }
                    return str.join(' ');
                  }
                  )("Hi guvi");               

//3)Sum of all numbers in an array 
//anonymous func-              
let values = [2, 4, 5, 6 ,7 ,8];
//anonymous func- 
let result2=(function(){
    var sum = 0;
    for(var i = 0 ; i< values.length ; i++){
       sum = sum + values[i];
     }
     return sum;
  })

  console.log(result2);

  
//IIFE
let result3=(function(){
    var sum = 0;
    for(var i = 0 ; i< values.length ; i++){
       sum = sum + values[i];
     }
     return sum;
  })();
  console.log(result3);

//Arrow func

//let values = [2, 4, 5, 6 ,7 ,8];
let res1=() => {
    var sum = 0;
    for(var i = 0 ; i< values.length ; i++){
       sum = sum + values[i];
     }
     return sum;
  }
let sr1= res1();
  console.log(sr1);
/*
 //4)Return all the prime numbers in an array
 var numbers = [1,2,3,4,5,6,7,8,9,10];
 //Anonymous Function
 (function(){
    const filteredValues = numbers.filter((num) => {
        // prime number logic
        // num -> 1;  -> 1%2, 1%3, 1%4
        // num -> 2; -> 2%2
        // num -> 3; -> 3%2 
        // num -> 4; -> 4%2
        // num -> 5; -> 5%2
        
        for(let i = 2; i < num; i++){
            if(num % i === 0){ // 10%2 = 0
                return false;
            }
        }
        return num > 1;

    });

    console.log(filteredValues);
})();

var numbers = [1,2,3,4,5,6,7,8,9,10];
//IIFE
(function(){
    const filteredValues = numbers.filter((num) => {
        // prime number logic
        // num -> 1;  -> 1%2, 1%3, 1%4
        // num -> 2; -> 2%2
        // num -> 3; -> 3%2 
        // num -> 4; -> 4%2
        // num -> 5; -> 5%2
        
        for(let i = 2; i < num; i++){
            if(num % i === 0){ // 10%2 = 0
                return false;
            }
        }
        return num > 1;

    });

    console.log(filteredValues);
})();

// Arrow func-

(function(){
    const filteredValues = numbers.filter((num) => {
        // prime number logic
        // num -> 1;  -> 1%2, 1%3, 1%4
        // num -> 2; -> 2%2
        // num -> 3; -> 3%2 
        // num -> 4; -> 4%2
        // num -> 5; -> 5%2
        
        for(let i = 2; i < num; i++){
            if(num % i === 0){ // 10%2 = 0
                return false;
            }
        }
        return num > 1;

    });

    console.log(filteredValues);
})();

//5)  Return all the palindromes in an array

//Anonymous func-
function checkPalindrome() {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// take input
const string = ['madam'];

// call the function
const value = checkPalindrome();
console.log(value);

//IIFE
function checkPalindrome() {

    // find the length of a string
    const len = string1.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string1[i] !== string1[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// take input
const string1= ['madam'];

// call the function
const value1 = checkPalindrome();

console.log(value);

//Arrow func-
function checkPalindrome() {

    // find the length of a string
    const len = strings.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (strings[i] !== strings[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// take input
const strings = ['wow'];

// call the function
const value2 = checkPalindrome();

console.log(value);


//6))Return median of two sorted arrays of same size
//Arrow func and IIFE
const median = (a1, a2) => {
    let x = a1.concat(a2);
    x.sort(function (a,b) {
      return a - b;
    });
    let len = x.length;
    
    return len%2 === 0 ? (x[Math.floor(len/2)-1] + x[Math.ceil(len/2)])/2 : x[Math.floor(len/2)];
  
  }
  
  let a = [0,2,3,5,9];
  let b = [1,4];
  console.log(median(a,b));


//7)Remove duplicates from an Array
  var sampleArr = [10, 12, 10, 13, 11, 13, 17]
//anonymous func
 var result6 = sampleArr.filter((value, currentIndex) => {
    if(sampleArr.indexOf(value) === currentIndex){
        return value;
    }
});
console.log(result6);
//IIFE
var result6 = sampleArr.filter((value, currentIndex) => {
    if(sampleArr.indexOf(value) === currentIndex){
        return value;
    }
});
console.log(result6);

//8)Rotate an array by K times
//anonymous func
let arr= [1,2,3,4,6,7];
  let numberOfShifts=2;
var rotate = (function (arr, numberOfShifts) {
    let tmp = 0;
    const leng = arr.length;
    numberOfShifts = numberOfShifts % leng;
    for (let i = 0; i < numberOfShifts; i++) {
       tmp = arr.pop();
       arr.unshift(tmp);
    }
   return arr;
  });

//IIFE
  var rotate = (function (arr, numberOfShifts) {
    let tmp = 0;
    const leng = arr.length;
    numberOfShifts = numberOfShifts % leng;
    for (let i = 0; i < numberOfShifts; i++) {
       tmp = arr.pop();
       arr.unshift(tmp);
    }
   return arr;
  });
  */