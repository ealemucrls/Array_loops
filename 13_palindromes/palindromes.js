const palindromes = function (string) {
  
  const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

  
  const spacelessString = string.toLowerCase().split('').filter((character) => alphanumerical.includes(character)).join('');

  const reversedString = spacelessString.split('').reverse().join('');
  return spacelessString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
