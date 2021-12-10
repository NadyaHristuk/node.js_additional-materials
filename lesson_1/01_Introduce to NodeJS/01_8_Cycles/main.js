// Пример показывает, как не надо делать.
// Очень не желатльно делать перекрёстные ссылки внутри модулей, 
// которые потом подключаються к основному модулю

console.log('Main module is starting.');

const a = require('./testA.js');
const b = require('./testB.js');

console.log('in main, testA.done=', a.done, ' testB.done=' , b.done);