const obfuscate = function (string) {
  let newPass = string.split('');

  for (i = 0; i < newPass.length; i++) {
    if (newPass[i] === 'a') {
      newPass[i] = '4';
    }
    if (newPass[i] === 'e') {
      newPass[i] = '3';
    }
    if (newPass[i] === 'o') {
      newPass[i] = '0';
    }
    if (newPass[i] === 'l') {
      newPass[i] = '1';
    }
  }
  return newPass.join('')
}


console.log(obfuscate(process.argv[2]));