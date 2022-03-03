import * as str from "./lib/str";
import promptSync from "prompt-sync";
import fs from "fs";

const prompt = promptSync();

export const wordle = async (): Promise<void> => {
  const buf = await fs.promises.readFile("./dictionary_test.txt");
  const dic = new Set(buf.toString().split("\n"));

  const trueWord = Array.from(dic.values())[
    Math.floor(Math.random() * dic.size)
  ];

  // console.log(dic.size, trueWord);

  let userWord = prompt("Введите своё слово: ");

  while (!str.checkWin(userWord, trueWord)) {
    console.log("Вы не угадали, попробуйте ещё раз!");
    console.log(
      "Буквы на своих местах: ",
      str.findCorrectPos(userWord, trueWord)
    );
    console.log(
      "Угаданные буквы: ",
      str.findCorrectLetters(userWord, trueWord)
    );
    userWord = prompt("Введите своё слово: ");
  }
  console.log("Поздравляю!");
};
