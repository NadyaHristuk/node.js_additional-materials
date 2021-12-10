// Пример демонстрирует какие свойства храняться в объекте module

const obj = require('./mod');
// Если запустить файл на выполнение, то консоли выведиться 
// подробная инфомация - Объект module хранит информацию о текущем модуле
console.log(module);

//Module {
//  id: '.',                                        - путь к запускаемому файлу
//  exports: {},                                    - обьект который возвращается функцией require
//  parent: null,                                   - родительский модуль
//  filename: 'D:\\Node\\001_Module\\main.js',      - Абсолютный путь к файлу
//  loaded: false,                                  - статус обработки модуля
//  children:                                       - дочерние модули
//   [ Module {
//       id: 'D:\\Node\\001_Module\\mod.js',
//       exports: {},
//       parent: [Circular],
//       filename: 'D:\\Node\\001_Module\\mod.js',
//       loaded: true,
//       children: [],
//       paths: [Object] } ],
//  paths:                                          - пути по которым происходит поиск модуля
//   [ 'D:\\Node\\001_Module\\node_modules',
//     'D:\\Node\\node_modules',
//     'D:\\node_modules' ] }
