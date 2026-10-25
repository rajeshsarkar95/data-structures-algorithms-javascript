// 12 Palindrome Number
// TODO: Add explanation, solution, time complexity, and space complexity.
let str = "madam";
let reverse = str.split("").reverse().join("");
if(str === reverse){
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
    
}
