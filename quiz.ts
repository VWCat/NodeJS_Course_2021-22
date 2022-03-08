import { keyInSelect, question } from "readline-sync";
import fs from "fs";

const quiz = async (): Promise<void> => {
  let buf = await fs.promises.readFile("./assets/txt/qwestions.txt");
  //   console.log(buf.toString());
  const arrQwestionsAll = buf.toString().split("++++\n");
  arrQwestionsAll.pop();
  //   console.log(arrQwestionsAll);

  const arrQwestions = arrQwestionsAll.map((el) => {
    const questions = el.split("\n");
    return {
      question: questions[0],
      answers: questions.filter((el, idx) => idx > 0 && idx < 5),
      trueAnswer: +questions[5],
    };
  });
  //   console.log(arrQwestions);
  arrQwestions.forEach((el) => {
    console.clear();
    console.log(el.question);
    console.log("Варианты ответов: ");
    // console.log(el.answers.map((el, idx) => `${idx + 1}. ${el}`).join("\n"));
    const userAnswer =
      keyInSelect(
        el.answers.map((el, idx) => `${idx + 1}. ${el}`),
        "Ваш вариант ответа: ",
        { cancel: false }
      ) + 1;
    console.log(userAnswer === el.trueAnswer ? "Верно :)" : "Не угадали :(");
    question("Нажмите Enter, чтобы продолжить. ", {
      hideEchoBack: true,
      mask: " ",
    });
  });
};

export default quiz;
