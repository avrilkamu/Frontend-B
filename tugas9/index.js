// //1. Promise
//A Buatlah sebuah function bernama helloWorld
// function helloWorld() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Hello World!");
//         }, 2000);
//     });
// }
// //1.B Buatlah sebuah async function bernama messages
// async function messages() {
//     const msg = await helloWorld();
//     console.log(msg);
// }
// //1.C Panggil function messages
// messages();

//2. Fetch
//A.
// function ambilDataUser() {
// //B.
//     fetch("https://reqres.in/api/users")
// //C.
//         .then((response) => {
//             return response.json();
//         })
// //D.
//         .then((users) => {
//             users.data.forEach(user => {
//                 console.log(`NAMA PERTAMA :${user.first_name}, NAMA TERAKHIR :${user.last_name}`);
//             });
//         })
// //E.
//         .catch((error) => {
//             console.error('Error fetching data:', error);
//         });
// }
// ambilDataUser();

//3. Async Await
// async function ambilDataUser() {
//     try {
//       const response = await fetch("https://reqres.in/api/users");
//       const users = await response.json();
      
//       // Menampilkan first_name dan last_name dari setiap user
//       users.data.forEach((user) => {
//         console.log(`First Name: ${user.first_name}, Last Name: ${user.last_name}`);
//       });
//     } catch (error) {
//       console.error('Terjadi kesalahan:', error);
//     }
//   }
  
//   ambilDataUser(); // Memanggil function ambilDataUser  

//4. 
// Pastikan Anda telah mengimpor Axios jika belum:
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

async function ambilDataUser() {
    try {
        const response = await axios.get('https://reqres.in/api/users');
        const users = response.data;
        users.data.forEach((user) => {
            console.log( `First Name: ${user.first_name}, Last Name: ${user.last_name}  `);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Panggil function ambilDataUser
ambilDataUser();
  