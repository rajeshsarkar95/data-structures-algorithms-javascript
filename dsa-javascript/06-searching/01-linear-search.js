// 01 Linear Search
// Explanation: Linear search is a simple search algorithm that checks each element in an array sequentially until the target element is found or the end of the array is reached.

// Solution: The function takes an array and a target value as input and returns the index of the target value if found, otherwise returns -1.

// Time Complexity: O(n) where n is the number of elements in the array.
// Space Complexity: O(1) as it uses a constant amount of extra space.


function linearSearch(arr,target){
    for (let i = 0; i < arr.length;i++){
        if (arr[i] === target){
            return i;
        }
    }
    return -1;
}

const arr = [10,20,30,40,50];
console.log(linearSearch(arr,30));
