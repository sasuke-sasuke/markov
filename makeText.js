const { MarkovMachine } = require("./markov");
const fs = require("fs");

/** Command-line tool to generate Markov text. */
let argv;
try {
  argv = process.argv[2];
} catch (err) {
  console.log("Must enter a file path", err);
  process.exit(1);
}

const markov = makeMarkovMachine();
//console.log(markov.makeText());
console.log("---------------------------------------");
console.log(markov.markovChain);
console.log("---------------------------------------");

function makeMarkovMachine() {
  try {
    const data = fs.readFileSync(argv, "utf8");
    return new MarkovMachine(data);
  } catch (err) {
    console.log(err);
  }
}
