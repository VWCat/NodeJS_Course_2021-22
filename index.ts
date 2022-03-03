import { wordle } from "./wordle";
// console.log(process.argv);

// console.log(+process.argv[2] + +process.argv[3]);

const prompt = require("prompt-sync")();
// let a = +prompt("Введите первое число: ");
// let b = +prompt("Введите второе число: ");

// console.log("Сумма введённых чисел: ", a + b);

// const fs = require("fs");
// const main = async () => {
//   const buf = await fs.promises.readFile("./qwestions.txt");
//   //   console.log(buf.toString());
//   const arrQwestionsAll = buf.toString().split("++++\n");
//   arrQwestionsAll.pop(arrQwestionsAll.length);
//   //   console.log(arrQwestionsAll);

//   const arrQwestions = arrQwestionsAll.map((el) => {
//     const questions = el.split("\n");
//     return {
//       question: questions[0],
//       answers: questions.filter((el, idx) => idx > 0 && idx < 5),
//       trueAnswer: questions[5],
//     };
//   });
//   //   console.log(arrQwestions);
//   arrQwestions.forEach((el) => {
//     console.log(el.question);
//     console.log("Варианты ответов: ");
//     console.log(el.answers.map((el, idx) => `${idx + 1}. ${el}`).join("\n"));
//     const userAnswer = prompt("Введите номер ответа: ");
//     console.log(userAnswer === el.trueAnswer ? "Верно :)" : "Не угадали :(");
//   });
// };
// main();
wordle();
