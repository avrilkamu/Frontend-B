// Array Object
// let student = [
//     {
//         id: 1,
//         firstName: "John",
//         grade: 80,
//     },
//     {
//         id: 2,
//         firstName: "Jane",
//         grade: 90,
//     },
//     {
//         id: 3,
//         firstName: "Bob",
//         grade: 100,
//     }
// ];
// console.log(student);

// //1. for-loop
// for (let i=0; i<student.length; i++){
//     console.log(student[1].firstName);
// }
// //2. while-loop
// let i = 0;
// while(i<student.length){
//     console.log(student[i].firstName);
//     i++;
// }

// //3. 

//mini exercise
let countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua", "Barbuda", 
    "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", 
    "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", 
    "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", 
    "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", 
    "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", 
    "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", 
    "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", 
    "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", 
    "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", 
    "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", 
    "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", 
    "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", 
    "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", 
    "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", 
    "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", 
    "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", 
    "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", 
    "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", 
    "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", 
    "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", 
    "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", 
    "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", 
    "Yemen", "Zambia", "Zimbabwe"];

// 1. Cari index dari negara Indonesia
let indexIndonesia = countries.indexOf("Indonesia");
console.log("Index of Indonesia:", indexIndonesia);

// 2. Dengan menggunakan filter, tampilkan semua negara yang berakhiran 'sia'
let countriesEndingWithSia = countries.filter(country => country.endsWith("sia"));
console.log("Countries ending with 'sia':", countriesEndingWithSia);

// 3. Tampilkan semua negara yang memiliki jumlah karakter lebih dari 7
let countriesWithMoreThan7Chars = countries.filter(country => country.length > 7);
console.log("Countries with more than 7 characters:", countriesWithMoreThan7Chars);

//1. cari index dari negara indonesia
//2. dengan menggunakan filter tampilkan
//   semua negara yangberakiran "sia"
//3. tampilkan semua negara yang memiliki jumlah karakter > 7 

