// 09 Find Min
// TODO: Add explanation, solution, time complexity, and space complexity.
let arr = [1,2,4,5,,6,7,8,9,0,0,];
let min = arr[0]
for(let i = 0; i < arr.length;i++){
       if(arr[i] > min){
        console.log(arr[i]);
       }
}