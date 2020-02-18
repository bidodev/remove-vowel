const isVowel = (letter) => {
  const VOWELS = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < VOWELS.length; i++) {
    const element = VOWELS[i];
    if (letter === element) {
      return true;
    }
  }
  return false;
};

const removeVowels = (string) => {
  const result = [];

  for (let i = 0; i < string.length; i++) {
    const element = string[i];
    if (!isVowel(element)) {
      result.push(element);
    }
  }
  return result.join("");
};

console.log(
  removeVowels("I have never seen a thin person drinking Diet Coke.")
);
console.log(removeVowels("We're gonna build a wall!"));
console.log(
  removeVowels("Happy Thanksgiving to all--even the haters and losers!")
);
