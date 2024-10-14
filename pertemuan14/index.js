// Rest Paramaters and Spreed Operator 
// 1. Rest Paramater = jika memiliki fungsi yang paramaternya banyak

//tanpa rest Paramater
const func1 = (param1, param2, param3) => {
    console.log(param1,param2,param3);
};
func1("A", "B", "C", "D", "E");

//Dengan Rest Paramater
const func2 = (...params) => {
    console.log(params);
};
func2("A", "B", "C", "D", "E");

// Rest paramater harus berada di terakhir dalam paramater
const func3 = (param1,param2,...params ) => {
    console.log (param1,param2);
    console.log(params);
    console.log(params[1]); //ini kalo pake
};
func2("A", "B", "C", "D", "E");

// Mini Execirse
// const perjumlahan = (a, b, c, d, e) => {
//     let arr =[a, b, c, d, e];
//     let hasil = 0;
//     arr.forEach ((item) => (hasil += item));
//     return hasil;
// };
// console.log(perjumlahan(1,2,3,4,5));
// Hasil dari mini case
const perjumlahan = (...arr) => {
    let hasil = 0;
    arr.forEach ((item) => (hasil += item));
    return hasil;
};
console.log(perjumlahan(1,2,3,4,5));

// 2. Spreed Operator = mau sebarkan atau mau dipecahkan elemen elemennya
let numbers = [1,2,3,4,5];
console.log(numbers); //ini dibungkus dengan array
console.log(...numbers);// hasilnya sudah dipecahkan

//Array 
//1. Untuk Duplikasi Array
let number = [...numbers]; //(numbers) hasilnya array didalam array
numbers.push (6);
console.log(number);

//2. menghubungkan array
let array1= [1,2,4];
let array2 = [4,5,6];
let array3 = [7,8,9];

let numbers3 = array1.concat(array2, array3);
let numbers4 = [...array1, ...array2, ...array3]

// Object
//1. Duplikasi Object
const john = {
    fullName : "Jhon Doe",
    age : 30,
};
const john2 = { ...john, address: "Manado"};

//2. Menggunakan Object
// let obj1 = {a: 1, b: 2};
// let obj2 = {c: 3, d: 4};

// let combinedobj = 
// BELUM KELAR NNTI MINTA DI TEMAN AJA