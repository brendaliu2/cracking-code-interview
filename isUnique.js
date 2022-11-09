function isUnique (string) {
  let letterFreq = {};

  for (let letter of string) {
    letterFreq[letter] ?
      letterFreq[letter]++ : letterFreq[letter] = 1;
  }

  if (Object.values(letterFreq).filter(val => val > 1).length) {
    return false;
  } else {
    return true;
  }
}

isUnique('hello') // false
isUnique('abc') // true