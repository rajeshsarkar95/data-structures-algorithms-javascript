// 09 Longest Word
// TODO: Add explanation, solution, time complexity, and space complexity.
let arr = ["rajesh","anil","yash","suresh","kumar"];
let long = 0;
for(let i = 0; i < arr.length; i++){
       let currentLength = arr[i].split("").length;
       long = Math.max(long, currentLength);
}
console.log(long);
