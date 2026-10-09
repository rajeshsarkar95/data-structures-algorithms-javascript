// 1. What is a character?
// what is  A character?
// A Character is one induviual element such as

// 'a'
// 'b'
// 'Z'
// '1'
// '@'
// '#'
// let arr = "Rajesh sarkar"
// console.log(arr[0]) // r
// console.log(arr[2]); //j

// character in Dsa
// Character are very impotent in string problems for examples 
// Count frequency of characters;

// let str = "hello";
// let freq = {};
// for (let char of str){
//     freq[char] = (freq[char] || 0) + 1;
// }
// console.log(freq);

// // let str = "Hello";
// let freq = {};
// for(let char of str){
//     freq[char] = (freq[char] || 0) + 1;
// }

// step 1
// let str = "hello word"

// let str = "Rajesh"
// for(let i = 0; i < str.length;i++){
//     if(str[i] === 'j'){
//        console.log(str[i])
//        console.log("indexof",i)
//     }
// }

// creting value
// let arr = [10,25,7,40,18];
// creting max value for find index value 10
// let max = arr[0]
// useing for
// for(let i = 1; i < arr.length;i++){
    // if math consition 
    // if(arr[i] > max){
        // swape the value
        // max = arr[i]
    // }
// }
// console.log(max);

// fist creating arr

// let arr2 = [10,20,30,40,50]
// let min = arr[0];
// for(let i = 1;i < arr.length;i++){
//     if(arr[i] > min){
//         min = arr[i]
//     }
// }

// let str1 = "Rajesh"
// // let target = "j"
// for(let i = 0; i < target.length;i++){
//     if(str[i] === target){
//         console.log("Character",str[i])
//         console.log("Index of",i)
//     }
// }

// linner Serach
// Array:[10,20,30,40,50]
// Target:30

// let arr1 = [10,20,30,40,50,60];
// let target = 30;
// for(let i = 0; i < arr.length;i++){
//     if(arr[i] === target){
//         console.log("Found at index",i);
//         break;
//     }
// }

// first create arr 
// second put target /
// third put for useing for loops 
// inner for loop use if conditions 
// if math arr[i] === target valaue 
// if math than printout
// console.log("") found at index
// last adding break

// Find Average of Array
// [10,20,30,40,50]
// Avrage:30
// creating arr for useing first 


// let arr = [10,20,30,40,50]
// let sum = 0;
// for(let i = 0; i < arr.length;i++){
//     sum = sum + arr[i];
//     console.log("total sum",sum)
// }

// 150 / 5  = 30



// let avrage = sum / arr.length;
// console.log("Avrage",avrage);

// let str =  "Rajesh";
// let result = ""
// for(let i = str.length - 1; i >= 0; i--){
//     result = result + str[i];
// }

let arr = [10,20,30,40,50,60]
let count = 0;
for(let i = 0; i < arr.length;i++){
    if(arr[i] % 2 ===0){
        count++;
    }
}
console.log(count);












