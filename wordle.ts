import * as str from "./lib/str";
import promptSync from "prompt-sync";
import fs from "fs";

const prompt = promptSync({ sigint: true });

enum COL {
  RESET = "\x1b[0m",
  CYAN = "\x1b[36m",
  GREEN = "\x1b[32m",
  YELLOW = "\x1b[33m",
}

export const wordle = async (): Promise<void> => {
  const buf = await fs.promises.readFile("./assets/txt/dictionary_test.txt");
  const abc = await fs.promises.readFile("./assets/txt/alphabet.txt");
  const dic = new Set(buf.toString().split("\n"));
  const usedLetters = {
    truePos: new Set() as Set<string>,
    wrongPos: new Set() as Set<string>,
    used: new Set() as Set<string>,
  };
  let userWord: string;
  let userWords: string = "";

  const trueWord = Array.from(dic.values())[
    Math.floor(Math.random() * dic.size)
  ];

  console.log(dic.size, trueWord);

  while (true) {
    while (!dic.has((userWord = prompt("Введите своё слово: ")))) {
      console.log("\x1b[31m%s\x1b[0m", "Нет такого слова!!!");
    }

    userWord
      .toUpperCase()
      .split("")
      .forEach((letter, pos) => {
        if (letter === trueWord[pos].toUpperCase()) {
          userWords += COL.GREEN + letter + COL.RESET;
          usedLetters.truePos.add(letter);
        } else if (trueWord.toUpperCase().includes(letter)) {
          userWords += COL.YELLOW + letter + COL.RESET;
          usedLetters.wrongPos.add(letter);
        } else {
          userWords += letter;
          usedLetters.used.add(letter);
        }
      });

    userWords += "\n";

    console.log(userWords);

    if (str.checkWin(userWord, trueWord)) break;
    console.log(
      "Буквы на своих местах: ",
      str.findCorrectPos(userWord, trueWord)
    );
    console.log(
      "Угаданные буквы: ",
      str.findCorrectLetters(userWord, trueWord)
    );
  }
  console.log("\x1b[30m%s\x1b[0m", "I am cyan");
  console.log("\x1b[31m%s\x1b[0m", "I am cyan");
  console.log("\x1b[32m%s\x1b[0m", "I am cyan");
  console.log("\x1b[33m%s\x1b[0m", "I am cyan");
  console.log("\x1b[34m%s\x1b[0m", "I am cyan");
  console.log("\x1b[35m%s\x1b[0m", "I am cyan");
  console.log("\x1b[36m%s\x1b[0m", "I am cyan");
  console.log("\x1b[37m%s\x1b[0m", "I am cyan");
  console.log("\x1b[38m%s\x1b[0m", "I am cyan");
  console.log("\x1b[39m%s\x1b[0m", "I am cyan");
  //

  // let userWord = prompt("Введите своё слово: ").trim();

  // while (!str.checkWin(userWord, trueWord)) {
  //   console.log("Вы не угадали, попробуйте ещё раз!");

  //   userWord = prompt("Введите своё слово: ");
  // }
  // console.log("Поздравляю!");
};
