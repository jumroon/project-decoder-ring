// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const POLYBIUS_SQUARE = [
    ["a", "b", "c", "d", "e"],
    ["f", "g", "h", "i/j", "k"],
    ["l", "m", "n", "o", "p"],
    ["q", "r", "s", "t", "u"],
    ["v", "w", "x", "y", "z"],
  ];

  const POLYBIUS_ENCODE = {
    a: 11,
    b: 21,
    c: 31,
    d: 41,
    e: "51",
    f: 12,
    g: 22,
    h: 32,
    i: 42,
    j: 42,
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: "34",
    t: "44",
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55,
    " ": " ",
  };
  // console.log(POLYBIUS_ENCODE["z"]);

  const getLetter = (column, row) => {
    return POLYBIUS_SQUARE[row - 1][column - 1];
  };

  // "thinkful" -> "4432423352125413"

  function decodeWord(word) {
    let decodedMessage = "";
    const splitMessage = word.split("");
    for (let i = 0; i < splitMessage.length; i = i + 2) {
      console.log(splitMessage[i], splitMessage[i + 1]);
      decodedMessage =
        decodedMessage + getLetter(splitMessage[i], splitMessage[i + 1]);
    }
    return decodedMessage;
  }

  function decodeMessage(message) {
    const words = message.split(" ");
    const allWordsAreEven = words.every((word) => word.length % 2 === 0);
    if (!allWordsAreEven) {
      return false;
    }
    const decodedMessage = words.map((word) => decodeWord(word)).join(" ");
    return decodedMessage;
  }

  function encodeMessage(message) {
    let encodedMessage = "";
    const splitEncode = message.split("");
    for (let i = 0; i < splitEncode.length; i++) {
      encodedMessage = encodedMessage + POLYBIUS_ENCODE[splitEncode[i]];
    }
    return encodedMessage;
  }
  // console.log(POLYBIUS_ENCODE["s"]);
  // console.log(decode("11213141512 11"));

  //"test message"
  // console.log("B", getLetter(2, 1));
  // console.log(decode("4432423352125413"));

  function polybius(input, encode = true) {
    if (encode === true) {
      return encodeMessage(input);
    }
    return decodeMessage(input);
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
