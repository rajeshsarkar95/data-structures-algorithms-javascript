// JavaScript Engine Architecture
console.log("Hello, World!");
// Definition: A JavaScript Engine is a program that executes JavaScript code by parsing, compiling, optimizing, and executing it.
// V8	Chrome, Node.js, Edge
// SpiderMonkey	Firefox
// javascriptCore Safari
// 1. Pharse - Convert source code into a staruturred represention
// 2. AST - Represent the staructureur code .
// 3 interpreter - Excutes bytecode
// 4 Compilar - Optimize frequently excutions code 
// Heap - Store dynamic allocation objects
// Garbase collecter - Clean unused memory
const a = 10;
const b = 20;
function add(x,y){
    return x+y;
}
console.log(add(a,b));

