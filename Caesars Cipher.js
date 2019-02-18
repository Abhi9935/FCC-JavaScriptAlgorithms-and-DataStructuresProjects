function rot13(str) { // LBH QVQ VG!
  var newArray = [];
  var rp = /[A-Z]/ ;
  str = str.split("");
  for (var ch in str) {
    if (rp.test(str[ch])) {
      newArray.push((str[ch].charCodeAt() - 65 + 13) % 26 + 65);
    } else {
      newArray.push(str[ch].charCodeAt());
    }
  }
  str = String.fromCharCode.apply(String, newArray);
  return str;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");