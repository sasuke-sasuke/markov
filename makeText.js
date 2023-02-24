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

const data = fs.readFileSync(argv, "utf8");

markov = new MarkovMachine(data);
console.log(markov.makeText());
