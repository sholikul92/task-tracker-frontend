export const firstWordCapital = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1, word.length);
};