// 15 Prefix Sum
// TODO: Add explanation, solution, time complexity, and space complexity.
// create arrays for storing values
let arr = [2,4,6,8,10];
// prefix = conating [] emty array 
let prefix = [];
// sum for using  inition 0;
let sum = 0;
for(let i = 0; i < arr.length;i++){
    sum = sum + arr[i]
    prefix.push(sum)
}

console.log(prefix);



