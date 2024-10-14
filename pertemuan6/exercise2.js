// Soal.....
//ubah modifikasi exercise 1, menggunakan 
//1. IIfE
//2. callback

//no 1.
//with paramater
// let output =(function(berat, tinggi) {
//     let bmi = berat / (tinggi * tinggi);
//     return " bmi hasil " + bmi;
// })(70, 1.7);
// console.log(output)

//no 2.
function hitungbmi (berat, tinggi, callback){
    let bmi = berat/ (tinggi * tinggi);
    return callback (bmi);
}
let output=hitungbmi(70,1.7, function(bmi){ 
    return "hasil bmi = " + bmi;
});
console.log(output);






