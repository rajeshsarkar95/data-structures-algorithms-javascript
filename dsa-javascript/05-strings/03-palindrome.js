// 03 Palindrome
// TODO: Add explanation, solution, time complexity, and space complexity.

let str = "madam";
let palindrome = true;
for(let i = 0; i < str.length / 2;i++){
    if(str[i] !== str[str.length - 1 - i]){
        palindrome = false;
        break;
    }
}
if(palindrome){
    console.log("Palindrome");
} else {
    console.log("Not a palindrome");
}


















