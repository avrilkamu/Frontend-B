// JavaScript Function
//sama dengan consep pemogramn lainnya dia multi fungsi

// 1. Function Declarition 
// function greetings(){
//     console.log("Hello world");
// }
// greetings(); // call //execute function

// // 2. function expression
// let greetings2 = function (){
//     console.log("Hello world");
// }
// greetings2();

//3. Paramater dan Argument (input), return ()
//cara 1
//                  parameter
// function greetings1(FullName){
//     return "Hello World" + FullName;
// };
// //                      argument
// let output = greetings1("jhon Doe");
// console.log(output);
// //cara 2
// let greetings3 = function (FullName) {
//     return "Hello" + FullName;

// };
// let output2 = greetings3(" Jhon Doe");
// console.log(output2);

//4. Function Hoisting
// belumm ada

// Global Scope & LInkup Global
let X = 10;// Global
function foo(){
    let y = 20;// Local
    console.log(y);// 10
    console.log(X);// 20
    if (y>10){
        let z = 30;//Local Block
        console.log(x);
        console.log(y);
        console.log(z);//30
    }
}
console.log(X);
foo();






