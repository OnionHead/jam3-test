const inquirer = require('inquirer');

const { styleLog, logAnswer } = require('../utils.js');

const method = (word) => {
  /* 
  check the input word is valid, 
  if not, will return a empty array 
  */
  if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(word)) {
    return [];
  }

  /* get an array of the keys from the objetc */
  const keys = Object.keys({
    fabio: 26,
    iran: 22,
    miguel:25,
  });

  /* 
  loop the array keys and return an 
  array of the user word with the array keys 
  */
  return keys.map((name) => `${word}-${name}`);
};

const start = async () => {
  console.log(styleLog(`This function will take the keys from the following Object ages

  const ageDevelopers = {
    fabio: 26,
    iran: 22,
    miguel: 25,
  } 

  and merge with a input user single word 
  and gaves us an array with the word inputed with the object keys
  `, 'HEADER'));

  const { word } = await inquirer.prompt([{
    type: 'input',
    name: 'word',
    message: 'Type a single word without special characters ([ `!@#$%^&*()_+=[]{};\'\"\:|,.<>?~])',
    validate(value) {
      if (!/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value)) {
        return true;
      }

      return 'You need to type a word without special characters, or multiple words';
    }
  }]);

  const result = method(word);

  logAnswer(JSON.stringify(result), method);
}

module.exports = {
  start,
  smallDescription: 'Merge a given word with object keys',
};