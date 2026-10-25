let arr1 = [1,2,3,4,5,6,7,,10,21,12,40];
let arr2 = [2,3,4,5,6,7,8]
// arr.sort();
// console.log(arr);
let combinearr = [...arr1,...arr2]
// this is for concanitions value
let arrayconacate = arr1.concat(8)
// this for filterout all value
// let filteraray = arr1.filter((ar > 2))
// console.log(arraysmethod);
 let obj = {
    name:"Rajesh",
    lastname:"sarkar",
 }
obj.name;

const persons = [
  {firstname:"Malcom",lastname:"Reynolds"},
  {firstname:"Kaylee",lastname:"Frye"},
  {firstname:"Jayne",lastname:"Cobb"}
];

persons.map(getFullName);

function getFullName(item) {
  return [item.firstname,item.lastname].join("");
}

// find we can use for maching elemennts
// let result = arr1.find((value)=>{
//     return value > 25;
// })
// console.log(result);

// let result = arr1.findIndex((value)=>{
//     return value > 25;
// })
// console.log(result);

const myArr = [1,2,[3,[4,5,6],7],8];
const newArr = myArr.flat(2);
let text = JSON.stringify(newArr);

let arr = [12,13,14,15,16,17,19,20]
// included functions
let includfunctio = arr.includes(19);
console.log(includfunctio); 
let arrindedof = arr.indexOf(16);
console.log(arrindedof(30));
// 2
// push() - add at end
arr.push(60);
console.log(arr);

// Pop()
// we can use for for removed last element from array
let arr3 = [1,2,4,5,6,7,8,9,0];
let  pop = arrpop.pop();
console.log(pop);






























