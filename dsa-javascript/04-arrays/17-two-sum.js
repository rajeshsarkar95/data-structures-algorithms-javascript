// 17 Two Sum
// TODO: Add explanation, solution, time complexity, and space complexity.

let arr1 = [2,7,11,15];
let target = 9;
for (let i = 0; i < arr.length; i++){
    for (let j = i + 1; j < arr.length; j++){
        if (arr[i] + arr[j] === target){
        }
    }
}

let arr = [2,7,11,15,20];
let target2 = 9;
let map = new Map();
for(let i = 0; i < arr1.length;i++){
    let current = arr1[i];
    let require = target - current;
    if(map.has(require)){
        console.log([map.get(require),i]);
        break;
    }
    map.set(current,i);
}

