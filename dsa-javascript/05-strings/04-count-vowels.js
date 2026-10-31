// 04 Count Vowels
// TODO: Add explanation, solution, time complexity, and space complexity.

// let vowels = "AEIOU";
// // let result = [];
// for (let i = 65; i <= 90; i++){
//     let char = String.fromCharCode(i);
//     if (vowels.includes(char)){
//         result.push(char);
//     }
// }

// let reduces = result.reduce((a,b)=>{
//     return a + b;
// },"");

// let arr = ["A", "E", "I", "O", "U"];
// let result = arr.reduce((a,b)=>{
//     return a + b;
// },"");

// console.log(result);

// for(let i = 65; i <= 90;i++){
//     let char = String.fromCharCode(i);
//     let filter = char.includes((vowels)=>{
//         if(vowels === "A" || "E" || "I" || "U"){
//             console.log(filter);
//         }
//     });
// }

// let str = "JavaScript";
// let vowels = "aeiouAEIOU";
// let count = 0;
// for(let i = 0; i < str.length;i++){
//     if(vowels.includes(str[i])){
//         count++;
//     }
// }
// console.log(count);

let str = "javascript";
let vowels = "aeiouAEIOU";
let count = 0;
for(let char of str){
    if(vowels.includes(char)){
        count++
    }
}
console.log(count);






