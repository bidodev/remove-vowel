/**
 * ls
 * Create a function that takes a string and returns a new string with all vowels removed.
 *
 * Examples:
 *
 * removeVowels("I have never seen a thin person drinking Diet Coke.") ➞ " hv nvr sn  thn prsn drnkng Dt Ck."
 * removeVowels("We're gonna build a wall!") ➞ "W'r gnn bld  wll!"
 * removeVowels("Happy Thanksgiving to all--even the haters and losers!") ➞ "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"
 * Notes: "y" is not considered a vowel.
 *
 */

const isVowel = (letter) => {
  const VOWELS = ["a", "e", "i", "o", "u"];
  return VOWELS.some((vowel) => vowel === letter);
};

const removeVowels = (text) => {
  const arrLetters = text.split("");
  result = arrLetters.map((element) => (!isVowel(element) ? element : ""));
  return result.join("");
};

console.log(removeVowels("We're gonna build a wall!"));
