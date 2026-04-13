//! Leetcode 125. Valid Palindrome
var isPalindrome = function (s) {
  if (s.length === 0) return true;
  s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let i = 0, j = s.length - 1;
  while (i < j) {
    if (s[i] != s[j]) return false;
    i++;
    j--;
  }
  return true;
}
