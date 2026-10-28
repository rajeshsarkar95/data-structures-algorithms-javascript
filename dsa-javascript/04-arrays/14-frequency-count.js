// 14 Frequency Count
// TODO: Add explanation, solution, time complexity, and space complexity.
let arr = [10,20,30,40,50,60,70,,70,50,30];
// let frequency = {}

for(let num of arr){
    if(frequency[num]){
        frequency[num]++;
    } else {
        frequency[num] = 1;
    }
}
console.log(frequency);


let str = "banana";
let frequency = {}
for(let char of str){
    frequency[char] = (frequency[char] || 0) + 1;
}
console.log(frequency)