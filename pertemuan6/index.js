//IIFE & Callback Function

//1. Iife (imme)
//a. no paramater,args dan return value
// (function (){
//     console.log("hello world")
//     //kode
// })();
// // b. with paramater
// let output =(function (fullName){
//     return "hello" + fullName;
// }) ("Jhon Doe");
// console.log(output);

//2. callback function
// a.  no paramat, args, return
function sayHello (callback){
    let result = callback ("Jhon Doe");
    console.log(result)
    return result;
}
let output=sayHello(function(fullName){ 
    return "Hello" + fullName;
});
console.log(output);

