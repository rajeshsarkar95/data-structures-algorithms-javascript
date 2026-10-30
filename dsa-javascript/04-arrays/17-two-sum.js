// 17 Two Sum
// TODO: Add explanation, solution, time complexity, and space complexity.

let arr = [2,7,11,15,20];
let target = 9;
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

// let map = Map()
map.set(2,0);
map.set(7,1);
console.log(map.has(2)); // true
console.log(map.has(5)); // fa



