const removePunctuation = text => text.replace(/[^0-z\-]/g, " ")

const removeExtraSpaces = text => text.replace(/\s\s+/g, " ")

const toWords = text => {
  const textWithoutPunctuation = removePunctuation(text);
  const textWithoutExtraSpaces = removeExtraSpaces(textWithoutPunctuation);
  return textWithoutExtraSpaces.split(" ");
};

const incrementWordOccurence = occurence => {
  const actualOccurence = occurence || 0;
  return actualOccurence + 1;
};

const filterShortWords = words => words.filter(word => word.length >= 2)

const getWordsOccurences = text => {
  const words = toWords(text);
  const longWords = filterShortWords(words);
  const occurences = longWords.reduce((occurences, word) => {
    return {
      ...occurences,
      [word]: incrementWordOccurence(occurences[word])
    };
  }, {});

  return Object.keys(occurences).map(word => ({
    word,
    count: occurences[word]
  }));
};

module.exports = {
  getWordsOccurences
};
