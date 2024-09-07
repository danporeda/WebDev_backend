const franc = require("franc");
const langs = require("langs");
const colors = require("colors");

// const input = process.argv.slice(2).join(" ");
const input = process.argv[2]; // wrap text with ''
const langCode = franc(input);

if (langCode === 'und') {
  console.log('Could not determine the language. try more sample text'.red)
} else {
  const language = langs.where("3", langCode)
  if (language) {
    console.log(`Best guess is: ${language.name.green}`);
  } else {
    console.log(`Could not find a language for code ${langCode}`.red);
  }
}