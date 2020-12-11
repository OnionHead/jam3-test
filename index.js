const inquirer = require('inquirer');

const scripts = require('./scripts/index.js');

const scriptNames = Object.keys(scripts).sort().map((scriptKey) => {
  return `${scriptKey} - ${scripts[scriptKey].smallDescription}`;
});

const initialQuestion = async (nextQuestion = true) => {
  console.clear();
  console.log(`
  #       ██╗ █████╗ ███╗   ███╗██████╗     ████████╗███████╗███████╗████████╗
  #       ██║██╔══██╗████╗ ████║╚════██╗    ╚══██╔══╝██╔════╝██╔════╝╚══██╔══╝
  #       ██║███████║██╔████╔██║ █████╔╝       ██║   █████╗  ███████╗   ██║   
  #  ██   ██║██╔══██║██║╚██╔╝██║ ╚═══██╗       ██║   ██╔══╝  ╚════██║   ██║   
  #  ╚█████╔╝██║  ██║██║ ╚═╝ ██║██████╔╝       ██║   ███████╗███████║   ██║   
  #   ╚════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚═════╝        ╚═╝   ╚══════╝╚══════╝   ╚═╝   
  `);

  if(!nextQuestion) {
    console.log(`
    Thanks you :)
    `);
    return false;
  }

  const { selectedScript } = await inquirer.prompt([{
    type: 'list',
    name: 'selectedScript',
    message: 'Select what script you want to test',
    choices: scriptNames,
  }]);

  console.clear();

  const selectedScriptKey = selectedScript.split(' - ');

  await scripts[ selectedScriptKey[0] ].start()

  const { reRun } = await inquirer.prompt([{
    type: 'confirm',
    name: 'reRun',
    message: 'Would you like to test another script?',
  }]);

  console.clear();

  initialQuestion(reRun);
}

initialQuestion();