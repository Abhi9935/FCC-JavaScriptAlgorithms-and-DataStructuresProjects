function palindrome(str) {
  // Good luck!
  var alphanumeric= str.replace(/[\W_]/g, '').toLowerCase();
  var reverseStr = alphanumeric.split('').reverse().join('');
  return alphanumeric === reverseStr;
}

palindrome("eye");
