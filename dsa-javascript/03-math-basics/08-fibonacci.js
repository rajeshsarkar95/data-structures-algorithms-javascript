// 08 Fibonacci
// TODO: Add explanation, solution, time complexity, and space complexity
// assing first value n


let n = 10;
// assing second value b
let a = 0;
// third value b
let b = 1;

for(let i = 0; i < n;i++){
    console.log(a);
    let next = a + b;
    a = b
    b = next
}
