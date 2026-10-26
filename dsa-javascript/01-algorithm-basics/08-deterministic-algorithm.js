// 08 Deterministic Algorithm
// TODO: Add explanation, solution, time complexity, and space complexity.
// A determinates algorithms is an algoithms where 
// for same input,it always produces the same output and follow

// var createHelloWorld = function() {
//     return function(...args) {
//         return "Hello World";
//     };
// }
// // Create the function
// const f = createHelloWorld();
// // Call the function
// console.log(f())
// // Call with arguments
// console.log(f({}, null, 42));


// var createCounter = function(n){
//     return function(){
//         return n++;
//     }
// }
// const Counter = createCounter(10)
// console.log(Counter)
// console.log(Counter)
// console.log(Counter)

// // output is 10
// // output is 11
// // output is 12

// const counter2 = createCounter(-2)
// console.log(counter2()) // -2
// console.log(counter2()) // -1
// console.log(counter2()) // 0
// console.log(counter2()) // 1
// console.log(counter2()) // 2
// console.log(counter2()) // 3

// how n++ work
// First call => return 10,then n becomes 11
// Second call => retrun 11,then n become 12
// third call  => return 12,than n become 13

// createCounter(10)
// n => 10
// Counter()
// counter()
// counter()
// Time 

// var expect = function(val){
//     return {
//         toBe:function(otherVal){
//             if(val === otherVal){
//                 return true;
//             }
//             throw new Error("Not equal");
//         },
//         notTobe:function(otherVal){
//             if(val !== otherVal){
//                 return true;
//             }
//             throw new Error("Equal");
//         }
//     };
// }
// expect(5).toBe(5);
// expect(5).toBe(6);
// expect(6).toBe(6);

// let value = "100";
// let numbers = Number(value);
// console.log(numbers);

// Number → String

// let values = "100"
// let numbers = Number(values);
// console.log(numbers);


// let numbers = 100
// let value = String(numbers);
// console.log(value);

// Boolean(1) // true
// Boolean(0) // False

// console.log("hello world");
// let names = "Rajesh";
// console.log(names);

// 3. Add Two Numbers

// let a = 10;
// let b = 20;
// let sum = a + b;
// console.log(sum);

// let num = 10;
// if(num % 2 === 0){
//     console.log("even numbers");
// } else {
//     console.log("Odd numbers");
// }
// // check positive numbers or negetive numbers
// let num = -5;
// if(num > 0){
//     console.log("Positive");
// } else if (num < 0){
//      console.log("Positive");
// } else {
//     console.log("Zero");
// }

// let num1 = 30
// let num2 = 40
// if(num1 > num2){
//     console.log(num1);
// } else {
//     console.log(num2);
// }

// let a = 10;
// let b = 30;
// let c = 40;
// if(a > b  && a > c){
//     console.log(a);  
// } else if (b > a && b > c){
//     console.log(b);
// } else {
//     console.log(c);
// }
// Check Voting Eligibility
// let age = 21;
// if(age >= 18){
//     console.log("eligibles to vote");
// } else {
//     console.log("Not eligibles")
// }

// let years = 2024;
// if(years % 400 === 0 || (years % 4 === 0 && years % 100 !== 0)){
//     console.log("leap year");
// } else {
//     console.log("Not a leave year");
// }

for (let i = 1; i <= 20; i++){
    if (i % 2 === 0){
        console.log(i);
    }
}






































