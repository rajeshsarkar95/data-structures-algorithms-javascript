// 10 String Compression
// TODO: Add explanation, solution, time complexity, and space complexity.



let str = "aaabbbccdddeee";
let compressed = "";
let count = 1;
for(let i = 0; i < str.length; i++){
    if(str[i] === str[i+1]){
        count++;
    }
    else{
        compressed += str[i] + count;
        count = 1;
    }
}
console.log(compressed);