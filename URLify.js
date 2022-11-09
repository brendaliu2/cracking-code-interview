function URLify (str, charCount) {
  if (str === '') return '';

  let chars = str.split('').slice(0,charCount+1);
  let convertedChars = [];

  for (let char of chars) {
    if (char === " ") {
      convertedChars.push('%20');
    } else {
      convertedChars.push(char);
    }
  }

  return convertedChars.join('');
}

URLify('Mr John Smith    ', 13) // 'Mr%20John%20Smith'
URLify('Mr John Smith    he llo', 13) // 'Mr%20John%20Smith'