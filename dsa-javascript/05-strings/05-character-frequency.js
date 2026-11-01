// 05 Character Frequency
// TODO: Add explanation, solution, time complexity, and space complexity.


let str = "rajeshsarkar";
let data = {};
for (let i = 0; i < str.length; i++){
    let char = str[i];
    data[char] = (data[char] || 0) + 1;
}
console.log(data);




