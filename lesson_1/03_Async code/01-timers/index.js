const fs = require('fs');

console.log('Начало работы');

setTimeout(() => {
  console.log('setTimeout happened');
}, 0);

fs.open(__filename, 'r', (err, fd) => {
  console.log('file reading!');
});

setImmediate(() => {
  console.log('immediate happened');
});

new Promise(resolve => {
  resolve('promise happened');
}).then(console.log);

process.nextTick(() => {
  console.log('nextTick happened');
});

console.log('Конец файла');

// Пример показывает что Node обрабатывает запросы асинхронно, и результат 
// выполнения функций будет выведен в консоль не в том порядке в котором эти функции вызывались
// для запуска остальных примеров из этой папки необходимо находять в корне папки '03_Async code' 
// в терминале выполнить команду 'npm i'