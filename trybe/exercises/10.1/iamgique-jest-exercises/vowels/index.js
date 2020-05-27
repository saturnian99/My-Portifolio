// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const arr = [...str];
  counter = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  arr.forEach(char =>
    vowels.includes(char.toLowerCase()) ? counter += 1 : true);
  return counter;
}

module.exports = vowels;
