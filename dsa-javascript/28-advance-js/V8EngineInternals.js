// Definition:V8 is Google open source javascript and webAssembly engine,Written primmarly C++
// it used by chrome and node js
// impotent V8 Comaponensts
// Comaponnests    Responsiblity
// Phaser          Parses javascript
// ATS             Create syntex tree
// Innition        Bytecode compiler 
// javascript Compilation Pileline 
// Definition: The Comapilation pipeline is the process of converting javascript code into machine cpde excution insructions

const user1 = {
  name: "Rajesh",
  age: 21
};
const user2 = {
  name: "Amit",
  age: 22
};
console.log(user1,user2);

const usser1 = {}
usser1.name = "Rajesh";
usser1.age = 21;
console.log(usser1);

// Inline Caching (IC)
// Definition: Inline Caching is an optimization technique in V8 that remembers information about property access or operations at a particular code location.

function getName(user){
  return user.name;
}
const user3 = {name:"Rajesh"};
const user4 = {name:"Amit"};
getName(user3);
getName(user4);

function add(a,b) {
  return a + b;
}
add(10, 20);
add(30, 40);
add(50, 60);
add("Hello", " JavaScript");

// After every committed render
// useEffect(() => {
//   console.log("Rendered");
// });

// Only when component mounts
// useEffect(() => {
//   console.log("Mounted");
// }, []);

// When count changes
// useEffect(() => {
//   console.log("Count changed");
// }, [count]);

// useEffect(() => {
//   const timer = setInterval(() => {
//     console.log("Running");
//   }, 1000);

//   return () => {
//     clearInterval(timer);
//   };
// }, []);

useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running");
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);

var name = "Rajesh";
var name = "Rajesh";
function greet(){
    var message = "Hello";
    console.log(message);
}
greet();

// javascript created global execution context and function execution context
// its allowcate memory for variables and functions
// it execute the code line by line and it also create a scope chain for variable and function access
// When greet() is called, a Function Execution Context is created.
// The Function Execution Context has its own Variable Environment,Which

// Every execution context has two important phases:

// Memory Creation Phase: In this phase, memory is allocated for variables and functions. Variables are initialized with undefined, and functions are stored in memory.

// Execution Phase: In this phase, the code is executed line by line. Variables are assigned their actual values, and functions are invoked.

// 2. What is the Call Stack?
// The javascript Call stack is a machanism that keeps track of the function calls in a program. 

function first(){
  console.log("First function");
  second();
}
function second(){
  console.log("Second function");
  third();
}
function third(){
  console.log("Third function");
}






