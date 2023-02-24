/** Textual markov chain generator */

class MarkovMachine {
  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter((c) => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    const markovChain = new Map();
    for (let i = 0; i < this.words.length; i++) {
      if (!markovChain.has(this.words[i])) {
        markovChain.set(this.words[i], [this.words[i + 1]]);
      } else {
        markovChain.get(this.words[i]).push(this.words[i + 1]);
      }
    }
    this.markovChain = markovChain;
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    const wordsArr = [];
    let keys = Array.from(this.markovChain.keys());
    let idx = Math.floor(Math.random() * keys.length);
    let key = keys[idx];
    let nextWords;

    while (wordsArr.length < numWords) {
      wordsArr.push(key);
      nextWords = this.markovChain.get(key);
      idx = Math.floor(Math.random() * nextWords.length);
      key = nextWords[idx];
    }
    return wordsArr.join(" ");
  }
}

module.exports = { MarkovMachine };
