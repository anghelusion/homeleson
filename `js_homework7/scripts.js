//Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.
function min(a, b) {
    if (a < b) {
        return a;
      } 
      else {
        return b;
      }
    } 

   // Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.
   function even(a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    for (let i = max; i >= min; i--) {
      if (i % 2 == 0) {
        console.log(i);
      }
    }
  }
 
 //Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.

 function power(base, exponent = 2) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
      result = result * base;
    }
    return result;
  }

  //Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.

  function sum(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
      result = result + i;
    }
    return result;
  }

  //Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).

  function sumEvenOdd(n, m) {
    let even = 0;
    let odd = 0;
    let max = Math.max(n, m);
    let min = Math.min(n, m);
    for (let i = min; i <= max; i++) {
      if (i % 2 == 0) {
        even = even + i;
      }
      else {
        odd = odd + i;
      }
    }
    console.log(even);
    console.log(odd);
  }


  //Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. 
//Пример: [ 'one', 'two', 'three' ] => 'three'

function longest(array) {
  if (array.length === 0) {
    return null;
  }
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i].length > max.length) {
      max = array[i];
    }
  }
  return max;
}
