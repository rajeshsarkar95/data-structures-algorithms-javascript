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
// at()
// Gets an element using an index. Negative indexes work from the end.


// 1. at()
// const fruits = ["Apple","Banana","Mango","Orange"];
console.log(fruits.at(0));   // Apple
console.log(fruits.at(2));   // Mango
console.log(fruits.at(-1));  // Orange
console.log(fruits.at(-2));  // Mango

// Practical: Get the last item.
// 2. concat()
const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express"];
const skills = frontend.concat(backend);
console.log(skills);

// 3. copyWithin();
// const numbers = [1, 2, 3, 4, 5];
numbers.copyWithin(0, 3);
console.log(numbers);

// 4. entries()

const fruits = ["Apple", "Banana", "Mango"];
for (const [index, fruit] of fruits.entries()){
    console.log(index,fruit);
}

// 0 Apple
// 1 Banana
// 2 Mango

// 5. every()
const marks = [80, 75, 90, 85];
// const result = marks.every(mark => mark >= 40);
console.log(result);  // true

// 6. fill()

// Fills elements with a value.
// const numbers = [1, 2, 3, 4, 5];
numbers.fill(0);
console.log(numbers);

// filter()
// Creates a new array containing elements that pass a condition.

// const users = [
//     { name: "Raj", age: 21 },
//     { name: "Amit", age: 17 },
//     { name: "Rahul", age: 25 }
// ];
const adults = users.filter(user => user.age >= 18);
console.log(adults);

// 9. findIndex()
// Returns the index of the first matching element.
// 10. findLast()

const numbers = [10, 20, 30, 20, 40];
const result = numbers.findLast(num => num === 20);
console.log(result); // 20

// Useful with objects:
const users = [
    { name: "Raj", active: true },
    { name: "Amit", active: false },
    { name: "Rahul", active: true }
];
console.log(users.findLast(user => user.active));

// 11. findLastIndex()
const numbers = [10, 20, 30, 20, 40];

const index = numbers.findLastIndex(num => num === 20);

console.log(index); // 3






