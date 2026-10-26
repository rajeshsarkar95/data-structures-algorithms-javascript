// 03 Update Array
// TODO: Add explanation, solution, time complexity, and space complexity.
// let arr = [1,2,3,4,5,6,7,8]
// add value useing push
arr.push(6);
// removed value for using
arr.pop();

Array.isArray(arr);
Array.from(iterable);
Array.of(1,2,3);

// push
// pop
// shift
// unshift
// splice

// 3. Copy / Extract
slice()  // slice we can use for slice something
concat() // concat we can use for + value

// 4. Search
indexOf()   // find value
lastIndexOf()  // find last index value 
includes()     // include check value if value 
find()         //  check value finded
findIndex()     // chech where value
findLast()        // Modern
findLastIndex()   // Modern

// 5. Loop / Transform
// array.forEach(element => {
// });
forEach()   // return new array
map()       // maping funtion 
filter()    // filterout functions
reduce()    // combine the value 
reduceRight() // reduceRigth check right reduce value

// 6. Test
some()
every()
// 7. Sort / Reverse
// sorting value
// every()
// Modern non-mutating versions:
toSorted()       // ES2023
toReversed()     // ES2023
toSpliced()      // ES2023

const arr = [3, 1, 2];
const sorted = arr.toSorted();
console.log(sorted); // [1, 2, 3]
console.log(arr);    // [3, 1, 2]

// 11. Iterator Methods
keys()
values()
entries()

// 12. Modern Array Methods
at()              // Access using positive/negative index
// with()             // ES2023, replace an element without mutation
findLast()
findLastIndex()
toSorted()
toReversed()
toSpliced()


// at()
concat()
copyWithin()
entries()
every()
fill()
filter()
find()
findIndex()
findLast()
findLastIndex()
flat()
flatMap()
forEach()
includes()
indexOf()
join()
keys()
lastIndexOf()
map()
pop()
push()
reduce()
reduceRight()
reverse()
shift()
slice()
some()
sort()
splice()
toReversed()
toSorted()
toSpliced()
toString()
unshift()
values()
// with()









