// Array in JavaScript

//deklarasi array
// cara 1. array Literal
// let numbers = [1,2,3,4,5];
// console.log(numbers)

// // cara 2. kata kunci new
// let numbers2 = new Array (6,7,8,9,10);
// console.log(numbers2);

//Tipe data yang bisa disimpan dalam Array
// let numbers = [1, 2, 3, 4, 5];
// let students = ["Jhon", " Jane", "Bob"];
// let Jhon = ["Jhon",30,true, (80,90,100)];
// console.log(Jhon)

// //Array length
// console.log(numbers.length);
// console.log(students.length);
// console.log(Jhon.length);

// //cara mengakses element/data tertentu dalam array
// //melalui index.array 
// console.log(numbers[2]);
// console.log(students[1]);
// console.log(Jhon[2]);

// // mengakses elemen terakhir dalam array
// let numbers2 = [1,2,3,4,5,6,7,8,9,10];
// //console.log(numbers2[9]);
// console.log(numbers2[numbers2.length/2])
// let index = numbers2.findIndex (function(item) {
//     return item == "Toga";
// });
// console.log(index)
// ......

//Array Method
let array= [1,2,3,"hello",false,true];
console.log(array);

//1. testring()
console.log(array.toString());
//2. Join()
console.log(array.join());
console.log(array.join(" "));
console.log(array.join("-"));
console.log(array.join("s"));
//3. Pop
array.pop();
console.log(array);
//4. push
array.push("selamat datang");
console.log(array)
//5. shift()
array.shift();
console.log(array);
//6. unshift()
array.unshift("selamat datang");
console.log(array);
//7. splice()
array.splice(2,1);
console.log(array);
array.splice(1,1,1);
console.log(array);
array.splice(2,0,2,3);
console.log(array);

//8. cocat()
let buah =["pisang","apple","jeruk"];
let sayur = ["tomat","bayam","wortel"];
let biji = ["kedelai","kacang tanah","kacang polong"];
let makanan = buah.concat(sayur);
console.log(makanan);

//9. slice ()
let sayuran = makanan.slice(3, 5);
console.log(sayuran);
let bijian = makanan.slice(6);
console.log(bijian);






