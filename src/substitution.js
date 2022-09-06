// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  function isUnique(str) {
    return new Set(str).size == str.length;
  }
  const standardAlphabet = {
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
    f: null,
    g: null,
    h: null,
    i: null,
    j: null,
    k: null,
    l: null,
    m: null,
    n: null,
    o: null,
    p: null,
    q: null,
    r: null,
    s: null,
    t: null,
    u: null,
    v: null,
    w: null,
    x: null,
    y: null,
    z: null,
  };

  const STANDARD_ALPHABET = "abcdefghijklmnopqrstuvwxyz";

  function getNewAlphabetObject(newAlphabet) {
    const newAlphabetArray = newAlphabet.split("");
    const standardAlphabetArray = STANDARD_ALPHABET.split("");
    const newAlphabetObject = {};
    for (let i = 0; i < newAlphabet.length; i++) {
      newAlphabetObject[standardAlphabetArray[i]] = newAlphabetArray[i];
    }

    return newAlphabetObject;
  }

  function encodeMessage(message, alphabet) {
    const newAlphabetObject = getNewAlphabetObject(alphabet);
    let encodedMessage = "";
    const messageArray = message.split("");
    for (let i = 0; i < messageArray.length; i++) {
      encodedMessage += newAlphabetObject[messageArray[i]];
    }
    return encodedMessage;
  }

  // console.log(getNewAlphabetObject("plmoknijbuhvygctfxrdzeswaq"));

  // console.log(encodeMessage("hello", "plmoknijbuhvygctfxrdzeswaq"));

  function decodeMessage(message, alphabet) {
    const newAlphabetObject = getNewAlphabetObject(alphabet);
    let decodedMessage = "";
    const messageArray = message.split("");
    for (let i = 0; i < messageArray.length; i++) {
      if (newAlphabetObject[messageArray[i]] === messageArray[i]) {
        decodedMessage += newAlphabetObject[i];
      }
    }
    return decodedMessage;
  }

  console.log(getNewAlphabetObject("plmoknijbuhvygctfxrdzeswaq"));

  console.log(decodeMessage("jkvvc", "plmoknijbuhvygctfxrdzeswaq"));

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26 || isUnique(alphabet) === false) {
      return false;
    }
    const message = input.toLowerCase();
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
