const fs = require('mz/fs');

fs
  .readFile('data.json', 'utf8')
  .then(data => {
    let result = JSON.parse(data);
    result.test = result.test + 10;
    return result;
  })
  .then(data => {
    return fs.writeFile('data.json', JSON.stringify(data))
  })
  .then(() => {
    console.log('Done');
  })
  .catch(err => {
    console.log(err);
  })

  // для запуска примеров из этой папки необходимо находять в корне папки '03_Async code' 
// в терминале выполнить команду 'npm i', если вы этого еще не сделали