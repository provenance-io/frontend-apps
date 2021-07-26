const fs = require('fs-extra');
const inquirer = require('inquirer');
const colors = require('colors'); // eslint-disable-line no-unused-vars

/* eslint-disable no-console */
const createFolder = async (path) => (
  fs.emptyDir(path)
    .then(() => console.log(`Created new empty folder at "${path}".`.grey))
    .catch((err) => console.log(`Error: Unable to create folder at "${path}".`.red))
);

const readAndReplaceTemplate = async (readFilePath, replaceValue) => (
  fs.readFile(readFilePath, 'utf-8').then(async (data) => {
    // Need to run the find and replace 3x to handle all cases
    let newFile = data.replace(new RegExp('TEMPLATE', 'g'), replaceValue.toUpperCase());
    newFile = newFile.replace(new RegExp('Template', 'g'), replaceValue); 
    newFile = newFile.replace(new RegExp('template', 'g'), replaceValue.toLowerCase());

    return fs.writeFile(readFilePath, newFile, 'utf-8')
      .then(() => console.log(`Replaced Template "${readFilePath}" values with "${replaceValue}"`.grey))
      .catch(err => err);
  }).catch(err => err)
);

const copyTemplate = async (templateName, targetLocation, componentName) => (
  fs.copy(`${__dirname}/templates/${templateName}`, targetLocation)
    .then(async () => {
      console.log(`Copied ${templateName} to ${targetLocation}`.grey);
      return readAndReplaceTemplate(targetLocation, componentName);
    })
    .catch(err => err)
);

const pathAlreadyExists = async (path) => (
  fs.pathExists(path)
    .then(exists => exists)
    .catch(error => true)
);

const isCamelCase = (value) => (/^[A-Z][a-zA-Z]*$/.test(value));

const appendIndexFile = async (type, name) => {
  let indexFilePath = '';
  let importText = '';
  let exportText = '';
  
  switch (type) {
    case 'component':
      indexFilePath = './src/Components/index.js';
      exportText = `export { default as ${name} } from './${name}';`;
      break;
    case 'action':
      indexFilePath = './src/redux/actions/index.js';
      exportText = `${name},`;
      importText = `import * as ${name} from './${name}';`
      break;
    case 'reducer':
      indexFilePath = './src/redux/reducers/index.js';
      importText = `import ${name} from './${name}';`
      exportText = `${name},`;
      break;
    case 'hook':
      indexFilePath = './src/redux/hooks/index.js';
      exportText = `export { default as ${name} } from './${name}';`;
      break;
    default: break;
  }

  return fs.readFile(indexFilePath, 'utf-8').then(async (data) => {
    let updatedIndexData;
    switch (type) {
      case 'component':
        // Just append to the end of the exports
        updatedIndexData = data.trim().concat(`\n${exportText}\n`);
        break;
      case 'action': {
        let splitIndex = data.trim().indexOf('export {');
        // Update import section
        updatedIndexData = data.trim().substring(0, splitIndex - 1) + `${importText}\n\n` + data.trim().substring(splitIndex);
        // Update export section
        splitIndex = updatedIndexData.trim().indexOf('};');
        updatedIndexData = updatedIndexData.trim().substring(0, splitIndex - 1) + `\n\t${exportText}\n` + updatedIndexData.trim().substring(splitIndex);
        break;
      }
      case 'hook':
        // Just append to the end of the exports
        updatedIndexData = data.trim().concat(`\n${exportText}\n`);
        break;
      case 'reducer': {
        let splitIndex = data.trim().indexOf('const rootReducer = {');
        // Update import section
        updatedIndexData = data.trim().substring(0, splitIndex - 1) + `${importText}\n\n` + data.trim().substring(splitIndex);
        // Update export section
        splitIndex = updatedIndexData.trim().indexOf('};');
        updatedIndexData = updatedIndexData.trim().substring(0, splitIndex - 1) + `\n\t${exportText}\n` + updatedIndexData.trim().substring(splitIndex);
        break;
      }
      default: break;
    }

    return fs.writeFile(indexFilePath, updatedIndexData, 'utf-8')
      .then(() => console.log(`Updated index.js file for "${type}s"`.grey))
      .catch(err => err);
  }).catch(err => err)
};

const promptUser = async (question) => (
  inquirer.prompt(question).then(response => response).catch(err => err)
);

const createComponent = async () => {
  // -------------------------
  // 01) Get Components name
  // -------------------------
  await promptUser({ type: 'input', name: 'name', message: "What is the Component's name?"})
    .then(async ({ name }) => {
      const lowercaseName = name.toLowerCase();
      // ----------------------------------------
      // 02) Make sure Component name is valid
      // ----------------------------------------
      if (!isCamelCase(name)) { return console.log(`Error: Component name "${name}" must be Camel-Case.`.red); }
      // ------------------------------------------------
      // 03) Make sure Component doesn't already exist
      // ------------------------------------------------
      if (await pathAlreadyExists(`./src/Components/${name}`)) { return console.log(`Error: Unable to create Component "${name}", it already exists.`.red)}
      // ---------------------------------------
      // 04) Ask about creating a Redux Store
      // ---------------------------------------
      return await promptUser({ type: 'confirm', name: 'redux', message: 'Does this component need a redux store?'})
        .then(async ({ redux }) => {
          await createFolder(`./src/Components/${name}`);
          if (redux) {
            // -----------------------------------
            // 05a) Create redux files if needed
            // -----------------------------------
            await copyTemplate('actions.js', `./src/redux/actions/${lowercaseName}Actions.js`, name);
            await copyTemplate('hooks.js', `./src/redux/hooks/use${name}.js`, name);
            await copyTemplate('reducers.js', `./src/redux/reducers/${lowercaseName}Reducer.js`, name);
            await copyTemplate('componentRedux.js', `./src/Components/${name}/${name}.js`, name);
            await appendIndexFile('action', `${lowercaseName}Actions`);
            await appendIndexFile('hook', `use${name}`);
            await appendIndexFile('reducer', `${lowercaseName}Reducer`);
          } else {
            // ------------------------------------------
            // 05b) Create Component files w/out redux
            // ------------------------------------------
            await copyTemplate('componentBasic.js', `./src/Components/${name}/${name}.js`, name);
          }
          await copyTemplate('componentIndex.js', `./src/Components/${name}/index.js`, name);
          // ------------------------------------------
          // 06) Update main Component index.js file
          // ------------------------------------------
          await appendIndexFile('component', name);
          await console.log('Finished Successfully!'.green)
        })
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log('Error:  Prompt could not be rendered in the current environment'.red);
      } else {
        console.log(`Error:  ${error}`.red);
      }
    });
};

createComponent();
/* eslint-enable no-console */
