const arr = [1,2,3,4,5,6,7,8,9,10,10];

const map = new Map();

for(const num of arr){

    map.set(num,(map.get(num) || 0) + 1);

}

console.log(map);


