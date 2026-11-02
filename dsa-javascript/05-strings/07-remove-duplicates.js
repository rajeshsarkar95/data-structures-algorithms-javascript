// 07 Remove Duplicates
// TODO: Add explanation, solution, time complexity, and space complexity.

let arr = [1,2,3,4,5,6,7,8,8];

let unique = [...new Set(arr)];

let arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,15,16,16];

let set = new Set();

for(let i = 0;i < arr.length;i++){

    set.add(arr[i]);

}

console.log([...set]);




