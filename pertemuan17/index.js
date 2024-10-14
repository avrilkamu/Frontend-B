//Asynchronous JS

// kebalikannya 
//synchronous => berjalan single thread => blocking
// console.log("Proses ynag memakan waktu lama"); // timbul masalah ketika satu proses membutuhkan wakt yang lama
// console.log("proses 2");
// console.log("proses 3");
// console.log("proses 4");
// maka itu dibuat step yang berjalan sama

//Asynchronous => multi thread 
//1. Pararel : start sama, jadi di jam yang sama ada 2 pararel yang berjalan sama sama
// setTimeout(()=>{
//     console.log("proses 1");
// },3000);
// console.log("proses 2"); // jalannya langsung atau sama sama
// setTimeout(()=>{
//     console.log("proses 3");
// },5000);
// console.log("proses 4");// ini juga demikian
//konsep pararel kurang pas di dunia fron end karena kosep yang berbalap balapan

//2. Concurent : tidak berjalan sama sama, jadi dia menunggu satu proses berjalan abis itu proses selanjutnya (waiting)
// setTimeout(()=>{
//     console.log("proses 1");
//     setTimeout(()=>{
//         console.log("proses 2");
//         setTimeout(()=>{
//             console.log("proses 3");
//             setTimeout(()=>{
//                 console.log("proses 4");
//             },3000);
//         }, 3000);
//     }, 3000);
// },3000);

//Promise
let condition = true;
const newPromise = new Promise (( resolve, reject) =>{
    if (condition){
        resolve ("Berhasil");
    } else {
        reject ("Gagal");
    }
});

//cara pakai promise
//1. 
newPromise
.then ((result) => result)
.then((result2) => console.log(result2))
.catch ((error) => console.log(error))

//2.
//harus dibuat dalam fungsi
const consumePromise = async () => {
    try{
        let result = await newPromise;
        console.log(result);
    } catch (error){
        console.log(error)
    }
};
consumePromise();

//pakai promise yang sudah ada
//1. Fetch
fetch ("https://jsonplaceholder.typicode.com/users")
.then((reponse) => Response.json())
.then((json) => console.log(json));

(async() => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    let json = await response.json();
    json.forEach( ({name}) => console.log(name));
})();
