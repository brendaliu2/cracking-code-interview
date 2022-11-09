// ask if casing matters. solution doesn't care about case

function checkPermutation (str1, str2) {
  let s1 = str1.toLowerCase();
  let s2 = str2.toLowerCase();

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