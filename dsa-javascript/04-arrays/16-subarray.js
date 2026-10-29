// 16 Subarray
// TODO: Add explanation, solution, time complexity, and space complexity.

// let arr = [1,2,3,4];

// [1, 2, 3] ✅ Subarray
// [2, 3, 4] ✅ Subarray

// [1]
// [2, 3]
// [1, 2, 3]
// [2, 3, 4]
// [1, 2, 3, 4]

let arr = [1,2,3,4,5,6,7,8,9,10];

for(let start = 0; start < arr.length;start++){
    for(let end = start; end < arr.length;end++){
       let subarray = arr.slice(start,end + 1);
       console.log(subarray);
    }
}


