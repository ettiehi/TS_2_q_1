function wordCounter(inputString: string): {[key: string]: number} {
  inputString = inputString.toLowerCase();
  inputString = inputString.replace(/([^'\w]+)/g, " ");
  inputString = inputString.replace(/\s'|\b'\b|'\s/g, " ");

  const words = inputString.split(/\s+/);
  const wordCounts: {[key: string]: number} = {};

  for (let word of words) {
    if (word !== '') {
      if (word in wordCounts) {
        wordCounts[word]++;
      } else {
        wordCounts[word] = 1;
      }
    }
  }

  return wordCounts;
}

export default wordCounter;
