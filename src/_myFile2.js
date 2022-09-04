const ALPHABET = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const getReplacementLetterIndex = (shiftAndIndexSum, alphabet) => {
  const maxAlphabetIndex = alphabet.length - 1;
  const alphabetLength = alphabet.length;

  const shouldWrapRight = shiftAndIndexSum < 0;
  if (shouldWrapRight) {
    return shiftAndIndexSum + alphabetLength;
  }

  const shouldWrapLeft = shiftAndIndexSum > maxAlphabetIndex;
  if (shouldWrapLeft) {
    return shiftAndIndexSum - alphabetLength;
  }

  return shiftAndIndexSum;
};

const createShift = (shiftBy, alphabet, encode = true) => {
  const shift = {};
  alphabet.forEach((letter, index) => {
    // console.log(letter, index);

    const shiftAndIndexSum = index + shiftBy;

    const replacementLetterIndex = getReplacementLetterIndex(
      shiftAndIndexSum,
      alphabet
    );

    shift[letter] = alphabet[replacementLetterIndex];
  });

  return shift;
};

const shiftMessage = (message, shiftBy) => {
  const myAlphabet = ALPHABET;
  const shift = createShift(shiftBy, myAlphabet);

  const shiftedMessage = message
    .split("")
    .map((character) => {
      if (myAlphabet.includes(character)) {
        return shift[character];
      }

      return character;
    })
    .join("");

  console.log(shiftedMessage);
  return shiftedMessage;
};

const caesar = (input, shift, encode = true) => {
  return shiftMessage(input, encode ? shift : -shift);
};

// createShift(2, ALPHABET);

shiftMessage("a quick brown fox jumps over a lazy dog", 2);
shiftMessage("c swkem dtqyp hqz lworu qxgt c ncba fqi", -2);

caesar("a quick brown fox jumps over a lazy dog", 2, true);
caesar("c swkem dtqyp hqz lworu qxgt c ncba fqi", 2, false);

// shiftMessage("c ef da bcbbaf rcfc", -2, ALPHABET);

// console.log(createShift(-2, ALPHABET));
