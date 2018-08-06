const { getWordsOccurences } = require("./occurences");

describe("getWordsOccurences", () => {
  it("should get back the correct number of occurences", () => {
    // given
    const text = `coucou "Hello1" coucou, l'apostrophe presse-papier
    
    l'apostrophe ok`;

    // when
    const result = getWordsOccurences(text);

    // then
    expect(result).toHaveLength(5);
    expect(result[0]).toEqual({
      word: "coucou",
      count: 2
    });
    expect(result[1]).toEqual({
      word: "Hello1",
      count: 1
    });
    expect(result[2]).toEqual({
      word: "apostrophe",
      count: 2
    });
    expect(result[3]).toEqual({
      word: "presse-papier",
      count: 1
    });
    expect(result[4]).toEqual({
      word: "ok",
      count: 1
    });
  });
});
