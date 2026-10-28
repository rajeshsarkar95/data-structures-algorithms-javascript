// 14 Frequency Count
// TODO: Add explanation, solution, time complexity, and space complexity.
let arr = [10,20,30,40,50,60,70,,70,50,30];
let frequency1 = {}

for(let num of arr){
    if(frequency1[num]){
        frequency1[num]++;
    } else {
        frequency1[num] = 1;
    }
}
console.log(frequency1);


let str = "banana";
let frequency2 = {}
for(let char of str){
    frequency1[char] = (frequency1[char] || 0) + 1;
}
console.log(frequency1)