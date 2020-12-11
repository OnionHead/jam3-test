const inquirer = require('inquirer');

const { styleLog, logAnswer } = require('../utils.js');

const method = (wordA, wordB) => {
  /* 
  regular expression identifying 
  multiple words and special characters 
  */
  const regexTest = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  /* check both strings are valid word */
  if (regexTest.test(wordA) || regexTest.test(wordB)) {
    return false;
  }

  /* 
  get both strings and turn to lower case strings, 
  exploding in array to sort, then join again 
  in a single string again
  */
  const sanitizedWordA = wordA.toLowerCase().split('').sort().join('');
  const sanitizedWordB = wordB.toLowerCase().split('').sort().join('');

  /* check if two strings are equals */
  return sanitizedWordB === sanitizedWordA;
};

const start = async () => {
  console.log(styleLog(`This function will take two words from the user and check it words are twin words,
  a word written with the same letters (case insensitive) 
  but not necessarily in the same order.

  For example, Silent is a twin of Listen.
  `, 'HEADER'));

  const { wordA } = await inquirer.prompt([{
    type: 'input',
    name: 'wordA',
    message: 'Type the first single word without special characters ([ `!@#$%^&*()_+=[]{};\'\"\:|,.<>?~])',
    validate(value) {
      if (!/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value)) {
        return true;
      }

      return 'You need to type a word without special characters, or multiple words';
    }
  }]);

  const { wordB } = await inquirer.prompt([{
    type: 'input',
    name: 'wordB',
    message: 'Type the second word without special characters ([ `!@#$%^&*()_+=[]{};\'\"\:|,.<>?~])',
    validate(value) {
      if (!/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value)) {
        return true;
      }

      return 'You need to type a word without special characters, or multiple words';
    }
  }]);

  const result = method(wordA, wordB);

  logAnswer(result, method);
}

module.exports = {
  start,
  smallDescription: 'Check if two words are twin',
};