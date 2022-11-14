// 1) написати функцію, яка повертає слово 'odd' або 'even', в залежності від прийнятого аргументу(число).
// Значення для перевірки функції вводить користувач.

const userInput = '8'
const userInputNumber = function(value){
  if(Number(value)%2===0){
    return 'even'
  }
  return 'odd'
}
 console.log(userInputNumber(userInput))

 //2)написати функцію, яка приймає два аргументи і, якщо аргументи одного типу, то повертає той, який має більше значення (якщо значення рівні - повертаємо null), інакше(якщо різного типу) теж повертає null.

let firsArgument = 7
let secondArgument = 6
TwoArguments = function(val1,val2){
  if(typeof val1===typeof val2 && val1>val2){
    return val1
  }
  if(typeof val1===typeof val2 && val1<val2){
    return val2
  }
  if(firsArgument!==secondArgument){
    return null
  }
  
}
console.log(TwoArguments(firsArgument,secondArgument))
