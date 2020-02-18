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
console.log(
  removeVowels("I have never seen a thin person drinking Diet Coke.")
);
console.log(removeVowels("We're gonna build a wall!"));
console.log(
  removeVowels("Happy Thanksgiving to all--even the haters and losers!")
);
