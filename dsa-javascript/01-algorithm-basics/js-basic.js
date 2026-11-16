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

// function reverseString(str){
//     let result = "";
//     for(let i = str.length - 1; i >= 0; i--){
//         result += str[i];
//     }
//     return result;
// }
// console.log(reverseString("hello"));

const myMap = new Map();
myMap.set("name","Rajesh");
myMap.set("age",21);
myMap.set("role","full stack developer");
console.log(myMap);

// import Map method 
// Method                Purpose
// set(key,value)        Add and updates entry
// get(key)              Return the value of key
// has(key)              Checks whether a key exists
// delete(key)           Removed a specific key
// clear()               Removees all entries
// size                  Return the total number of entries
// keys()                Return the numbers of entries
// values()              Return all keys
// entries()             Returns key-value pairs
// forEach()             Iterates over Map entries

// get() – Access data
const map = new Map();
map.set("name","Rajesh");
map.set("age",21);
console.log(map.get("name"));   // Rajesh Sarkar
console.log(map.get("age"));    // 21

// has() check weather key exiest or not 
const map1 = new Map()
map.set("name","Rajesh");
console.log(map.has("name"));   // 
console.log(map.has("age"));

const map3 = new Map();
map3.set("name","abhisek");
map3.set("age",19);

const map4 = new Map();
map4.set("name","Rajesh sarkar");
map4.set("age",21);
map4.set("developer",true);
map4.set("city","mohali")
console.log(map4.size);

































