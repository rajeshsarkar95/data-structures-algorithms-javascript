// 01 Linear Search
// TODO: Add explanation, solution, time complexity, and space complexity.

function linearSearch(arr,target){
    for (let i = 0; i < arr.length;i++){
        if (arr[i] === target){
            return i;
        }
    }
    return -1;
}
const arr = [10,20,30,40,50];
console.log(linearSearch(arr,30));
