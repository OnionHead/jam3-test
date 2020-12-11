const inquirer = require('inquirer');

const { styleLog, logAnswer } = require('../utils.js');

const method = (total = 0) => {
  /* parse the input to a integer number, if is */
  let parsedTotal = parseInt(total);

  /* 
  check if the parsed input is a real integer valid number
  if not, the method return 0 and stop the execution 
  */
  if (!total || !Number.isInteger(parseInt(parsedTotal))) {
    return 0;
  };

  /*
  get the input and do a loop from the input until 2,
  and multiplying the same input with the index minus 1,
  who represents the previous number, started by the input 
  */
  for (let i = parsedTotal; i > 1; i--) {
    parsedTotal *= (i - 1);
  };

  /* return the calulcated input */
  return parsedTotal;
};

const start = async () => {
  console.log(styleLog(`The following function will calculate the factorial 
  from a number (not so big), inputed by user
  `, 'HEADER'));

  const { factorialNumber } = await inquirer.prompt([{
    type: 'input',
    name: 'factorialNumber',
    message: 'Select a number between 3 and 50',
    validate(value) {
      if (value >= 3 && value <= 50) {
        return true;
      }

      return 'You need to select a number between 3 and 50';
    },
  }]);

  const result = method(factorialNumber);

  logAnswer(result, method);
}

module.exports = {
  start,
};