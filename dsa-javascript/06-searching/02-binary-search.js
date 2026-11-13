// Binary Search is a searching algorithm used to find an element in a sorted array by repeatedly dividing the search range into two halves.

function binarySearch(arr,target){
    let low = 0;
    let high = arr.length - 1;
    while(low <= high){
        let mid = Math.floor((low + high) / 2);
        if(arr[mid] === target){
            return mid;
        } else if(arr[mid] < target){
            low = mid + 1;  
        } else {
            high = mid - 1;
        }
    }
    return -1; 
}
const arr = [10,20,30,40,50];
const target = 30;
const result = binarySearch(arr,target);
console.log(result);
