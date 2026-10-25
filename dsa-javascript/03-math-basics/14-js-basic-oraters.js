// let arr1 = [1,2,3,4,5,6,7,,10,21,12,40];
// let arr2 = [2,3,4,5,6,7,8]
// // arr.sort();
// // console.log(arr);
// let combinearr = [...arr1,...arr2]
// // this is for concanitions value
// let arrayconacate = arr1.concat(8)
// // this for filterout all value
// // let filteraray = arr1.filter((ar > 2))
// // console.log(arraysmethod);
//  let obj = {
//     name:"Rajesh",
//     lastname:"sarkar",
//  }
// obj.name;

// const persons = [
//   {firstname:"Malcom",lastname:"Reynolds"},
//   {firstname:"Kaylee",lastname:"Frye"},
//   {firstname:"Jayne",lastname:"Cobb"}
// ];

// persons.map(getFullName);

// function getFullName(item){
//   return [item.firstname,item.lastname].join("");
// }

// // find we can use for maching elemennts
// // let result = arr1.find((value)=>{
// //     return value > 25;
// // })
// // console.log(result);

// // let result = arr1.findIndex((value)=>{
// //     return value > 25;
// // })
// // console.log(result);

// const myArr = [1,2,[3,[4,5,6],7],8];
// const newArr = myArr.flat(2);
// // let text = JSON.stringify(newArr);

// let arr = [12,13,14,15,16,17,19,20]
// // included functions
// let includfunctio = arr.includes(19);
// console.log(includfunctio); 
// let arrindedof = arr.indexOf(16);
// // console.log(arrindedof(30));
// // 2
// // push() - add at end
// arr.push(60);
// console.log(arr);

// // Pop()
// // we can use for for removed last element from array
// let arr3 = [1,2,4,5,6,7,8,9,0];
// let  pop = arrpop.pop();
// // console.log(pop);

// // unshif for useing add value for bigineing
// let unshift = arr3.unshift([9]);
// console.log(unshift);
// // shift for useing removed value for beginning
// arr.shift();
// console.log(arr);
// // soft elements
// let nums = [30,10,50,20,40];
// nums.sort((a, b) => a - b);
// console.log(nums);
// // [10,20,30,40,50];
// let result = arr.slice(1,4);
// console.log(result);
// arr.slice(1,2,3,4,5,6,7,8,9,10);
// const myArr1 = [1,2,[3,[4,5,6],7],8];
// // const newArr = myArr.flat(2);
// // let text = JSON.stringify(newArr);
// const myArr5 = [1,2,3,4,5,6,7,8,9,10];
// const newArr2 = myArr.flatMap(x => [x,x * 10]);
// console.log(newArr);
// // flatmap() method maps all element and created a new array.
// // The plat medhod maps all from calling functions for evry array elements 
// // platMap() does not exucutes the function for empty element
// // flatmedhod() medhod maps all array element and a new flat array

// const fruits = ["apple","orages","cherry"];
// fruits.forEach((arr)=>{
//    console.log(arr);
// });

// //foreach() method calls a functions for each element in an array 
// // The forEach() method is not exucuted for empty elements.

// const fruts = ["Banana","Orages","Apple","Mango"];
// const list = fruits.entries();
// let entriesText = "";
// for(let x of list){
//     entriesText += x;
// }

// // Map() create a new array calling a functions

// let x = Boolean(false);
// let y = new Boolean(false);
// console.log(x == y); // true
// console.log(x === y); // false

// let bool = false;
// let text = bool.constructor();

// const ages = [32,33,16,40];
// function checkAge(age){
//     return age > 18;
// }
// // / Are all ages over 18?
// ages.every(checkAge);

// let arr = [10,20,30];
// let total = arr.reduce((sum,value)=>{
//     return sum + value;
// },0);
// console.log(total);
// 60
// let result = arr.some((value)=>{
//     return value > 25;
// })
// console.log(result);
// evry() all must match

// let result = arr.every((value)=>{
//     return value > 5;
// });
// console.log(result);
// true

// flat() - flatteed Array
// 23. flat() — flatten nested arrays
// let arr5 = [1,[2,3],[4,5]];
// console.log(arr5.flat());
// [1,2,3,4,5,6,7,8,9]


let arr = [10,20,30,40,50,60,70];
for(let value of arr){
    console.log(value);
}










































































