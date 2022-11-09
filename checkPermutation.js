// ask if casing matters
// ask if white space matters

function checkPermutation (str1, str2) {
  if(str1.length !== str2.length) return false;

  const s1Freq = {};
  const s2Freq = {};

  for (let ltr of str1) {
    s1Freq[ltr] ?  s1Freq[ltr]++ :  s1Freq[ltr] = 0;
  }

  for (let ltr of str2) {
    s2Freq[ltr] ?  s2Freq[ltr]++ :  s2Freq[ltr] = 0;
  }

  for (let ltr in s1Freq) {
    if (s1Freq[ltr] !== s2Freq[ltr]) {
      return false;
    }
  }

  return true;
}

checkPermutation('ohell', 'hello') // true
checkPermutation('abc','def') // false