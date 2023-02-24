const { MarkovMachine } = require("./markov");

describe("MarkovMachine class", () => {
  let testData;
  let testMarkov;
  beforeEach(() => {
    testData =
      'Once upon a time there was a boy named Jack. He had a goat that he named Billy. Billy hated being a goat because all the other goats would call him a "billy goat" and he did not like that at all. He cried every day because of it, and then he died. Sad time.';
    testMarkov = new MarkovMachine(testData);
  });

  test("testMarkov.makeText() should equal 100 words", () => {
    console.log(testMarkov);
    let words = testMarkov.makeText();
    words = words.split(" ");
    expect(words.legnth).toEqual(100);
  });

  test("testMarkov.makeText() should retun a Map", () => {
    let words = testMarkov.makeText();
    console.log(words);
    expect(words).any(Map);
  });
});
