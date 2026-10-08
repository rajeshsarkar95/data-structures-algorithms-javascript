// Algorithm = A clear sequence of steps to get the required output from given input.
// Input: [10, 25, 7, 40, 15]
// Output: 40
// Algorithm
// 1. Take the first number as the largest.
// 2. Compare it with every other number.
// 3. If a bigger number is found, update the largest number.
// 4. Return the largest number.

function findLargest(arr){
    let largest = arr[0]
    for(let i = 1;i < arr.length;i++){
        if(arr[i] > largest){
            largest = arr[i]
        }
    }
    return largest;
}
console.log(findLargest([10]));
// 1. Characteristics of an Algorithm
// A good algorithm generally has these characteristics:
// 1. Input
// It can accept zero or more inputs.
function add(a,b){
    return a + b
}
console.log(add(10,20));
// 2. Output
// It should produce a result.
function square(n){
    return n * n;
}
console.log(square(5))
 //5 Definiteness
//  Every step should be clear and unambiguous.
// 4. Finiteness
function printNumber(n){
   for(let i = 1; i <= n;i++){
    console.log(i)
   }
}
printNumber(5)
// Step 1: Start
// Step 2: Take two numbers
// Step 3: Add them
// Step 4: Display the result
// Step 5: Stop

// Javascript
// function add(a,b){
//     let sum = a + b;
//     return sum
// }
// Step 1: Take a number
// Step 2: Divide it by 2
// Step 3: If remainder is 0 → Even
// Step 4: Otherwise → Odd

let num = 10
for(let i = 0; i < num.length;i++){
   if(num[i] % 2 == 0){
    console.log("Number is even")
   } else {
    console.log("Number is odd")
   }
}
// find max 
function max(arr){
    let max = arr[0]
    for(let i = 1; i < arr.length;i++){
      if(num[i] > max){
         max = arr[i]
      }
    }
    return max;
}
console.log(max[5.30,32,43,43])

// linneerserach

// Complexity 
// best Case: O(1) => target is first element
// Worst Case:O(n) => target is last/
// Averages   O(n)
// Space      O(1)

function ChraFrequency(str){
    let frequency = {};
    for(let char of str){
        frequency[char] = (frequency[char] || 0) + 1;
    }
    return frequency
}

console.log(ChraFrequency("Rajesh"))

function findMax(arr){
    let max = arr[0];
    for(let i = 1; i < arr.length;i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}

console.log(findMax([10, 25, 5, 40, 15]));


function findAvg(arr){
    let sum = 0;
    for(let i = 0; i < arr.length;i++){
        sum = sum + arr[i]
    }
    let avrage = sum / arr.length
    return avrage;
}
console.log(findAvg([10, 20, 30, 40, 50]));




  











