export const checkWin = (checkWord: string, trueWord: string): boolean => {
  return checkWord.toLowerCase() === trueWord.toLowerCase();
};

export const findCorrectPos = (checkWord: string, trueWord: string): string => {
  let correctLetters: string = "";

  checkWord
    .toLowerCase()
    .split("")
    .forEach(
      (letter, pos) =>
        (correctLetters +=
          letter === trueWord[pos].toLowerCase() ? letter : "*")
    );

  return correctLetters;
};

export const findCorrectLetters = (
  checkWord: string,
  trueWord: string
): string => {
  let correctLetters: Set<string> = new Set();

  checkWord
    .toLowerCase()
    .split("")
    .forEach((letter) => {
      if (trueWord.toLowerCase().includes(letter)) correctLetters.add(letter);
    });

  return Array.from(correctLetters.values()).join("");
};
