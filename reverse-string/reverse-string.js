export const reverseString = (word) => {
  const reversed = [];
  for (let i = word.length; i >= 0; i -= 1) {
    reversed.push(word[i]);
  }
  return reversed.join('');
};

