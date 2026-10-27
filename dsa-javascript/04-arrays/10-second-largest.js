// 10 Second Largest
// TODO: Add explanation, solution, time complexity, and space complexity.
let arr = [1,2,3,5,6,6,7,,8,9,10,11,12,13];
let max = arr[0];
for(let i = 0;i < arr.length;i++){
    if(arr[i] > max){
        max = arr[i]
    } 
}
console.log(max)
