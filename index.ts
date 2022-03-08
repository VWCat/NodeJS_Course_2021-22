import consoleInput from "readline-sync";
import quiz from "./quiz";
import wordle from "./wordle";
// console.log(process.argv);

// console.log(+process.argv[2] + +process.argv[3]);

// const prompt = require("prompt-sync")();
// let a = +prompt("Введите первое число: ");
// let b = +prompt("Введите второе число: ");

// console.log("Сумма введённых чисел: ", a + b);

console.clear();
switch (
  consoleInput.keyInSelect(
    [
      "Wordle — Попробуйте угадать слово из пяти букв",
      "Quiz — Ответьте на все вопросы викторины",
    ],
    "Во что будем играть?",
    { cancel: false }
  )
) {
  case 0:
    wordle();
    break;
  case 1:
    quiz();
    break;
}
