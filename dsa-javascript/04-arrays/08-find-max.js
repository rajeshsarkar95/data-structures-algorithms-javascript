// 08 Find Max
// TODO: Add explanation, solution, time complexity, and space complexity.
let arr = [12,20,30,40,50,60,70,80]
let max = arr[0]
for(let i = 1; i < arr.length;i++){
    if(arr[i] > max){
        arr[i] = max;
    }
}
console.log(max)