// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
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
  const ALPHABET_SIZE = ALPHABET.length;
  const MAX_ALPHABET_INDEX = ALPHABET_SIZE - 1;

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

    return message
      .split("")
      .map((character) => {
        if (myAlphabet.includes(character)) {
          return shift[character];
        }

        return character;
      })
      .join("");
  };

  const caesar = (message, shift, encode = true) => {
    if (
      shift === 0 ||
      shift > MAX_ALPHABET_INDEX ||
      shift < -MAX_ALPHABET_INDEX
    ) {
      return false;
    }
    return shiftMessage(message.toLowerCase(), encode ? shift : -shift);
  };

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
