import * as str from "./lib/str";
import promptSync from "prompt-sync";
import fs from "fs";

const prompt = promptSync({ sigint: true });

enum TXT {
  RESET = "\x1b[0m",
  CYAN = "\x1b[38;5;159;1m",
  GREEN = "\x1b[32;1m",
  YELLOW = "\x1b[33;1m",
  CROSSGRAY = "\x1b[38;5;245;9m",
  RED = "\x1b[31m",
}

export const wordle = async (): Promise<void> => {
  let buf = await fs.promises.readFile("./assets/txt/dictionary_noun.txt");
  const dic = new Set(buf.toString().split("\n"));
  buf = await fs.promises.readFile("./assets/txt/alphabet.txt");
  const abc = buf.toString().split("").join(" ");
  const usedLetters = {
    truePos: new Set() as Set<string>,
    wrongPos: new Set() as Set<string>,
    used: new Set() as Set<string>,
  };
  let userWord: string;
  let userWords: string = "";
  let userAbc: string = "";
  let tries = 7;

  const trueWord = Array.from(dic.values())[
    Math.floor(Math.random() * dic.size)
  ];

  console.clear();
  console.log("Попробуйте угадать слово из пяти букв!");

  while (tries) {
    while (!dic.has((userWord = prompt("Введите своё слово: ")))) {
      console.log(TXT.RED, "Нет такого слова!!!", TXT.RESET);
    }

    userWord
      .toUpperCase()
      .split("")
      .forEach((letter, pos) => {
        if (letter === trueWord[pos].toUpperCase()) {
          userWords += TXT.GREEN + letter + TXT.RESET + " ";
          usedLetters.truePos.add(letter);
        } else if (trueWord.toUpperCase().includes(letter)) {
          userWords += TXT.YELLOW + letter + TXT.RESET + " ";
          usedLetters.wrongPos.add(letter);
        } else {
          userWords += letter + " ";
          usedLetters.used.add(letter);
        }
      });

    userWords += "\n";

    userAbc = abc
      .split("")
      .map((letter) => {
        if (usedLetters.truePos.has(letter)) {
          return TXT.GREEN + letter + TXT.RESET;
        } else if (usedLetters.wrongPos.has(letter)) {
          return TXT.YELLOW + letter + TXT.RESET;
        } else if (usedLetters.used.has(letter)) {
          return TXT.CROSSGRAY + letter + TXT.RESET;
        } else {
          return TXT.CYAN + letter + TXT.RESET;
        }
      })
      .join("");

    console.clear();
    console.log(userAbc);
    console.log(userWords);

    if (str.checkWin(userWord, trueWord)) break;
    tries -= 1;
  }

  if (tries)
    console.log(
      "Поздравляем!!! Вы угадали!!!"
        .split("")
        .map(
          (letter) =>
            "\x1b[38;5;" + Math.floor(17 + Math.random() * 215) + ";1m" + letter
        )
        .join(" ")
    );
  else console.log("Вы проиграли. Исчерпаны все 7 попыток.");
};
