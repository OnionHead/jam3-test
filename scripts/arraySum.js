const inquirer = require('inquirer');

const { styleLog, logAnswer } = require('../utils.js');

const method = (listNumbers, start, end) => {
  let sum = 0;

  /* check any wrong input */
  if (start < 0 || end > listNumbers.length -1 || start > end || end < start) {
    return sum;
  };

  /* 
  Do a loop between the start and the end inputs 
  summing up the values saving in sum variable 
  */
  for (let i = start; i <= end; i++) {
    sum += listNumbers[i];
  };

  /* return the total */
  return sum;
};

const start = async () => {
  console.log(styleLog(`The following function is responsable to
  return the sum of integers from an defined array ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  based on start index and end index inputed by user
  `, 'HEADER'));

  const { start } = await inquirer.prompt([{
    type: 'input',
    name: 'start',
    message: 'Select a number between 0 and 9',
    validate(value) {
      if (value >= 0 && value <= 9) {
        return true;
      }

      return 'You need to select a number between 0 and 9';
    },
  }]);

  const { end } = await inquirer.prompt([{
    type: 'input',
    name: 'end',
    message: 'Select a number between '+ start +' and 9',
    validate(value) {
      if (value >= start && value <= 9) {
        return true;
      }

      return 'You need to select a number between '+ start +' and 9';
    },
  }]);

  const result = method([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], start, end);

  logAnswer(result, method);
}

module.exports = {
  start,
  smallDescription: 'Returns the sum of the values of an array segment',
};