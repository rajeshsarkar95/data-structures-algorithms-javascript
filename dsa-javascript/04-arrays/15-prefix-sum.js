// 15 Prefix Sum
// TODO: Add explanation, solution, time complexity, and space complexity.
let arr = [2,4,6,8,10];
let prefix = []
let sum = 0
for(let i = 0; i < arr.length;i++){
    sum = sum + arr[i]
    prefix.push(sum)
}
console.log(prefix);
console.log("Rajesh sarkar")
