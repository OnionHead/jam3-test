const inquirer = require('inquirer');

const scripts = require('./scripts/index.js');

const scriptsName = Object.keys(scripts).sort();

const initialQuestio = async () => {
  console.clear();
  console.log(`
  #       ██╗ █████╗ ███╗   ███╗██████╗     ████████╗███████╗███████╗████████╗
  #       ██║██╔══██╗████╗ ████║╚════██╗    ╚══██╔══╝██╔════╝██╔════╝╚══██╔══╝
  #       ██║███████║██╔████╔██║ █████╔╝       ██║   █████╗  ███████╗   ██║   
  #  ██   ██║██╔══██║██║╚██╔╝██║ ╚═══██╗       ██║   ██╔══╝  ╚════██║   ██║   
  #  ╚█████╔╝██║  ██║██║ ╚═╝ ██║██████╔╝       ██║   ███████╗███████║   ██║   
  #   ╚════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚═════╝        ╚═╝   ╚══════╝╚══════╝   ╚═╝   
  `);

  const { selectedScript } = await inquirer.prompt([{
    type: 'list',
    name: 'selectedScript',
    message: 'Select what script you want to test',
    choices: scriptsName,
  }]);

  console.clear();

  await scripts[ selectedScript ].start()

  const { otherScript } = await inquirer.prompt([{
    type: 'confirm',
    name: 'otherScript',
    message: 'Would you like to test another script?',
    choices: scriptsName,
  }]);

  console.clear();

  if (otherScript) {
    initialQuestio();
  }
}

initialQuestio();