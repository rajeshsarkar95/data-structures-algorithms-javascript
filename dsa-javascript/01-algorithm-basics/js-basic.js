// let name = "Rajesh";
// console.log(typeof name);
// let arr = [];
// console.log(arr instanceof Array);

// 13. What are truthy and falsy values?
// Truly value like behave like true in conditional statements,while falsy values behave like false in conditionnal statements. There are 6 falsy values in javascript:false,null,undefined 0,NaN,""(empty string).All other values are truthy values.

// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN

function reverseString(str){
    let result = "";
    for(let i = str.length - 1; i >= 0; i--){
        result += str[i];
    }
    return result;
}
console.log(reverseString("hello"));

// primitive data types in javascript
// string
// number
// bigint
// boolean
// undefined
// null
// symbol









