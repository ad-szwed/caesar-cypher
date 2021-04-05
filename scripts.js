function encryption(input) {

  let alphabet = "abcdefghijklmnopqrstuvwxyz0123456789",
    encrypted = "";

  for (let i = 0; i < input.length; i++) {

    let currentLetter = input.charAt(i),
      encryptedLetter = alphabet.indexOf(currentLetter) + 1;

    // IF z -> a
    if (currentLetter == 'z') {
      encryptedLetter = 'a';
      encrypted += alphabet.charAt(encryptedLetter)

      // IF 9 -> 0
    } else if (currentLetter == '9') {
      encrypted += '0';

      // IF space
    } else if (currentLetter == " ") {
      encrypted += " ";

      // non-exception letter
    } else if (alphabet.includes(currentLetter)) {
      encrypted += alphabet.charAt(encryptedLetter);

    }
    console.log(encrypted);
  }
}

encryption();
