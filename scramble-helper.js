// Create a function that reverses a word
function reverse_word(word) {
  const letters = word.split("");
  letters.reverse();
  return letters.join("");
}


// Create a function that takes an array of words and returns a new array of the
 // words with each word reversed.

function reverse_array_words(array) {
  const new_reverse_array = [];
  for (const word of array) {
    new_reverse_array.push(reverse_word(word));
  } return new_reverse_array;
}

// Create a function that returns a random word from an array
function choose_random_word(words) {
  return words[Math.floor(Math.random() * words.length)];
}


// Create an array of words and save it to a variable. Using your functions create
// a second array of reversed words.

const words = ['kiss', 'my', 'ass']
const reverse_words = reverse_array_words(words)

// We could use the two arrays we've created to select a random word to show the user
// and check their guess. How could we do that? Is there a better way?



// ////////////////////////////////////////////////////////////////////////////

// Create a function that takes an array of words and returns a map with the keys
// as the reversed word and the values as the original word.

function createMap(words, reverse_words) {
  const palindromes = new Map();
  for (const i in words) {
    palindromes[reverse_words[i]] = words[i];
  } return palindromes;
}


// Create a function that takes two strings, `guess` and `word` and a map, like
// the one you created above. If the first string is in the map, return the word
// if not, console log "Sorry, incorrect. The word was ..." and include word.
function guessing_game(guess, word, maap) {
  if (maap.has(guess)) {
    return word;
  } else {
    console.log(`Sorry, incorrect. The word was ${word}`);
  }
}



// ////////////////////////////////////////////////////////////////////////////
// FURTHER STUDY

// Create a function that scrambles a word. Use whatever method you like to
// rearrange the letters.



// Create a function that takes an array of words and returns a map with the
// scrambled words as the keys and the original word as the values.
