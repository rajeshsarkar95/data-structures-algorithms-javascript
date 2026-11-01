// 06 Anagram
// TODO: Add explanation, solution, time complexity, and space complexity.

let str1 = "listen";
let str2 = "silent";

if(str1.length !== str2.length){
    console.log(false);
} else {
    let count = {};
    for(let char of str1){
        count[char] = (count[count] || 0) + 1;
    }
    for(let char of str2){
        if(!count[char]) return false;
        count[char]--;
    }
    console.log(true);
}






