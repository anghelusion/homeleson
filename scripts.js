let number = +prompt("Введите число:");
if (number) {
    let result = number * 0.1;
    console.log(`10% от введенного числа: ${result}`);
  }  
  

  let number1 = +prompt("Введите первое число:");
  let number2 = +prompt("Введите второе число:");
  if (number1 < number2) {
    console.log(`Наименьшее число: ${number1}`);
  }
  else if (number2 < number1) {
    console.log(`Наименьшее число: ${number2}`);
  } else {
    console.log("Числа равны.");
  }


  let number3 = +prompt("Введите число:");
  if (number3 < 100) {
    console.log("Число меньше 100");
  } else if (number3 > 100) {
    console.log("Число больше 100");
  } else {
    console.log("Число равно 100");
  }


  let name3 = prompt("Введите ваше имя:");
  let age = prompt("Введите ваш возраст:");
  if (age >= 18) {
    console.log(`Hello, ${name3}`);
  } else {
    console.log(`Hi, ${name3}`);
  }