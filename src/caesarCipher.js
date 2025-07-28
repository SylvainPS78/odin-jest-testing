function shiftLetterUpper(letter, key) {
  const asciiLetter = letter.charCodeAt(0);
  const asciiNew =
    ((asciiLetter - "A".charCodeAt(0) + key) % 26) + "A".charCodeAt(0);
  return String.fromCharCode(asciiNew);
}

function shiftLetterLower(letter, key) {
  const asciiLetter = letter.charCodeAt(0);
  const asciiNew =
    ((asciiLetter - "a".charCodeAt(0) + key) % 26) + "a".charCodeAt(0);
  return String.fromCharCode(asciiNew);
}

function convertChar(char, key) {
  if (char.charCodeAt(0) < 32 || char.charCodeAt(0) === 127) {
    console.log(`Error, this character ${char} can't be converted`);
    return char;
  } else if (char.charCodeAt(0) >= 32 && char.charCodeAt(0) < 65) {
    return char;
  } else if (char.charCodeAt(0) >= 91 && char.charCodeAt(0) < 97) {
    return char;
  } else if (char.charCodeAt(0) >= 123 && char.charCodeAt(0) < 127) {
    return char;
  } else if (char.charCodeAt(0) >= 128 && char.charCodeAt(0) < 256) {
    return char;
  } else if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) < 91) {
    return shiftLetterUpper(char, key);
  } else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) < 123) {
    return shiftLetterLower(char, key);
  }
}

function caesarCipher(string, key) {
  let caesarCipherArray = string.split("").map((char) => {
    return convertChar(char, key);
  });

  return caesarCipherArray.join("");
}

export default caesarCipher;
