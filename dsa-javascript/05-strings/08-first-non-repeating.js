// 08 First Non Repeating
// TODO: Add explanation, solution, time complexity, and space complexity.

let arr = [1,2,3,4,5,1,2,3,4,5,6];
let count = {};
for(let i = 0; i < arr.length; i++){
    count[arr[i]] = (count[arr[i]] || 0) + 1;
}

for(let i = 0; i < arr.length; i++){
    if(count[arr[i]] === 1){
        console.log(arr[i]);
        break;
    }
}
