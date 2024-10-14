//1
const calculateAge = (birthYear) => {
    return 2019 - birthYear;
  };
  
  let yearUntilRetirement = ({ year, firstName }) => {
    const age = calculateAge(year);
    const retirement = 60 - age;
  
    if (retirement > 0) {
      console.log(`${firstName} retires in ${retirement} years`);
    } else {
      console.log(`${firstName} is already retired.`);
    }
  };
  
  yearUntilRetirement({ year: 1987, firstName: 'John' });

//2.
 const addNumber = (...numbers) => {
  return numbers.reduce((sum, current) => sum + current, 0);
 };
console.log(`${addNumber(1, 2, 3, 4, 5, 6, 7)}`);

//3.
const calculateArea = ({ radius, power = 2 }) => {
    return 3.14 * Math.pow(radius, power);
  };
  
  const radius21 = 21;
  const area21 = calculateArea({ radius: radius21 });
  
  const radius7 = 7;
  const area7 = calculateArea({ radius: radius7 });
  
  console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// 4.
const makeAjaxRequest = (url, method = 'GET') => {
    console.log(url, method);
  };
  
  makeAjaxRequest('www.google.com');