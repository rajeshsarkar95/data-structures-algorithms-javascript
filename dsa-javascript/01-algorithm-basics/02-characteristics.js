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

// let str = "Hello";
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
//     if math consition 
//     if(arr[i] > max){
//         swape the value
//         max = arr[i]
//     }
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
// let target = "j"
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

// let arr = [10,20,30,40,50,60]
// let count = 0;
// for(let i = 0; i < arr.length;i++){
//     if(arr[i] % 2 ===0){
//         count++;
//     }
// }
// console.log(count);

// let str = "Rajesh";
// let result = "";
// for(let i = str.length - 1;i >= 0;i--){
//     result = result + str[i]
// }
// console.log(result);


// DSA practice format
// For evry probples,tain yourself to identify

// Input 
// Process / logic 
// output

// input
// Logic
// Start max 
// compare 25 => max = 25
// compare 7 => max = 25
// compare 40 => max = 40
// output: 40

// let arr = [10,20,30,40,50,60]
// for(let i = 0; i < arr.length;i++){
//     console.log(arr[i])
// }

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// Input / Output
// in DSA you

// import { readFileSync } from "fs";
// const input = readFileSync(0,"utf-8").trim();
// let arr = input.split("").map(Number)
// console.log(arr)

// let arr = [10,20,30,40,50,60]
// let max = arr[0]
// for(let i = 1; i < arr.length;i++){
//     if(arr[i] > max){
//         max = arr[i]
//     }
// }
// console.log(max);

// Login 
// max = 10;
// 25 > 10 => max = 25
// 7 > 25 => max => No
// 40 > 25 => max = 50
// 15 > 40 => no
// Anwers is 40
// Time complexity

// find min in arr

// let arr = [10,20,30,40,50,60]
// let min = arr[0];
// for(let i = 1; i < arr.length;i++){
//     if(arr[i] < min){
//         min = arr[i]
//     }
// }
// console.log(min);

// Print all elemenrts
// Print elements at even index
// Find sum 
// Find avarage
// Find Maximums
// find minimum
// Count odd numbers 
// Reverage array
// Find 
// find ChraFrequency
// find second largest
// Removed duplicated 
// Rotate Array
// Build prefix sum
// Range sum using prefix sum 

// let arr = [10,20,30,40,50];
// for(let i = 0;i < arr.length;i++){
//     console.log(arr[i]);
// }

// 2. Print Elements at Even Index
// Remember: index starts from 0.

// let arr = [10,20,30,40,50,60,70,80];
// for(let i = 0; i < arr.length;i++){
//     if(i % 2 === 0){
//         console.log(arr[i])
//     }
// }
// Index: 0 1 2 3 4 5 6 7 8
// Array: 10 20 30 40 50 60

// Find sum 
// let arr = [10,20,30,40,50,60]
// let sum = 0;
// for(let i = 0; i < arr.length;i++){
//     sum = sum + arr[i]
// }
// console.log("Sum",sum)

// out Sum: 150;
// let arr = [10,20,30,40,50,60,70,80]
// let sum = 0;
// for(let i = 0; i < arr.length;i++){
//     sum = sum + arr[i]
// }
// let avrages = sum / arr.length;
// console.log("Avrage",avrages);

// avrages = 30
// avrages = Sum / Number of element 

// let arr = [10,20,30,40,50,60];
// let max = arr[0]
// for(let i = 0; i < arr.length;i++){
//     if(arr[i] > max){
//         max = arr[i]
//     }
// }
// console.log(max)

// find minimum
// let arr2 = [10,20,30,40,50,60,70,80];
// // let min = arr2[0]
// for(let i = 0; i < arr2.length;i++){
//     if(arr2[i] < min){
//         min = arr[0]
//     }
// }

// console.log(max);
// let oddnum = [1,2,3,4,5,6,7,8,9,10]
// let count = 0
// for(let i = 0; i < even.length;i++){
//     if(even[i] % 2 !== 0){
//         count++
//     }
// }
// console.log(count);

// let arr = [10,20,30,40,50,60,70,80]
// let left = 0;
// let rigth = arr.length - 1;
// while(left < rigth){
//     let temp = arr[left]
//     arr[left] = arr[left]
//     arr[rigth] = temp
//     left--
//     rigth++
// }
// console.log(arr);

let arr = [2,4,6,8,10,12,14,16];

let prefix  = []

prefix[0] = arr[0];

for(let i = 0; i < arr.length;i++){

   prefix[i] = prefix[i - 1] + arr[i]
   
}
console.log(prefix);

// prefix[0] = 2
// But your loop start from:






























































