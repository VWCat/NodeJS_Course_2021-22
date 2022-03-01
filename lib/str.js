const word = "HELLO";

const checkWin = (checkWord) => {
  return word.toLowerCase() !== checkWord.toLowerCase();
};

const countCorrectPos = (checkWord) => {
  let correctLettersArr = [];

  for (let idx = 0; idx < checkWord.length; idx++) {
    correctLettersArr[idx] =
      checkWord[idx].toLowerCase() === word[idx].toLowerCase()
        ? checkWord[idx]
        : "*";
  }
  return correctLettersArr.join("");
};

const countCorrectLetters = (checkWord) => {
  let correctLettersArr = new Set();

  for (let idx = 0; idx < checkWord.length; idx++) {
    for (let j = 0; j < word.length; j++) {
      if (checkWord[idx].toLowerCase() === word[j].toLowerCase())
        correctLettersArr.add(checkWord[idx]);
    }
  }
  return correctLettersArr.values();
};

module.exports = {
  checkWin,
  countCorrectPos,
  countCorrectLetters,
};
