// myRegex should check for the names of 'Franklin Roosevelt' or 'Eleanor Roosevelt' in a case sensitive manner
// It should also make concessions for middle names


let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/i; 
let result = myRegex.test(myString); 
console.log(result)


