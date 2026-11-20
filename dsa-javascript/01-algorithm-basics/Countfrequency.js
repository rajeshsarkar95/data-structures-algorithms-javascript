const arr = [1,2,3,4,5,6,7,8,9,10,10];
// we have array containing 11 elements,Notice that 10 appears twice
const map = new Map();
// Map(0) {} created emty map for 
// created emty map functions
for(const num of arr){
// for for looping all element and make sure that all element working currently
    map.set(num,(map.get(num) || 0) + 1);
// Map(0) {}
    // this most impotant line
    // Let't break it down
    // Expression | Meaning
    // |---|---|
    // |map.get(num) | Gets the current count of the number|
    // || 0 | if the numbers doesnt't exits,use 0 
    // 
    // lest't break
}

console.log(map);


function twoSum(nums,target){
    const map = new Map();
    for(let i = 0; i < nums.length;i++){
        const compleatet = target - nums[i];
        if(map.has(compleatet)){
            return [map.get(compleatet),i];
        }
        map.set(nums[i],i);
    }
    return [];
}

console.log([2,7,11,15],9);



