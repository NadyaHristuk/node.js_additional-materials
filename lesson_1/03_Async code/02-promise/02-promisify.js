const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

readFile('data.json', 'utf8').then(data => {
  let result = JSON.parse(data);
  result.test = result.test + 10;
  return result;
}).then(data => {
  return writeFile('data.json', JSON.stringify(data))
}).then(() => {
  console.log('Done');
}).catch(err => {
  console.log(err);
})

 