// 07 Lcm
// TODO: Add explanation, solution, time complexity, and space complexity.

// 4 Dry run
// Phase            varibale       value      Explation
// initalization    a,b,x,y        12,6       Set a,b and copy to x,y
// GCD loop         x,y            6,0        y = 18 % 12 = 6
// 1st iteration                              x = 18 (temp);
// GDS Loop         6,0            6          y = 12 % 6 = 0
// 2st iteration                              x = 6;


// key point
// We use Euclidean Algorithms to find GCD
// GCD is the largest numbers that divided boath
// Numbers..
// LCM is calculate using LCM = (a,b) / GCD
// Time complexity:O(log(min)(a,b))
// Space Complexity:O(1);

// 3 Calculate LCM
// LCM = (a,b) / GCD
         // = (12,18) / 6
        //  = 216 / 6
       //   = 36
    
// We use the (Greatest Common Divisor) Method to find LCM;
// Calculate LCM
// LCM = (a,b) / GCD
    // = (12,18) / 6
    // = 216  / 6
    // = 36
    // Final Result
    // LCM = 36

let a = 12;
let b = 18;
let x = a;
let y = b;
// Find GCD using Euclidean Algorithm
while(y !== 0){
    let temp = y;
    y = x % y
    x = temp;
}
let lcm = (a * b) / x;
console.log(lcm);


