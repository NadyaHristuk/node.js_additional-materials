// Пример как экспортировать информацию из файла 
// - есть три равнозначные записи
// this.exports = exports = module.exports

// Чаще всего применяеться запись exports

var obj = require('./mod');

console.log(obj.variable);

obj.sayHello();

