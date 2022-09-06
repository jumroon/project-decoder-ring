// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  function isUnique(str) {
    return new Set(str).size == str.length;
  }

  const STANDARD_ALPHABET = "abcdefghijklmnopqrstuvwxyz";

  function getNewAlphabetObject(newAlphabet, encode) {
    const newAlphabetArray = newAlphabet.split("");
    const standardAlphabetArray = STANDARD_ALPHABET.split("");
    const newAlphabetObject = {};
    for (let i = 0; i < newAlphabet.length; i++) {
      if (encode === true) {
        newAlphabetObject[standardAlphabetArray[i]] = newAlphabetArray[i];
      } else {
        newAlphabetObject[newAlphabetArray[i]] = standardAlphabetArray[i];
      }
    }

    return newAlphabetObject;
  }

  function processWord(message, alphabet, encode) {
    const newAlphabetObject = getNewAlphabetObject(alphabet, encode);
    let encodedMessage = "";
    const messageArray = message.split("");
    for (let i = 0; i < messageArray.length; i++) {
      encodedMessage += newAlphabetObject[messageArray[i]];
    }
    return encodedMessage;
  }

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26 || isUnique(alphabet) === false) {
      return false;
    }

    const message = input
      .toLowerCase()
      .split(" ")
      .map((word) => processWord(word, alphabet, encode))
      .join(" ");

    return message;
  }

  // console.log(processWord("jkvvc", "plmoknijbuhvygctfxrdzeswaq", false));
  // console.log(processWord("hello", "plmoknijbuhvygctfxrdzeswaq", true));

  console.log(
    "substitution",
    substitution("hello hello", "plmoknijbuhvygctfxrdzeswaq", true)
  );

  console.log(
    "substitution",
    substitution("jkvvc jkvvc", "plmoknijbuhvygctfxrdzeswaq", false)
  );

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
