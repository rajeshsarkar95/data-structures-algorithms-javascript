// 08 Fibonacci
// TODO: Add explanation, solution, time complexity, and space complexity
// assing first value n

let n = 10;
let a = 0;
let b = 1;

for(let i = 0; i < n;i++){
    let next = a + b;
    a = b
    b = next
    console.log(a);
}
