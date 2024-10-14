// // JavaScript Object & Conditional
// //Deklarasi Object

// //Object LIteral
// let jhon = {
//     fristName: "Jhon",
//     age: 30,
//     isMarried: true,
//     grade: [80,90,100],
//     sayGreetings: function (){
//         console.log("hello my name is ....." + this.fristName); 
//     },
//     address:{
//         street : " JL. Arnold Mamonutu Airmadidi",
//         city : "Minahasa Utara",
//         Province : "Sulawesi Utara",
//         postalcode : 95371,
//     },
// };
// console.log(jhon);

// //Mengakses Properti dalam Object
// //1. Dot natation
// console.log(jhon.fristName);
// console.log(jhon.age);
// jhon.age = 31;
// console.log(jhon);  //ini untuk mengubah agenya
// jhon.job = "Teacher"; // ini mo menambah properti baru
// console.log(jhon);

// //2. Bracket notation
// console.log(jhon["isMarried"]);
// jhon["nasionality"]= "indonesia";
// console.log(jhon);

// //Object Method
// jhon.sayGreetings();
// //Object Insaid
// console.log(jhon.address);
// //delate Properti dalam Object
// delete jhon.grade;
// console.log(jhon);

//JavaScript Conditional
//1. if - else
//jika suhu hari ini lebih dari atau sama dengan 37,
//tampilkan suhu hari panas
//jika tidak tampilkan suhu dari ini dingin
let temp =30;
if (temp >= 37){
    console.log("suhu hari ini panas");
} else {
    console.log("suhu hari ini dingin");
}

//2. if - else if - else
//jika nilai 100 - 80 tampilkan grade A 
//jika nilai 79 -70 tampailkan grade B
//jika nilai tampilkan 69 - 50 grade C
//jika dibawah 50 tampilkan grade D
let grade = 100 ;
if (grade >= 80 && grade <= 100) {
    console.log("Grade A");
} else if (grade >= 70 && grade < 80){
    console.log("Grade B");
} else if (grade >= 50 && grade < 70){
    console.log("Grade C");
} else (
    console.log("Grade D")
)

//Switch - case
//jika angka 1 tampilkan januari 
//jika angka 2 tampilkan febuari
//jika angka 3 tampilkan maret
//....
//jika angka 12 tampilkan desember
let number = 1;
switch(number){
    case 1:
        console.log("januari");
        break;
    case 2 :
        console.log("febuari");
        break;
    case 3 :
        console.log("maret");
        break;
}

