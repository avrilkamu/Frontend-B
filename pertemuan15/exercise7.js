// Avril Agnes Kamu
//1. Destructuring (Array & Object)
// A. Array Destructuring
const numbers = [1, 2, 3];
const [satu, dua, tiga] = numbers;
console.log(satu);  // 1
console.log(dua); // 2
console.log(tiga);  // 3

// B. Object Destructurin
const orang = { nama: 'John', umur: 30 };
const { nama, umur } = orang;
console.log(nama);  // John
console.log(umur);   // 30

//2. Destructuring dengan Mengambil Sebagian Item
// A. Array Destructuring:
const angka = [1,2,3,4,5];
const [angka1, , angka3] = angka;
console.log(angka1); 
console.log(angka3)

// B. Object Destructuring
let car = {
    merek : "Toyota",
    Model : "Camry",
    tahun : 2021,
};
let {merek, tahun} = car;
console.log(merek);
console.log(tahun)

//3. Destructuring dengan Menggunakan Default Value
// A. Array Destructuring
const num = [1];
const [first = 10, second = 20] = numbers;
console.log(first);  // 1
console.log(second); // 20 (default value digunakan)

// B. Object Destructuring
let siswa = {
    nam: "Ani",
    umr: 20
  };
  
  let { nam, umr, kelas = "Tidak Diketahui" } = siswa; // kelas memiliki default value
  console.log(nam); // Ani
  console.log(umr); // 20
  console.log(kelas); // Tidak Diketahui

//4. Destructuring dengan Menggunakan Rest Operator
// A. Array Destructuring
let angkaArray = [1, 2, 3, 4, 5];
let [angkaPertama, ...angkaLainnya] = angkaArray; // Mengambil angka pertama dan sisanya

console.log(angkaPertama); // 1
console.log(angkaLainnya); // [2, 3, 4, 5]

// B. Object Destructuring
const org = { nama: 'Tom', umur: 40, tempat: 'NewYork' };
const { nn, ...details } = org;
console.log(nn);    // Tom
console.log(details); // { age: 40, city: 'NY' }


//Dengan menggunakan konsep destructuring coba anda cari di exercise6 bagian mana yang bisa diubah dengan destructuring.
// 1. destructuring untuk parameter fungsi dan default parameter
const calculateAge = (birthYear) => 2019 - birthYear; // Memperbaiki fungsi untuk menghitung umur

const yearUntilRetirement = ({ year = 1980, firstName = "John Doe" } = {}) => { // Destructuring dan default parameter
    const age = calculateAge(year);
    const retirement = 60 - age;

    if (retirement > 0) {
        console.log(`${firstName}, retires in ${retirement} years.`);
    } else {
        console.log(`Halo nama saya ${firstName}, saya sudah pensiun.`);
    }
};

yearUntilRetirement({ year: 1987, firstName: 'John' });

// addNumber sudah menggunakan ES6 dengan rest parameter dan arrow function
// calculateArea sudah menggunkan destructuring dan arrow function
// makeAjaxRequest sudah menggunakan default parameter

