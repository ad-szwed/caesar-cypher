function encryption(input) {

  let alphabet = "ABCDEFGHIJKLMNOPRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    encrypted = "encryption: ";

  for (let i = 0; i < input.length; i++) {

    let currentLetter = input.charAt(i),
      encryptedLetter = alphabet.indexOf(currentLetter) + 1;

    // IF space
    if (currentLetter == " ") {
      encrypted += currentLetter;

      // IF 9 -> 0
    } else if (currentLetter == '9') {
      encrypted += '0';

      // IF z -> a
    } else if (currentLetter === 'z') {
      encryptedLetter = 'a';
      encrypted += encryptedLetter;

      // IF Z -> A
    } else if (currentLetter == 'Z') {
      encryptedLetter = 'A';
      encrypted += encryptedLetter;

      // non-exception character ciphered
    } else if (alphabet.includes(currentLetter)) {
      encrypted += alphabet.charAt(encryptedLetter);

    }
  }

  console.log(encrypted);
  return encrypted;
}

function decryption(toDecrypt) {
  // let toDecrypt = 'bebn taxfeb 2', 
  let alphabet = 'ABCDEFGHIJKLMNOPRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    decrypted = 'decryption: ';

  for (let i = 0; i < toDecrypt.length; i++) {

    let currentLetter = toDecrypt.charAt(i),
      decryptedLetter = alphabet.charAt(alphabet.indexOf(currentLetter) - 1);

    // IF space
    if (currentLetter == ' ') {
      decrypted += currentLetter;

      // IF a -> z
    } else if (currentLetter === 'a') {
      decryptedLetter = 'z';
      decrypted += decryptedLetter;

      // IF A -> Z
    } else if (currentLetter === 'A') {
      decryptedLetter = 'Z';
      decrypted += decryptedLetter

      // IF 0 -> 9
    } else if (currentLetter == '0') {
      decrypted += '9'

      // non-exception character ciphered
    } else if (alphabet.includes(currentLetter)) {
      decrypted += decryptedLetter;
    }
  }

  console.log(decrypted);
  return decrypted;
}
encryption('AaAa 09 ZzZz');
decryption('AaAa 90 ZzZz');
