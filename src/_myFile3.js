const getReplacementLetterIndex = (shiftAndIndexSum, alphabet) => {
  const maxAlphabetIndex = alphabet.length - 1;
  const alphabetLength = alphabet.length;

  if (shiftAndIndexSum < 0) {
    return shiftAndIndexSum + alphabetLength;
  }

  if (shiftAndIndexSum > maxAlphabetIndex) {
    return shiftAndIndexSum - alphabetLength;
  }

  return shiftAndIndexSum;
};

const createShift = (shiftBy, alphabet) => {
  const shift = {};
  alphabet.forEach((letter, index) => {
    console.log(letter, index);

    const shiftAndIndexSum = index + shiftBy;

    const replacementLetterIndex = getReplacementLetterIndex(
      shiftAndIndexSum,
      alphabet
    );

    shift[letter] = alphabet[replacementLetterIndex];
  });

  return shift;
};

const shiftMessage = (message, shiftBy, alphabet) => {
  const shift = createShift(shiftBy, alphabet);

  const shiftedMessage = message
    .split("")
    .map((character) => {
      if (alphabet.includes(character)) {
        return shift[character];
      }

      return character;
    })
    .join("");

  console.log(shiftedMessage);
};

const ALPHABET = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
"t", "u", "v", "w", "x", "y", "z"];
// createShift(2, ALPHABET);


const SHIFT = 2;
const MESSAGE = 'I can be any message now!'

// shiftMessage(MESSAGE, SHIFT, ALPHABET);
shiftMessage(shiftMessage(MESSAGE, SHIFT, ALPHABET), -SHIFT, ALPHABET);
// shiftMessage("c ef da bcbbaf rcfc", -SHIFT, ALPHABET);



// console.log(createShift(-2, ALPHABET));
