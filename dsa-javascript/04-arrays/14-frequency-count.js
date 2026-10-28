let arr = [10,20,20,20,30,30]
let freequncy = {}
for(let nums of arr){
    if(freequncy[nums]){
        freequncy[nums]++;
    } else {
        freequncy[nums] = 1
    }
}
console.log(freequncy)

// let str = "rajeshsarkarss";
let freequency = {}
for(let stri of str){
    if(freequency[stri]){
        freequency[str]++;
    } else {
        freequency[stri] = 1
    }
}
console.log(freequency)

let str = "bananas";
let freequncy1 = {}
for(let char of str){
    freequency[char] = (freequency[char] || 0) + 1; 
}
console.log()



