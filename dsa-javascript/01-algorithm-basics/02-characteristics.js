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

let str = "Rajesh"
for(let i = 0; i < str.length;i++){
    if(str[i] === 'j'){
       console.log(str[i])
       console.log("indexof",i)
    }
}

let arr = [10,25,7,40,18];
let max = arr[0]
for(let i = 1; i < arr.length;i++){
    if(arr[i] > max){
        max = arr[i]
    }
}
console.log(max);



