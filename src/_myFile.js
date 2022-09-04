const ALPHABET = ["a", "b", "c", "d", "e", "f"];

const createShift = (shiftBy) => {
  const alphabetLength = ALPHABET.length;
  const maxAlphabetIndex = ALPHABET.length - 1;

  const shifted = ALPHABET.map((letter, index) => {
    console.log(letter, index);

    const shiftAndIndexSum = index + shiftBy;

    const replacementLetterIndex =
      shiftAndIndexSum > maxAlphabetIndex
        ? shiftAndIndexSum - alphabetLength
        : shiftAndIndexSum;

    console.log("replacementLetterIndex", replacementLetterIndex);

    return ALPHABET[replacementLetterIndex];
  });

  console.log(shifted);
};


