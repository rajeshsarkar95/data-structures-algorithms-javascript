let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13]

for(let i = 0;i < arr.length;i++){

    let n = arr[i];
    let count = 0;
    for(let j = 1; j <= n;j++){
        if(n % j === 0){
            count++;
        }
    }
    if(count === 2){
        console.log(n);
    }
}
