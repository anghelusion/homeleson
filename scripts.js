for (let i = 0; i <= 10; i += 2) {
    console.log(i);
  }
222

  for (let i = 55; i >= 20; i--) {
    console.log(i);
  }
221
  const numbers = [3, 5, 11, 2, 8, 1, 6];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
223
const numbers1 = [3, 5, 11, 2, 8, 1, 6];
const numbers_squared1 = [];

for (let i = 0; i < numbers1.length; i++) {
  numbers_squared1.push(numbers1[i] ** 2);
}
console.log(numbers_squared1);


333 
const numbers_squared = [9, 25, 121, 4, 64, 1, 36];
const last_elem = numbers_squared[numbers_squared.length - 1];
console.log(last_elem);


444
const user = {
    first_name: 'Ivan',
    last_name: 'Ivanov',
    age: 20,
    salary: 500
  };
  
  const String = `User's name is ${user.first_name} ${user.last_name}. He is ${user.age} years old.`;
  
  console.log(String);