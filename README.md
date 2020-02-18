# Remove Vowels

- Create a function that takes a string and returns a new string with all vowels removed.

**Original String**

```javascript
removeVowels("I have never seen a thin person drinking Diet Coke.")
removeVowels("We're gonna build a wall!") ➞ "W'r gnn bld wll!")
removeVowels("Happy Thanksgiving to all--even the haters and losers!")
```

**Expected Output**

```javascript
" hv nvr sn thn prsn drnkng Dt Ck.";
"W'r gnn bld wll!";
"Hppy Thnksgvng t ll--vn th htrs nd lsrs!";
```

## Solutions

- [First Solution](https://github.com/bidodev/remove-vowel/tree/first-solution)
  ![Imgur](https://i.imgur.com/rkeGM67.png)

  ```javascript
  // 1. Created a function using the method arr.some() to check if the letter is a vowel.
  // The method .some() will return either true or false.

  // 2. We have another function to remove the vowels.
  // 2.1 First we split the text and using arr.map() and or previously function we return only an array without the vowels.

  // 3. At the end we use join to have a string.
  ```

- [Second Solution](https://github.com/bidodev/remove-vowel/tree/second-solution)
  ![Imgur](https://i.imgur.com/HlfdqF1.png)

  ```javascript
  // 1. In this solution we use the method build-in replace() and regex to filter out all the vowels.
  ```

- [Third Solution](https://github.com/bidodev/remove-vowel/tree/third-solution)
  ![Imgur](https://i.imgur.com/PYJxnB3.png)

  ```javascript
  // 1. In this solution we also have 2 functions. The first one validated if is or not a vowel.
  // 2. The second function push into the array result all not vowels.
  // 3. At the end we use join to have a string.
  ```
