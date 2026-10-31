// 04 Count Vowels
// TODO: Add explanation, solution, time complexity, and space complexity.
let vowels = "AEIOU";
let result = [];
for (let i = 65; i <= 90; i++) {
    let char = String.fromCharCode(i);
    if (vowels.includes(char)) {
        result.push(char);
    }
}
let reduces = result.reduce((a, b) => {
    return a + b;
}, "");
console.log(reduces);
