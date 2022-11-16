function stringRotation(s1, s2) {
  const totalString = s1 + s2;
  return isSubstring(totalString, s1);
}

function isSubstring(s1, s2) {
  return s1.includes(s2);
}