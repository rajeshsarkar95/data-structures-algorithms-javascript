// 04 Insert Element
// TODO: Add explanation, solution, time complexity, and space complexity.
// let arr = [10,12,13,14,15,16,17,18,19];
// push for using add in value in array
// arr.push(40);
// console.log(arr);
// 2. unshift() — Add at the beginning

// let arr = [20,30,40];
arr.unshift(10);
console.log(arr);
// [10, 20, 30, 40]
// 3. splice() — Insert at any position
// This is the most important method for inserting at a specific index.
// let arr = [10,20,30,40,50,60,70,80];
arr.slice(2,0,30);
console.log(arr);
// [10, 20, 30, 40, 50]
// let arr = [10, 20, 50];
arr.splice(2, 0, 30, 40);
console.log(arr);
// [10, 20, 30, 40, 50]
// 4. Spread operator ... — Insert without modifying original
// let arr = [20, 30];
let newArr1 = [10,...arr];
console.log(newArr);
// [10, 20, 30]

// let arr = [10,20,30,40,50,60]

let newarr  = [
    ...arr.slice(0,2),
    30,
    ...arr.slice(2)
];
console.log(newArr);
[]

// 7. toSpliced() — Modern non-mutating insertion
// let arr = [10, 20, 40, 50];
// let newArr = arr.toSpliced(2,0,30);
// console.log(newArr);
// [10, 20, 30, 40, 50]
// console.log(arr);
// [10, 20, 40, 50]
// 7. toSpliced() — Modern non-mutating insertion
// let arr = [10,20,40,50];
// let newArr = arr.toSpliced(2,0,30);
// console.log(newArr);
// [10, 20, 30, 40, 50]
// console.log(arr);
// [10, 20, 40, 50]
// End

arr.push(40);
// Beginning
arr.unshift(5);
// Specific position
arr.splice(2,0,30);
// New array - end
let newArr2 = [...arr,40];
// New array - beginning
let newArr3 = [5,...arr];
// New array - specific position
let newArr4 = arr.toSpliced(2,0,30);





