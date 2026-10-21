// 02 Sum Of N Numbers
// TODO: Add explanation, solution, time complexity, and space complexity.

// let arr = [10,11,12,13,];
// let sum = 0;
// for(let i = 0; i < arr.length;i++){
//     sum += arr[i]
//     console.log(arr[i]);
// }
// console.log(sum);


let subarray = function(arr){
    let sum = 0;
    for(let i = 0; i < arr.length;i++){
        sum = sum + arr[i];
    }
    return sum;
} 
console.log(subarray([10,11,12,13]));





