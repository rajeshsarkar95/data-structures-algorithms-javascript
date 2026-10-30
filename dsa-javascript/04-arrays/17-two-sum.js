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
//crate empty Map
let map = new Map();
// Loop through the array
for(let i = 0; i < arr1.length;i++){
    // get current numbers
    let current = arr1[i];
   //find the numbers needed to make target
    let require = target - current;
    // check if required numbers exists in map
    if(map.has(require)){
    // print boath of index
        console.log([map.get(require),i]);
        break;
    }
    // store numbers and its index
    map.set(current,i);
}

